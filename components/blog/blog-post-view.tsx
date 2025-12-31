"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { collection, query, where, getDocs, limit } from "firebase/firestore";
import { db } from "@/lib/firebase";
import { Button } from "@/components/ui/button";
import { Calendar, User, ArrowLeft, Share2 } from "lucide-react";
import { format } from "date-fns";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeRaw from "rehype-raw";

interface Post {
    id: string;
    title: string;
    content: string;
    coverImage: string;
    authorName: string;
    authorPhoto?: string;
    createdAt: any;
    tags?: string[];
}

interface BlogPostViewProps {
    slug: string;
}

export default function BlogPostView({ slug }: BlogPostViewProps) {
    const [post, setPost] = useState<Post | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchPost = async () => {
            if (!slug) return;

            try {
                const q = query(
                    collection(db, "posts"),
                    where("slug", "==", slug),
                    where("status", "==", "published"),
                    limit(1)
                );

                const querySnapshot = await getDocs(q);
                if (querySnapshot.empty) {
                    setPost(null);
                } else {
                    const doc = querySnapshot.docs[0];
                    setPost({ id: doc.id, ...doc.data() } as Post);
                }
            } catch (error) {
                console.error("Error fetching post:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchPost();
    }, [slug]);

    if (loading) {
        return (
            <div className="container py-20 flex justify-center">
                <div className="h-8 w-8 animate-spin rounded-full border-4 border-primary border-t-transparent" />
            </div>
        );
    }

    if (!post) {
        return (
            <div className="container py-20 text-center">
                <h1 className="text-3xl font-bold mb-4">Post Not Found</h1>
                <p className="mb-8 text-muted-foreground">The article you are looking for does not exist or has been removed.</p>
                <Button asChild>
                    <Link href="/blog">Back to Blog</Link>
                </Button>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-background">
            {/* Article Header */}
            <header className="relative w-full h-[400px] md:h-[500px] bg-muted">
                {post.coverImage && (
                    <Image
                        src={post.coverImage}
                        alt={post.title}
                        fill
                        className="object-cover brightness-50"
                        priority
                    />
                )}
                <div className="absolute inset-0 flex flex-col justify-end p-6 md:p-12 lg:p-20 bg-gradient-to-t from-background via-background/60 to-transparent">
                    <div className="container mx-auto max-w-4xl space-y-4">
                        <Button variant="outline" size="sm" asChild className="mb-4 w-fit bg-primary/20 backdrop-blur border-none hover:bg-primary/40 text-primary-foreground">
                            <Link href="/blog">
                                <ArrowLeft className="mr-2 h-4 w-4" /> Back to Blog
                            </Link>
                        </Button>
                        <h1 className="text-3xl md:text-5xl font-extrabold text-white leading-tight">
                            {post.title}
                        </h1>
                        <div className="flex items-center gap-6 text-white/90 text-sm md:text-base">
                            <div className="flex items-center gap-2">
                                <div className="h-8 w-8 rounded-full bg-primary/20 flex items-center justify-center overflow-hidden">
                                    {post.authorPhoto ? (
                                        <Image src={post.authorPhoto} alt={post.authorName} width={32} height={32} />
                                    ) : (
                                        <User className="h-4 w-4" />
                                    )}
                                </div>
                                <span className="font-medium">{post.authorName && post.authorName !== "Admin" ? post.authorName : "Bevan"}</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <Calendar className="h-4 w-4" />
                                {post.createdAt?.toDate ? format(post.createdAt.toDate(), "MMMM d, yyyy") : "N/A"}
                            </div>
                        </div>
                    </div>
                </div>
            </header>

            {/* Article Content */}
            <article className="container max-w-4xl mx-auto py-12 px-4">
                <div className="prose prose-lg dark:prose-invert max-w-none">
                    <ReactMarkdown
                        remarkPlugins={[remarkGfm]}
                        rehypePlugins={[rehypeRaw]}
                        components={{
                            img: ({ ...props }) => (
                                <span className="block my-8">
                                    {/* eslint-disable-next-line @next/next/no-img-element */}
                                    <img
                                        {...props}
                                        alt={props.alt || ""}
                                        className="rounded-lg shadow-md mx-auto max-h-[600px] object-contain w-full"
                                        loading="lazy"
                                    />
                                </span>
                            ),
                            h1: ({ ...props }) => <h1 className="text-3xl font-bold mt-8 mb-4" {...props} />,
                            h2: ({ ...props }) => <h2 className="text-2xl font-bold mt-8 mb-4" {...props} />,
                            h3: ({ ...props }) => <h3 className="text-xl font-bold mt-6 mb-3" {...props} />,
                            p: ({ ...props }) => <p className="mb-4 leading-relaxed" {...props} />,
                            ul: ({ ...props }) => <ul className="list-disc pl-6 mb-4 space-y-2" {...props} />,
                            ol: ({ ...props }) => <ol className="list-decimal pl-6 mb-4 space-y-2" {...props} />,
                            li: ({ ...props }) => <li className="pl-2" {...props} />,
                            blockquote: ({ ...props }) => <blockquote className="border-l-4 border-primary pl-4 italic my-6" {...props} />,
                            code: ({ className, children, ...props }: any) => {
                                const match = /language-(\w+)/.exec(className || '')
                                return match ? (
                                    <pre className="bg-muted p-4 rounded-lg overflow-x-auto my-6">
                                        <code className={className} {...props}>
                                            {children}
                                        </code>
                                    </pre>
                                ) : (
                                    <code className="bg-muted px-1.5 py-0.5 rounded text-sm font-mono" {...props}>
                                        {children}
                                    </code>
                                )
                            }
                        }}
                    >
                        {post.content}
                    </ReactMarkdown>
                </div>
            </article>

            {/* Share/Footer */}
            <div className="container max-w-4xl mx-auto py-8 border-t">
                <div className="flex justify-between items-center">
                    <p className="text-muted-foreground">Thanks for reading!</p>
                    <Button variant="outline" size="sm">
                        <Share2 className="mr-2 h-4 w-4" /> Share Article
                    </Button>
                </div>
            </div>
        </div>
    );
}
