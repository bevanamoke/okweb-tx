"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { collection, query, where, getDocs, doc, getDoc } from "firebase/firestore";
import { db } from "@/lib/firebase";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Calendar, User, ArrowLeft } from "lucide-react";
import { format } from "date-fns";

interface Author {
    displayName: string;
    bio: string;
    photoURL: string;
    role: string;
}

interface Post {
    id: string;
    title: string;
    slug: string;
    excerpt: string;
    coverImage: string;
    createdAt: any;
    tags?: string[];
}

export default function AuthorProfilePage({ authorId: propId }: { authorId?: string }) {
    const params = useParams();
    const authorId = propId || (params?.id as string);
    const [author, setAuthor] = useState<Author | null>(null);
    const [posts, setPosts] = useState<Post[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            if (!authorId) return;

            try {
                // Fetch Author
                const userDoc = await getDoc(doc(db, "users", authorId));
                if (userDoc.exists()) {
                    setAuthor(userDoc.data() as Author);
                }

                // Fetch Posts
                const q = query(
                    collection(db, "posts"),
                    where("authorId", "==", authorId),
                    where("status", "==", "published")
                );
                const querySnapshot = await getDocs(q);
                const postsData = querySnapshot.docs.map((doc) => ({
                    id: doc.id,
                    ...doc.data(),
                })) as Post[];
                setPosts(postsData);

            } catch (error) {
                console.error("Error fetching author data:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, [authorId]);

    if (loading) return <div className="p-20 text-center">Loading...</div>;

    if (!author) return <div className="p-20 text-center">Author not found</div>;

    return (
        <div className="min-h-screen bg-background container py-12">
            <Button variant="ghost" className="mb-8" asChild>
                <Link href="/blog"><ArrowLeft className="mr-2 h-4 w-4" /> Back to Blog</Link>
            </Button>

            <div className="grid md:grid-cols-[300px_1fr] gap-12">
                {/* Author Sidebar */}
                <div className="space-y-6">
                    <div className="relative w-48 h-48 mx-auto md:mx-0 rounded-full overflow-hidden border-4 border-muted">
                        {author.photoURL ? (
                            <Image src={author.photoURL} alt={author.displayName} fill className="object-cover" />
                        ) : (
                            <div className="w-full h-full bg-secondary flex items-center justify-center">
                                <User className="h-16 w-16 text-muted-foreground" />
                            </div>
                        )}
                    </div>
                    <div className="text-center md:text-left">
                        <h1 className="text-2xl font-bold">{author.displayName}</h1>
                        <Badge variant="secondary" className="mt-2 capitalize">{author.role}</Badge>
                        <p className="mt-4 text-muted-foreground leading-relaxed">
                            {author.bio || "No bio available."}
                        </p>
                    </div>
                </div>

                {/* Author Posts */}
                <div className="space-y-8">
                    <h2 className="text-2xl font-bold border-b pb-4">Articles by {author.displayName}</h2>
                    <div className="grid gap-6 md:grid-cols-2">
                        {posts.length > 0 ? (
                            posts.map((post) => (
                                <Card key={post.id} className="flex flex-col hover:shadow-md transition">
                                    <div className="relative aspect-video w-full bg-muted rounded-t-lg overflow-hidden">
                                        {post.coverImage && (
                                            <Image src={post.coverImage} alt={post.title} fill className="object-cover" />
                                        )}
                                    </div>
                                    <CardHeader className="p-4">
                                        <div className="text-xs text-muted-foreground mb-2">
                                            {post.createdAt?.toDate ? format(post.createdAt.toDate(), "MMM d, yyyy") : "N/A"}
                                        </div>
                                        <Link href={`/blog/${post.slug}`} className="hover:underline">
                                            <h3 className="font-bold line-clamp-2">{post.title}</h3>
                                        </Link>
                                    </CardHeader>
                                </Card>
                            ))
                        ) : (
                            <p className="text-muted-foreground">No published articles yet.</p>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}
