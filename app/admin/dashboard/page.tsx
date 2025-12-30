"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { collection, query, where, getDocs, orderBy, deleteDoc, doc } from "firebase/firestore";
import { db } from "@/lib/firebase";
import { useAuth } from "@/contexts/AuthContext";
import { Button } from "@/components/ui/button";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { format } from "date-fns";
import { Edit, Trash2, Plus, ExternalLink } from "lucide-react";
import { toast } from "sonner";

interface Post {
    id: string;
    title: string;
    slug: string;
    status: "published" | "draft";
    createdAt: any;
    authorId: string;
}

export default function DashboardPage() {
    const { user, isAdmin, isEditor } = useAuth();
    const [posts, setPosts] = useState<Post[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchPosts = async () => {
            if (!user) return;

            try {
                let q;
                if (isAdmin || isEditor) {
                    // Admins/Editors see all posts
                    q = query(collection(db, "posts"), orderBy("createdAt", "desc"));
                } else {
                    // Authors see own posts
                    q = query(collection(db, "posts"), where("authorId", "==", user.uid));
                }

                // Note: Use a composite index for complex queries if needed. Starting simple.
                // If sorting by createdAt with where clause, firestore needs an index.
                // Fallback to client side sort if index missing for now to avoid errors in demo

                const querySnapshot = await getDocs(q);
                const postsData = querySnapshot.docs.map((doc) => ({
                    id: doc.id,
                    ...doc.data(),
                })) as Post[];
                // Sort client side to handle index missing issues gracefully
                postsData.sort((a, b) => {
                    const dateA = a.createdAt?.toDate ? a.createdAt.toDate() : new Date(a.createdAt);
                    const dateB = b.createdAt?.toDate ? b.createdAt.toDate() : new Date(b.createdAt);
                    return dateB.getTime() - dateA.getTime();
                });

                setPosts(postsData);
            } catch (error) {
                console.error("Error fetching posts:", error);
                toast.error("Failed to load posts");
            } finally {
                setLoading(false);
            }
        };

        fetchPosts();
    }, [user, isAdmin, isEditor]);

    const handleDelete = async (postId: string) => {
        if (!confirm("Are you sure you want to delete this post?")) return;
        try {
            await deleteDoc(doc(db, "posts", postId));
            setPosts(posts.filter(p => p.id !== postId));
            toast.success("Post deleted");
        } catch (error) {
            console.error(error);
            toast.error("Failed to delete post");
        }
    }

    if (loading) return <div>Loading dashboard...</div>;

    return (
        <div className="space-y-6">
            <div className="flex items-center justify-between">
                <h1 className="text-3xl font-bold">My Posts</h1>
                <Button asChild>
                    <Link href="/admin/posts/create">
                        <Plus className="mr-2 h-4 w-4" /> New Post
                    </Link>
                </Button>
            </div>

            <div className="border rounded-lg">
                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHead>Title</TableHead>
                            <TableHead>Status</TableHead>
                            <TableHead>Date</TableHead>
                            <TableHead className="text-right">Actions</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {posts.length === 0 ? (
                            <TableRow>
                                <TableCell colSpan={4} className="text-center py-10">No posts found</TableCell>
                            </TableRow>
                        ) : (
                            posts.map((post) => (
                                <TableRow key={post.id}>
                                    <TableCell className="font-medium">
                                        {post.title}
                                        <br />
                                        <span className="text-xs text-muted-foreground">/{post.slug}</span>
                                    </TableCell>
                                    <TableCell>
                                        <Badge variant={post.status === "published" ? "default" : "secondary"}>
                                            {post.status}
                                        </Badge>
                                    </TableCell>
                                    <TableCell>
                                        {post.createdAt?.toDate ? format(post.createdAt.toDate(), "MMM d, yyyy") : "N/A"}
                                    </TableCell>
                                    <TableCell className="text-right space-x-2">
                                        {post.status === 'published' && (
                                            <Button variant="ghost" size="icon" asChild>
                                                <Link href={`/blog/view?slug=${post.slug}`} target="_blank">
                                                    <ExternalLink className="h-4 w-4" />
                                                </Link>
                                            </Button>
                                        )}
                                        <Button variant="ghost" size="icon" asChild>
                                            <Link href={`/admin/posts/edit?id=${post.id}`}>
                                                <Edit className="h-4 w-4" />
                                            </Link>
                                        </Button>
                                        <Button variant="ghost" size="icon" className="text-destructive hover:text-destructive" onClick={() => handleDelete(post.id)}>
                                            <Trash2 className="h-4 w-4" />
                                        </Button>
                                    </TableCell>
                                </TableRow>
                            ))
                        )}
                    </TableBody>
                </Table>
            </div>
        </div>
    );
}
