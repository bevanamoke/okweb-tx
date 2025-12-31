"use client";

import { useEffect, useState, useRef } from "react";
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
import MarkdownToolbar from "@/components/admin/posts/markdown-toolbar";

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

    const contentRef = useRef<HTMLTextAreaElement>(null);

    const handleToolbarInsert = (startTag: string, endTag?: string) => {
        const textarea = contentRef.current;
        if (!textarea) return;

        const start = textarea.selectionStart;
        const end = textarea.selectionEnd;
        const text = textarea.value;
        const selectedText = text.substring(start, end);

        let newText = "";
        let newCursorPos = 0;

        if (endTag) {
            // Wrapping
            newText = text.substring(0, start) + startTag + selectedText + endTag + text.substring(end);
            newCursorPos = start + startTag.length + selectedText.length + endTag.length;
        } else {
            // Insertion
            newText = text.substring(0, start) + startTag + text.substring(end);
            newCursorPos = start + startTag.length;
        }

        setFormData(prev => ({ ...prev, content: newText }));

        setTimeout(() => {
            textarea.focus();
            textarea.setSelectionRange(newCursorPos, newCursorPos);
        }, 0);
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
                                    <div className="flex justify-between items-end mb-2">
                                        <Label htmlFor="content">Content</Label>
                                        <ImageUploadButton onImageUploaded={handleImageUploaded} />
                                    </div>
                                    <div className="border rounded-md">
                                        <MarkdownToolbar onInsert={handleToolbarInsert} />
                                        <Textarea
                                            ref={contentRef}
                                            id="content"
                                            value={formData.content}
                                            onChange={(e) => setFormData({ ...formData, content: e.target.value })}
                                            required
                                            className="min-h-[400px] font-mono border-0 focus-visible:ring-0 rounded-none rounded-b-md resize-y"
                                        />
                                    </div>
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
