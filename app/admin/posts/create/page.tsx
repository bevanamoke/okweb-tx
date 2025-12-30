"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { db } from "@/lib/firebase";
import { useAuth } from "@/contexts/AuthContext";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent } from "@/components/ui/card";
import { toast } from "sonner";
import { slugify } from "@/lib/utils";
import { X } from "lucide-react";
import ImageUploadButton from "@/components/admin/posts/image-upload-button";

export default function CreatePostPage() {
    const { user } = useAuth();
    const router = useRouter();
    const [loading, setLoading] = useState(false);

    const [formData, setFormData] = useState({
        title: "",
        slug: "",
        excerpt: "",
        content: "",
        status: "draft",
        coverImage: "",
    });

    const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const title = e.target.value;
        // Auto-generate slug if slug is empty or matches previous title slug
        const newSlug = slugify(title);
        setFormData(prev => ({
            ...prev,
            title,
            slug: prev.slug === slugify(prev.title) ? newSlug : prev.slug
        }));
    }

    const handleImageUploaded = (url: string) => {
        const imageMarkdown = `\n![Image Description](${url})\n`;
        setFormData(prev => ({
            ...prev,
            content: prev.content + imageMarkdown
        }));
    };

    const handleCoverImageUploaded = (url: string) => {
        setFormData(prev => ({
            ...prev,
            coverImage: url
        }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!user) return;
        setLoading(true);

        try {
            await addDoc(collection(db, "posts"), {
                ...formData,
                authorId: user.uid,
                authorName: (user.displayName && user.displayName !== "Admin") ? user.displayName : "Bevan",
                authorPhoto: user.photoURL,
                createdAt: serverTimestamp(),
                updatedAt: serverTimestamp(),
                likes: 0,
                views: 0,
            });

            toast.success("Post created successfully");
            router.push("/admin/dashboard");
        } catch (error) {
            console.error(error);
            toast.error("Failed to create post");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="max-w-4xl mx-auto space-y-8">
            <div className="flex items-center justify-between">
                <h1 className="text-3xl font-bold">Create New Post</h1>
            </div>

            <form onSubmit={handleSubmit} className="space-y-8">
                <div className="grid gap-6 md:grid-cols-[2fr_1fr]">
                    <div className="space-y-6">
                        <Card>
                            <CardContent className="pt-6 space-y-4">
                                <div className="space-y-2">
                                    <Label htmlFor="title">Title</Label>
                                    <Input
                                        id="title"
                                        value={formData.title}
                                        onChange={handleTitleChange}
                                        required
                                        placeholder="Enter post title"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <Label htmlFor="slug">Slug</Label>
                                    <Input
                                        id="slug"
                                        value={formData.slug}
                                        onChange={(e) => setFormData({ ...formData, slug: e.target.value })}
                                        required
                                        placeholder="post-url-slug"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <Label htmlFor="excerpt">Excerpt</Label>
                                    <Textarea
                                        id="excerpt"
                                        value={formData.excerpt}
                                        onChange={(e) => setFormData({ ...formData, excerpt: e.target.value })}
                                        placeholder="Short summary for SEO and cards"
                                        rows={3}
                                    />
                                </div>
                                <div className="space-y-2">
                                    <div className="flex justify-between items-center">
                                        <Label htmlFor="content">Content</Label>
                                        <ImageUploadButton onImageUploaded={handleImageUploaded} />
                                    </div>
                                    <Textarea
                                        id="content"
                                        value={formData.content}
                                        onChange={(e) => setFormData({ ...formData, content: e.target.value })}
                                        required
                                        placeholder="Write your article content here (Markdown or HTML)..."
                                        className="min-h-[400px] font-mono"
                                    />
                                    <p className="text-xs text-muted-foreground">
                                        Supports Markdown. To add an inline image, use: <code className="bg-muted px-1 py-0.5 rounded">![Alt Text](Image URL)</code>
                                    </p>
                                </div>
                            </CardContent>
                        </Card>
                    </div>

                    <div className="space-y-6">
                        <Card>
                            <CardContent className="pt-6 space-y-4">
                                <div className="space-y-2">
                                    <Label>Status</Label>
                                    <Select
                                        value={formData.status}
                                        onValueChange={(val) => setFormData({ ...formData, status: val })}
                                    >
                                        <SelectTrigger>
                                            <SelectValue />
                                        </SelectTrigger>
                                        <SelectContent>
                                            <SelectItem value="draft">Draft</SelectItem>
                                            <SelectItem value="published">Published</SelectItem>
                                        </SelectContent>
                                    </Select>
                                </div>
                                <div className="space-y-2">
                                    <Label>Cover Image</Label>
                                    <div className="space-y-2">
                                        <ImageUploadButton
                                            onImageUploaded={handleCoverImageUploaded}
                                            text="Upload Cover"
                                            className="w-full"
                                        />
                                        {formData.coverImage && (
                                            <div className="relative aspect-video w-full overflow-hidden rounded-lg border">
                                                <img
                                                    src={formData.coverImage}
                                                    alt="Cover"
                                                    className="object-cover w-full h-full"
                                                />
                                                <Button
                                                    type="button"
                                                    variant="ghost"
                                                    size="icon"
                                                    className="absolute top-2 right-2 bg-black/50 hover:bg-black/70 text-white"
                                                    onClick={() => setFormData(prev => ({ ...prev, coverImage: "" }))}
                                                >
                                                    <X className="h-4 w-4" />
                                                </Button>
                                            </div>
                                        )}
                                    </div>
                                </div>
                                <Button type="submit" className="w-full" disabled={loading}>
                                    {loading ? "Creating..." : "Create Post"}
                                </Button>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </form>
        </div>
    );
}
