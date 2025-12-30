"use client";

import { useEffect, useState } from "react";
import { doc, getDoc, updateDoc } from "firebase/firestore";
import { db } from "@/lib/firebase";
import { useAuth } from "@/contexts/AuthContext";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { toast } from "sonner";
import Image from "next/image";

export default function ProfilePage() {
    const { user } = useAuth();
    const [loading, setLoading] = useState(false);

    const [formData, setFormData] = useState({
        displayName: "",
        bio: "",
        photoURL: "",
        role: "author"
    });

    useEffect(() => {
        const fetchProfile = async () => {
            if (!user) return;
            try {
                const docRef = doc(db, "users", user.uid);
                const docSnap = await getDoc(docRef);
                if (docSnap.exists()) {
                    const data = docSnap.data();
                    setFormData({
                        displayName: data.displayName || user.displayName || "",
                        bio: data.bio || "",
                        photoURL: data.photoURL || user.photoURL || "",
                        role: data.role || "author"
                    });
                } else {
                    setFormData({
                        displayName: user.displayName || "",
                        bio: "",
                        photoURL: user.photoURL || "",
                        role: user.role
                    });
                }
            } catch (e) {
                console.error(e);
            }
        }
        fetchProfile();
    }, [user]);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!user) return;
        setLoading(true);

        try {
            await updateDoc(doc(db, "users", user.uid), {
                displayName: formData.displayName,
                bio: formData.bio,
                photoURL: formData.photoURL,
                // Role is usually not editable by user themselves in a real app, handled by admin
            });
            toast.success("Profile updated");
        } catch (error) {
            console.error(error);
            toast.error("Failed to update profile");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="max-w-2xl mx-auto py-10">
            <Card>
                <CardHeader>
                    <CardTitle>Edit Profile</CardTitle>
                </CardHeader>
                <CardContent>
                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div className="flex items-center gap-4 mb-6">
                            {formData.photoURL && (
                                <Image
                                    src={formData.photoURL}
                                    alt="Preview"
                                    width={80}
                                    height={80}
                                    className="rounded-full object-cover"
                                />
                            )}
                        </div>
                        <div className="space-y-2">
                            <Label htmlFor="displayName">Display Name</Label>
                            <Input
                                id="displayName"
                                value={formData.displayName}
                                onChange={(e) => setFormData({ ...formData, displayName: e.target.value })}
                            />
                        </div>
                        <div className="space-y-2">
                            <Label htmlFor="photoURL">Photo URL</Label>
                            <Input
                                id="photoURL"
                                value={formData.photoURL}
                                onChange={(e) => setFormData({ ...formData, photoURL: e.target.value })}
                                placeholder="https://..."
                            />
                        </div>
                        <div className="space-y-2">
                            <Label htmlFor="bio">Bio</Label>
                            <Textarea
                                id="bio"
                                value={formData.bio}
                                onChange={(e) => setFormData({ ...formData, bio: e.target.value })}
                                rows={4}
                                placeholder="Tell us about yourself..."
                            />
                        </div>
                        <div className="space-y-2">
                            <Label>Role</Label>
                            <Input value={formData.role} disabled className="bg-muted" />
                        </div>
                        <Button type="submit" disabled={loading}>
                            {loading ? "Saving..." : "Save Changes"}
                        </Button>
                    </form>
                </CardContent>
            </Card>
        </div>
    );
}
