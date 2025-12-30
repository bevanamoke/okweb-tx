"use client";

import { useSearchParams } from "next/navigation";
import AuthorProfileView from "@/components/blog/author-profile-view";
import { Suspense } from "react";

function AuthorProfileWrapper() {
    // Note: AuthorProfileView currently assumes it gets ID from params or context? 
    // Let's check AuthorProfileView. It expects nothing props-wise but uses params internally?
    // I need to update AuthorProfileView to accept ID as prop or use useSearchParams.
    // For now, let's assume I will update it.
    const searchParams = useSearchParams();
    const id = searchParams.get("id");

    if (!id) return <div>Author not found</div>;

    return <AuthorProfileView authorId={id} />;
}

export default function Page() {
    return (
        <Suspense fallback={<div>Loading profile...</div>}>
            <AuthorProfileWrapper />
        </Suspense>
    );
}
