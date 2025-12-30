"use client";

import { useSearchParams } from "next/navigation";
import BlogPostView from "@/components/blog/blog-post-view";
import { Suspense } from "react";

function BlogPostWrapper() {
    const searchParams = useSearchParams();
    const slug = searchParams.get("slug");

    if (!slug) return <div>Post not found</div>;

    return <BlogPostView slug={slug} />;
}

export default function Page() {
    return (
        <Suspense fallback={<div>Loading post...</div>}>
            <BlogPostWrapper />
        </Suspense>
    );
}
