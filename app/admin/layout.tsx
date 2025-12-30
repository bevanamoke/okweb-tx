"use client";

import { useAuth } from "@/contexts/AuthContext";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function AdminLayout({ children }: { children: React.ReactNode }) {
    const { user, loading, isAuthor, signOut } = useAuth();
    const router = useRouter();

    useEffect(() => {
        if (!loading && !user) {
            router.push("/login");
        }
        // Optional: Add stricter role check here if needed
        // if (!loading && user && !isAuthor) {
        //   router.push("/"); // Redirect unauthorized users
        // }
    }, [user, loading, router, isAuthor]);

    if (loading) {
        return <div className="flex h-screen items-center justify-center">Loading...</div>;
    }

    if (!user) {
        return null; // Will redirect
    }

    return (
        <div className="min-h-screen bg-background">
            <div className="border-b">
                <div className="container flex items-center justify-between h-16">
                    <div className="flex items-center gap-6">
                        <Link href="/admin/dashboard" className="font-bold text-lg">
                            Blog Admin
                        </Link>
                        <nav className="flex items-center gap-4 text-sm">
                            <Link href="/admin/dashboard" className="transition-colors hover:text-foreground/80">
                                Dashboard
                            </Link>
                            <Link href="/admin/posts/create" className="transition-colors hover:text-foreground/80">
                                New Post
                            </Link>
                            <Link href="/" target="_blank" className="transition-colors hover:text-foreground/80">
                                View Site
                            </Link>
                        </nav>
                    </div>
                    <div className="flex items-center gap-4">
                        <span className="text-sm text-muted-foreground">
                            {user.displayName || user.email}
                        </span>
                        <Button variant="outline" size="sm" onClick={() => signOut()}>
                            Sign Out
                        </Button>
                    </div>
                </div>
            </div>
            <main className="container py-6">
                {children}
            </main>
        </div>
    );
}
