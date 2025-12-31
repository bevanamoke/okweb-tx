"use client";

import { useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { doc, getDoc, updateDoc, serverTimestamp } from "firebase/firestore";
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
import RichTextEditor from "@/components/admin/posts/rich-text-editor";

export default function EditPostView() {
    const { user, isAdmin, isEditor } = useAuth();
    const router = useRouter();
    const searchParams = useSearchParams();
    const postId = searchParams.get('id');

    const [loading, setLoading] = useState(true);
    const [saving, setSaving] = useState(false);

    const [formData, setFormData] = useState({
        title: "",
        slug: "",
        excerpt: "",
        content: "",
        status: "draft",
        coverImage: "",
        authorId: "",
    });

    useEffect(() => {
        const fetchPost = async () => {
            if (!postId) {
                setLoading(false);
                return;
            }
            try {
                const docRef = doc(db, "posts", postId);
                const docSnap = await getDoc(docRef);
                if (docSnap.exists()) {
                    const data = docSnap.data();
                    setFormData({
                        title: data.title,
                        slug: data.slug,
                        excerpt: data.excerpt || "",
                        content: data.content,
                        status: data.status,
                        coverImage: data.coverImage || "",
                        authorId: data.authorId
                    });
                } else {
                    toast.error("Post not found");
                    router.push("/admin/dashboard");
                }
            } catch (e) {
                console.error(e);
            } finally {
                setLoading(false);
            }
        }
        fetchPost();
    }, [postId, router]);

    const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const title = e.target.value;
        setFormData(prev => ({ ...prev, title }));
        if (!formData.slug) {
            setFormData(prev => ({ ...prev, slug: slugify(title) }));
        }
    }

    const handleCoverImageUploaded = (url: string) => {
        setFormData(prev => ({
            ...prev,
            coverImage: url
        }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!user) return;
        if (user.uid !== formData.authorId && !isAdmin && !isEditor) {
            toast.error("You are not authorized to edit this post");
            return;
        }
        setSaving(true);
        try {
            if (!postId) throw new Error("No Post ID");
            await updateDoc(doc(db, "posts", postId), {
                title: formData.title,
                slug: formData.slug,
                excerpt: formData.excerpt,
                content: formData.content,
                status: formData.status,
                coverImage: formData.coverImage,
                updatedAt: serverTimestamp(),
            });
            toast.success("Post updated successfully");
            router.push("/admin/dashboard");
        } catch (error) {
            console.error(error);
            toast.error("Failed to update post");
        } finally {
            setSaving(false);
        }
    };

    if (loading) return <div>Loading...</div>;

    if (!postId) {
        return <div className="p-10 text-center">Invalid Post ID</div>;
    }

    return (
        <div className="max-w-4xl mx-auto space-y-8">
            <div className="flex items-center justify-between">
                <h1 className="text-3xl font-bold">Edit Post</h1>
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
                                    />
                                </div>
                                <div className="space-y-2">
                                    <Label htmlFor="slug">Slug</Label>
                                    <Input
                                        id="slug"
                                        value={formData.slug}
                                        onChange={(e) => setFormData({ ...formData, slug: e.target.value })}
                                        required
                                    />
                                    <p className="text-xs text-muted-foreground">Changing the slug will break existing links.</p>
                                </div>
                                <div className="space-y-2">
                                    <Label htmlFor="excerpt">Excerpt</Label>
                                    <Textarea
                                        id="excerpt"
                                        value={formData.excerpt}
                                        onChange={(e) => setFormData({ ...formData, excerpt: e.target.value })}
                                        rows={3}
                                    />
                                </div>
                                <div className="space-y-2">
                                    <Label htmlFor="content">Content</Label>
                                    <RichTextEditor
                                        content={formData.content}
                                        onChange={(content) => setFormData({ ...formData, content })}
                                        onImageUpload={async (file) => {
                                            return "";
                                        }}
                                    />
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
                                <Button type="submit" className="w-full" disabled={saving}>
                                    {saving ? "Saving..." : "Update Post"}
                                </Button>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </form>
        </div>
    );
}
