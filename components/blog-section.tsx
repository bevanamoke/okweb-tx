"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { collection, query, where, getDocs, orderBy, limit } from "firebase/firestore";
import { db } from "@/lib/firebase";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Calendar, User, ArrowRight, BookOpen } from "lucide-react";
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

export default function BlogSection() {
    const [posts, setPosts] = useState<Post[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchPosts = async () => {
            try {
                // Query latest 3 published posts
                const q = query(
                    collection(db, "posts"),
                    where("status", "==", "published"),
                    orderBy("createdAt", "desc"),
                    limit(3)
                );

                const querySnapshot = await getDocs(q);
                const postsData = querySnapshot.docs.map((doc) => ({
                    id: doc.id,
                    ...doc.data(),
                })) as Post[];

                setPosts(postsData);
            } catch (error) {
                console.error("Error fetching blog posts:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchPosts();
    }, []);

    // Don't render the section if there are no posts
    if (!loading && posts.length === 0) {
        return null;
    }

    return (
        <section className="py-20 bg-gradient-to-b from-background to-primary/5">
            <div className="container px-4">
                {/* Section Header */}
                <div className="text-center mb-12">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary mb-4">
                        <BookOpen className="h-4 w-4" />
                        <span className="text-sm font-semibold">Latest Insights</span>
                    </div>
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold mb-4">
                        From Our <span className="text-primary">Blog</span>
                    </h2>
                    <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                        Stay updated with the latest insights on Odoo, AI automation, and digital transformation
                    </p>
                </div>

                {/* Blog Posts Grid */}
                {loading ? (
                    <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 mb-12">
                        {[1, 2, 3].map((i) => (
                            <div key={i} className="h-96 rounded-xl bg-muted animate-pulse" />
                        ))}
                    </div>
                ) : (
                    <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 mb-12">
                        {posts.map((post) => (
                            <Card
                                key={post.id}
                                className="group flex flex-col overflow-hidden hover:shadow-2xl transition-all duration-300 border-2 hover:border-primary/50 bg-card/50 backdrop-blur"
                            >
                                <Link href={`/blog/view?slug=${post.slug}`} className="relative aspect-video w-full bg-muted overflow-hidden">
                                    {post.coverImage ? (
                                        <Image
                                            src={post.coverImage}
                                            alt={post.title}
                                            fill
                                            className="object-cover transition-transform group-hover:scale-110 duration-500"
                                        />
                                    ) : (
                                        <div className="flex items-center justify-center w-full h-full bg-gradient-to-br from-primary/20 to-primary/5 text-primary">
                                            <BookOpen className="h-12 w-12" />
                                        </div>
                                    )}
                                    {/* Overlay on hover */}
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                </Link>

                                <CardHeader className="space-y-2">
                                    <div className="flex items-center justify-between text-xs text-muted-foreground">
                                        <div className="flex items-center gap-1">
                                            <Calendar className="h-3 w-3" />
                                            {post.createdAt?.toDate ? format(post.createdAt.toDate(), "MMM d, yyyy") : "N/A"}
                                        </div>
                                        {post.tags && post.tags.length > 0 && (
                                            <Badge variant="secondary" className="text-[10px] px-2 py-0">
                                                {post.tags[0]}
                                            </Badge>
                                        )}
                                    </div>
                                    <Link href={`/blog/view?slug=${post.slug}`} className="group-hover:text-primary transition-colors">
                                        <h3 className="text-xl font-bold line-clamp-2 leading-tight">
                                            {post.title}
                                        </h3>
                                    </Link>
                                </CardHeader>

                                <CardContent className="flex-1">
                                    <p className="text-muted-foreground line-clamp-3 text-sm leading-relaxed">
                                        {post.excerpt}
                                    </p>
                                </CardContent>

                                <CardFooter className="flex items-center justify-between border-t pt-4">
                                    <div className="flex items-center text-sm font-medium">
                                        <User className="mr-2 h-4 w-4 text-primary" />
                                        {post.authorName && post.authorName !== "Admin" ? post.authorName : "Bevan"}
                                    </div>
                                    <Link
                                        href={`/blog/view?slug=${post.slug}`}
                                        className="text-primary hover:underline text-sm font-semibold flex items-center gap-1 group-hover:gap-2 transition-all"
                                    >
                                        Read More
                                        <ArrowRight className="h-4 w-4" />
                                    </Link>
                                </CardFooter>
                            </Card>
                        ))}
                    </div>
                )}

                {/* View All Button */}
                <div className="text-center">
                    <Button asChild size="lg" className="group">
                        <Link href="/blog">
                            View All Articles
                            <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                        </Link>
                    </Button>
                </div>
            </div>
        </section>
    );
}
