"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog";
import { Share2, Facebook, Twitter, Linkedin, Link2, MessageCircle, Mail, Check } from "lucide-react";
import { toast } from "sonner";

interface ShareDialogProps {
    url: string;
    title: string;
    description?: string;
}

export default function ShareDialog({ url, title, description }: ShareDialogProps) {
    const [copied, setCopied] = useState(false);
    const fullUrl = typeof window !== 'undefined' ? `${window.location.origin}${url}` : url;
    const encodedUrl = encodeURIComponent(fullUrl);
    const encodedTitle = encodeURIComponent(title);
    const encodedDescription = encodeURIComponent(description || title);

    const shareLinks = [
        {
            name: "WhatsApp",
            icon: MessageCircle,
            url: `https://wa.me/?text=${encodedTitle}%20${encodedUrl}`,
            color: "hover:bg-green-500 hover:text-white",
            bgColor: "bg-green-50 dark:bg-green-950",
        },
        {
            name: "Facebook",
            icon: Facebook,
            url: `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`,
            color: "hover:bg-blue-600 hover:text-white",
            bgColor: "bg-blue-50 dark:bg-blue-950",
        },
        {
            name: "Twitter",
            icon: Twitter,
            url: `https://twitter.com/intent/tweet?url=${encodedUrl}&text=${encodedTitle}`,
            color: "hover:bg-sky-500 hover:text-white",
            bgColor: "bg-sky-50 dark:bg-sky-950",
        },
        {
            name: "LinkedIn",
            icon: Linkedin,
            url: `https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`,
            color: "hover:bg-blue-700 hover:text-white",
            bgColor: "bg-blue-50 dark:bg-blue-950",
        },
        {
            name: "Email",
            icon: Mail,
            url: `mailto:?subject=${encodedTitle}&body=${encodedDescription}%0A%0A${encodedUrl}`,
            color: "hover:bg-gray-600 hover:text-white",
            bgColor: "bg-gray-50 dark:bg-gray-950",
        },
    ];

    const copyToClipboard = async () => {
        try {
            await navigator.clipboard.writeText(fullUrl);
            setCopied(true);
            toast.success("Link copied to clipboard!");
            setTimeout(() => setCopied(false), 2000);
        } catch (err) {
            toast.error("Failed to copy link");
        }
    };

    const handleShare = (shareUrl: string) => {
        window.open(shareUrl, "_blank", "noopener,noreferrer,width=600,height=600");
    };

    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button variant="outline" size="sm">
                    <Share2 className="mr-2 h-4 w-4" /> Share Article
                </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-md">
                <DialogHeader>
                    <DialogTitle>Share this article</DialogTitle>
                    <DialogDescription>
                        Share this article with your network
                    </DialogDescription>
                </DialogHeader>

                {/* Social Media Buttons */}
                <div className="grid grid-cols-2 gap-3 py-4">
                    {shareLinks.map((platform) => (
                        <Button
                            key={platform.name}
                            variant="outline"
                            className={`justify-start gap-3 transition-all duration-200 ${platform.bgColor} ${platform.color}`}
                            onClick={() => handleShare(platform.url)}
                        >
                            <platform.icon className="h-5 w-5" />
                            <span>{platform.name}</span>
                        </Button>
                    ))}
                </div>

                {/* Copy Link Section */}
                <div className="flex items-center space-x-2 pt-4 border-t">
                    <div className="grid flex-1 gap-2">
                        <div className="flex items-center gap-2">
                            <div className="flex-1 bg-muted px-3 py-2 rounded-md text-sm truncate">
                                {fullUrl}
                            </div>
                            <Button
                                size="sm"
                                onClick={copyToClipboard}
                                className="shrink-0"
                            >
                                {copied ? (
                                    <>
                                        <Check className="h-4 w-4 mr-1" />
                                        Copied
                                    </>
                                ) : (
                                    <>
                                        <Link2 className="h-4 w-4 mr-1" />
                                        Copy
                                    </>
                                )}
                            </Button>
                        </div>
                    </div>
                </div>
            </DialogContent>
        </Dialog>
    );
}
