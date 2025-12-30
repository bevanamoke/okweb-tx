"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { collection, query, where, getDocs, orderBy, limit } from "firebase/firestore";
import { db } from "@/lib/firebase";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Calendar, User } from "lucide-react";
import { format } from "date-fns";

interface Post {
    id: string;
    title: string;
    slug: string;
    excerpt: string;
    coverImage: string;
    authorName: string;
    createdAt: any;
    tags?: string[];
}

export default function BlogListingPage() {
    const [posts, setPosts] = useState<Post[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchPosts = async () => {
            try {
                // Query published posts
                const q = query(
                    collection(db, "posts"),
                    where("status", "==", "published"),
                    orderBy("createdAt", "desc"),
                    limit(20)
                );

                const querySnapshot = await getDocs(q);
                const postsData = querySnapshot.docs.map((doc) => ({
                    id: doc.id,
                    ...doc.data(),
                })) as Post[];

                setPosts(postsData);
            } catch (error) {
                console.error("Error fetching published posts:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchPosts();
    }, []);

    return (
        <div className="min-h-screen bg-background">
            {/* Hero Section */}
            <section className="bg-primary/5 py-16 md:py-24">
                <div className="container px-4 text-center">
                    <h1 className="text-4xl font-extrabold tracking-tight md:text-5xl lg:text-6xl mb-4">
                        Our <span className="text-primary">Blog</span>
                    </h1>
                    <p className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto">
                        Insights, updates, and expert advice on Odoo, AI Automation, and Digital Transformation.
                    </p>
                </div>
            </section>

            {/* Posts Grid */}
            <section className="container px-4 py-16">
                {loading ? (
                    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                        {[1, 2, 3].map((i) => (
                            <div key={i} className="h-96 rounded-xl bg-muted animate-pulse" />
                        ))}
                    </div>
                ) : posts.length > 0 ? (
                    <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                        {posts.map((post) => (
                            <Card key={post.id} className="flex flex-col overflow-hidden hover:shadow-lg transition-shadow duration-300">
                                <div className="relative aspect-video w-full bg-muted">
                                    {post.coverImage ? (
                                        <Image
                                            src={post.coverImage}
                                            alt={post.title}
                                            fill
                                            className="object-cover transition-transform hover:scale-105 duration-500"
                                        />
                                    ) : (
                                        <div className="flex items-center justify-center w-full h-full bg-secondary text-secondary-foreground">
                                            No Image
                                        </div>
                                    )}
                                </div>
                                <CardHeader className="space-y-2">
                                    <div className="flex items-center justify-between text-xs text-muted-foreground">
                                        <div className="flex items-center">
                                            <Calendar className="mr-1 h-3 w-3" />
                                            {post.createdAt?.toDate ? format(post.createdAt.toDate(), "MMM d, yyyy") : "N/A"}
                                        </div>
                                        {post.tags && (
                                            <div className="flex gap-1">
                                                {post.tags.slice(0, 2).map(tag => (
                                                    <Badge key={tag} variant="secondary" className="text-[10px] px-1 py-0">{tag}</Badge>
                                                ))}
                                            </div>
                                        )}
                                    </div>
                                    <Link href={`/blog/view?slug=${post.slug}`} className="hover:underline">
                                        <h2 className="text-xl font-bold line-clamp-2 leading-tight">{post.title}</h2>
                                    </Link>
                                </CardHeader>
                                <CardContent className="flex-1">
                                    <p className="text-muted-foreground line-clamp-3 text-sm">
                                        {post.excerpt}
                                    </p>
                                </CardContent>
                                <CardFooter className="flex items-center justify-between border-t pt-4">
                                    <div className="flex items-center text-sm font-medium">
                                        <User className="mr-2 h-4 w-4 text-primary" />
                                        {post.authorName && post.authorName !== "Admin" ? post.authorName : "Bevan"}
                                    </div>
                                    <Button variant="link" asChild className="px-0">
                                        <Link href={`/blog/view?slug=${post.slug}`}>Read More</Link>
                                    </Button>
                                </CardFooter>
                            </Card>
                        ))}
                    </div>
                ) : (
                    <div className="text-center py-20">
                        <p className="text-muted-foreground text-lg">No articles published yet. Check back soon!</p>
                    </div>
                )}
            </section>
        </div>
    );
}
