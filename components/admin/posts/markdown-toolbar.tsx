"use client";

import { Button } from "@/components/ui/button";
import {
    Bold, Italic, Underline,
    Heading1, Heading2, Heading3,
    AlignLeft, AlignCenter, AlignRight,
    List, ListOrdered, Quote
} from "lucide-react";

interface MarkdownToolbarProps {
    onInsert: (startTag: string, endTag?: string) => void;
}

export default function MarkdownToolbar({ onInsert }: MarkdownToolbarProps) {
    return (
        <div className="flex flex-wrap gap-1 p-2 border-b bg-muted/20">
            <div className="flex gap-1 border-r pr-2 mr-2">
                <Button variant="ghost" size="icon" className="h-8 w-8" onClick={() => onInsert("**", "**")} title="Bold">
                    <Bold className="h-4 w-4" />
                </Button>
                <Button variant="ghost" size="icon" className="h-8 w-8" onClick={() => onInsert("*", "*")} title="Italic">
                    <Italic className="h-4 w-4" />
                </Button>
                <Button variant="ghost" size="icon" className="h-8 w-8" onClick={() => onInsert("<u>", "</u>")} title="Underline">
                    <Underline className="h-4 w-4" />
                </Button>
            </div>

            <div className="flex gap-1 border-r pr-2 mr-2">
                <Button variant="ghost" size="icon" className="h-8 w-8" onClick={() => onInsert("# ")} title="Heading 1">
                    <Heading1 className="h-4 w-4" />
                </Button>
                <Button variant="ghost" size="icon" className="h-8 w-8" onClick={() => onInsert("## ")} title="Heading 2">
                    <Heading2 className="h-4 w-4" />
                </Button>
                <Button variant="ghost" size="icon" className="h-8 w-8" onClick={() => onInsert("### ")} title="Heading 3">
                    <Heading3 className="h-4 w-4" />
                </Button>
            </div>

            <div className="flex gap-1 border-r pr-2 mr-2">
                <Button variant="ghost" size="icon" className="h-8 w-8" onClick={() => onInsert("<div align='left'>\n", "\n</div>")} title="Align Left">
                    <AlignLeft className="h-4 w-4" />
                </Button>
                <Button variant="ghost" size="icon" className="h-8 w-8" onClick={() => onInsert("<div align='center'>\n", "\n</div>")} title="Align Center">
                    <AlignCenter className="h-4 w-4" />
                </Button>
                <Button variant="ghost" size="icon" className="h-8 w-8" onClick={() => onInsert("<div align='right'>\n", "\n</div>")} title="Align Right">
                    <AlignRight className="h-4 w-4" />
                </Button>
            </div>

            <div className="flex gap-1">
                <Button variant="ghost" size="icon" className="h-8 w-8" onClick={() => onInsert("- ")} title="Bullet List">
                    <List className="h-4 w-4" />
                </Button>
                <Button variant="ghost" size="icon" className="h-8 w-8" onClick={() => onInsert("1. ")} title="Numbered List">
                    <ListOrdered className="h-4 w-4" />
                </Button>
                <Button variant="ghost" size="icon" className="h-8 w-8" onClick={() => onInsert("> ")} title="Quote">
                    <Quote className="h-4 w-4" />
                </Button>
            </div>
        </div>
    );
}
