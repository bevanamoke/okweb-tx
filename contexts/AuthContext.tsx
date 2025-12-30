"use client";

import React, { createContext, useContext, useEffect, useState } from "react";
import { onAuthStateChanged, User, signOut as firebaseSignOut } from "firebase/auth";
import { auth, db } from "@/lib/firebase";
import { doc, getDoc } from "firebase/firestore";

interface UserProfile {
    uid: string;
    email: string | null;
    displayName: string | null;
    photoURL: string | null;
    role: "admin" | "editor" | "author" | "user";
}

interface AuthContextType {
    user: UserProfile | null;
    loading: boolean;
    signOut: () => Promise<void>;
    isAdmin: boolean;
    isEditor: boolean;
    isAuthor: boolean;
}

const AuthContext = createContext<AuthContextType>({
    user: null,
    loading: true,
    signOut: async () => { },
    isAdmin: false,
    isEditor: false,
    isAuthor: false,
});

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
    const [user, setUser] = useState<UserProfile | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, async (firebaseUser) => {
            if (firebaseUser) {
                // Fetch user role from Firestore
                try {
                    const userDoc = await getDoc(doc(db, "users", firebaseUser.uid));
                    if (userDoc.exists()) {
                        const userData = userDoc.data();
                        setUser({
                            uid: firebaseUser.uid,
                            email: firebaseUser.email,
                            displayName: userData.displayName || firebaseUser.displayName,
                            photoURL: userData.photoURL || firebaseUser.photoURL,
                            role: userData.role || "user",
                        });
                    } else {
                        // Fallback if no firestore doc yet
                        setUser({
                            uid: firebaseUser.uid,
                            email: firebaseUser.email,
                            displayName: firebaseUser.displayName,
                            photoURL: firebaseUser.photoURL,
                            role: "user", // Default role
                        });
                    }
                } catch (error) {
                    console.error("Error fetching user profile:", error);
                    setUser({
                        uid: firebaseUser.uid,
                        email: firebaseUser.email,
                        displayName: firebaseUser.displayName,
                        photoURL: firebaseUser.photoURL,
                        role: "user",
                    });
                }
            } else {
                setUser(null);
            }
            setLoading(false);
        });

        return () => unsubscribe();
    }, []);

    const signOut = async () => {
        await firebaseSignOut(auth);
    };

    const isAdmin = user?.role === "admin";
    const isEditor = user?.role === "editor" || isAdmin;
    const isAuthor = user?.role === "author" || isEditor;

    return (
        <AuthContext.Provider value={{ user, loading, signOut, isAdmin, isEditor, isAuthor }}>
            {children}
        </AuthContext.Provider>
    );
};
