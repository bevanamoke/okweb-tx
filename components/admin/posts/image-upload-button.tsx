"use client";

import { useState, useRef } from "react";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { storage } from "@/lib/firebase";
import { Button } from "@/components/ui/button";
import { ImagePlus, Loader2 } from "lucide-react";
import { toast } from "sonner";

interface ImageUploadButtonProps {
    onImageUploaded: (url: string) => void;
    className?: string;
    text?: string;
}

export default function ImageUploadButton({ onImageUploaded, className, text = "Insert Image" }: ImageUploadButtonProps) {
    const [uploading, setUploading] = useState(false);
    const fileInputRef = useRef<HTMLInputElement>(null);

    const handleFileSelect = async (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (!file) return;

        // Validation
        if (!file.type.startsWith("image/")) {
            toast.error("Please upload an image file");
            return;
        }

        if (file.size > 5 * 1024 * 1024) { // 5MB limit
            toast.error("Image size should be less than 5MB");
            return;
        }

        setUploading(true);
        try {
            // Create a unique filename: timestamp_random_originalName
            const timestamp = Date.now();
            const random = Math.random().toString(36).substring(2, 8);
            const filename = `${timestamp}_${random}_${file.name.replace(/[^a-zA-Z0-9.]/g, "_")}`;

            const storageRef = ref(storage, `blog-images/${filename}`);

            await uploadBytes(storageRef, file);
            const url = await getDownloadURL(storageRef);

            onImageUploaded(url);
            toast.success("Image uploaded successfully");

            // Reset input
            if (fileInputRef.current) {
                fileInputRef.current.value = "";
            }
        } catch (error) {
            console.error("Error uploading image:", error);
            toast.error("Failed to upload image");
        } finally {
            setUploading(false);
        }
    };

    return (
        <>
            <input
                type="file"
                ref={fileInputRef}
                className="hidden"
                accept="image/*"
                onChange={handleFileSelect}
            />
            <Button
                type="button"
                variant="outline"
                size="sm"
                className={`gap-2 ${className || ""}`}
                disabled={uploading}
                onClick={() => fileInputRef.current?.click()}
            >
                {uploading ? (
                    <Loader2 className="h-4 w-4 animate-spin" />
                ) : (
                    <ImagePlus className="h-4 w-4" />
                )}
                {uploading ? "Uploading..." : text}
            </Button>
        </>
    );
}
