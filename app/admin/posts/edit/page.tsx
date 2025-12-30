"use client";

import { Suspense } from "react";
import EditPostView from "@/components/admin/posts/edit/edit-post-view";

export default function Page() {
    return (
        <Suspense fallback={<div>Loading editor...</div>}>
            <EditPostView />
        </Suspense>
    );
}
