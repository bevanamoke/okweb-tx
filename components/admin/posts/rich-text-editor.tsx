"use client";

import { useEditor, EditorContent } from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'
import Underline from '@tiptap/extension-underline'
import TextAlign from '@tiptap/extension-text-align'
import Image from '@tiptap/extension-image'
import Link from '@tiptap/extension-link'
import { Button } from "@/components/ui/button"
import {
    Bold, Italic, Underline as UnderlineIcon,
    Heading1, Heading2, Heading3,
    AlignLeft, AlignCenter, AlignRight,
    List, ListOrdered, Quote,
    Undo, Redo, Link as LinkIcon, Image as ImageIcon
} from "lucide-react"
import { useEffect } from 'react'

interface RichTextEditorProps {
    content: string;
    onChange: (content: string) => void;
    onImageUpload?: (file: File) => Promise<string>;
}

const MenuBar = ({ editor, addImage }: { editor: any, addImage: () => void }) => {
    if (!editor) {
        return null
    }

    const setLink = () => {
        const previousUrl = editor.getAttributes('link').href
        const url = window.prompt('URL', previousUrl)

        // cancelled
        if (url === null) {
            return
        }

        // empty
        if (url === '') {
            editor.chain().focus().extendMarkRange('link').unsetLink().run()
            return
        }

        // update
        editor.chain().focus().extendMarkRange('link').setLink({ href: url }).run()
    }

    return (
        <div className="border-b p-2 flex flex-wrap gap-1 bg-muted/20 items-center">
            <div className="flex gap-1 border-r pr-2 mr-2">
                <Button
                    variant="ghost"
                    size="icon"
                    className="h-8 w-8"
                    onClick={() => editor.chain().focus().toggleBold().run()}
                    disabled={!editor.can().chain().focus().toggleBold().run()}
                    data-state={editor.isActive('bold') ? 'on' : 'off'}
                    style={{ backgroundColor: editor.isActive('bold') ? 'rgba(0,0,0,0.1)' : 'transparent' }}
                >
                    <Bold className="h-4 w-4" />
                </Button>
                <Button
                    variant="ghost"
                    size="icon"
                    className="h-8 w-8"
                    onClick={() => editor.chain().focus().toggleItalic().run()}
                    disabled={!editor.can().chain().focus().toggleItalic().run()}
                    style={{ backgroundColor: editor.isActive('italic') ? 'rgba(0,0,0,0.1)' : 'transparent' }}
                >
                    <Italic className="h-4 w-4" />
                </Button>
                <Button
                    variant="ghost"
                    size="icon"
                    className="h-8 w-8"
                    onClick={() => editor.chain().focus().toggleUnderline().run()}
                    style={{ backgroundColor: editor.isActive('underline') ? 'rgba(0,0,0,0.1)' : 'transparent' }}
                >
                    <UnderlineIcon className="h-4 w-4" />
                </Button>
            </div>

            <div className="flex gap-1 border-r pr-2 mr-2">
                <Button
                    variant="ghost"
                    size="icon"
                    className="h-8 w-8"
                    onClick={() => editor.chain().focus().toggleHeading({ level: 1 }).run()}
                    style={{ backgroundColor: editor.isActive('heading', { level: 1 }) ? 'rgba(0,0,0,0.1)' : 'transparent' }}
                >
                    <Heading1 className="h-4 w-4" />
                </Button>
                <Button
                    variant="ghost"
                    size="icon"
                    className="h-8 w-8"
                    onClick={() => editor.chain().focus().toggleHeading({ level: 2 }).run()}
                    style={{ backgroundColor: editor.isActive('heading', { level: 2 }) ? 'rgba(0,0,0,0.1)' : 'transparent' }}
                >
                    <Heading2 className="h-4 w-4" />
                </Button>
                <Button
                    variant="ghost"
                    size="icon"
                    className="h-8 w-8"
                    onClick={() => editor.chain().focus().toggleHeading({ level: 3 }).run()}
                    style={{ backgroundColor: editor.isActive('heading', { level: 3 }) ? 'rgba(0,0,0,0.1)' : 'transparent' }}
                >
                    <Heading3 className="h-4 w-4" />
                </Button>
            </div>

            <div className="flex gap-1 border-r pr-2 mr-2">
                <Button
                    variant="ghost"
                    size="icon"
                    className="h-8 w-8"
                    onClick={() => editor.chain().focus().setTextAlign('left').run()}
                    style={{ backgroundColor: editor.isActive({ textAlign: 'left' }) ? 'rgba(0,0,0,0.1)' : 'transparent' }}
                >
                    <AlignLeft className="h-4 w-4" />
                </Button>
                <Button
                    variant="ghost"
                    size="icon"
                    className="h-8 w-8"
                    onClick={() => editor.chain().focus().setTextAlign('center').run()}
                    style={{ backgroundColor: editor.isActive({ textAlign: 'center' }) ? 'rgba(0,0,0,0.1)' : 'transparent' }}
                >
                    <AlignCenter className="h-4 w-4" />
                </Button>
                <Button
                    variant="ghost"
                    size="icon"
                    className="h-8 w-8"
                    onClick={() => editor.chain().focus().setTextAlign('right').run()}
                    style={{ backgroundColor: editor.isActive({ textAlign: 'right' }) ? 'rgba(0,0,0,0.1)' : 'transparent' }}
                >
                    <AlignRight className="h-4 w-4" />
                </Button>
            </div>

            <div className="flex gap-1 border-r pr-2 mr-2">
                <Button
                    variant="ghost"
                    size="icon"
                    className="h-8 w-8"
                    onClick={() => editor.chain().focus().toggleBulletList().run()}
                    style={{ backgroundColor: editor.isActive('bulletList') ? 'rgba(0,0,0,0.1)' : 'transparent' }}
                >
                    <List className="h-4 w-4" />
                </Button>
                <Button
                    variant="ghost"
                    size="icon"
                    className="h-8 w-8"
                    onClick={() => editor.chain().focus().toggleOrderedList().run()}
                    style={{ backgroundColor: editor.isActive('orderedList') ? 'rgba(0,0,0,0.1)' : 'transparent' }}
                >
                    <ListOrdered className="h-4 w-4" />
                </Button>
                <Button
                    variant="ghost"
                    size="icon"
                    className="h-8 w-8"
                    onClick={() => editor.chain().focus().toggleBlockquote().run()}
                    style={{ backgroundColor: editor.isActive('blockquote') ? 'rgba(0,0,0,0.1)' : 'transparent' }}
                >
                    <Quote className="h-4 w-4" />
                </Button>
            </div>

            <div className="flex gap-1">
                <Button variant="ghost" size="icon" className="h-8 w-8" onClick={setLink} title="Link" style={{ backgroundColor: editor.isActive('link') ? 'rgba(0,0,0,0.1)' : 'transparent' }}>
                    <LinkIcon className="h-4 w-4" />
                </Button>
                <Button variant="ghost" size="icon" className="h-8 w-8" onClick={addImage} title="Image">
                    <ImageIcon className="h-4 w-4" />
                </Button>
                <Button variant="ghost" size="icon" className="h-8 w-8" onClick={() => editor.chain().focus().undo().run()} disabled={!editor.can().chain().focus().undo().run()} title="Undo">
                    <Undo className="h-4 w-4" />
                </Button>
                <Button variant="ghost" size="icon" className="h-8 w-8" onClick={() => editor.chain().focus().redo().run()} disabled={!editor.can().chain().focus().redo().run()} title="Redo">
                    <Redo className="h-4 w-4" />
                </Button>
            </div>
        </div>
    )
}

export default function RichTextEditor({ content, onChange, onImageUpload }: RichTextEditorProps) {
    const editor = useEditor({
        extensions: [
            StarterKit,
            Underline,
            TextAlign.configure({
                types: ['heading', 'paragraph'],
            }),
            Image,
            Link.configure({
                openOnClick: false,
            }),
        ],
        content: content,
        onUpdate: ({ editor }) => {
            onChange(editor.getHTML())
        },
        editorProps: {
            attributes: {
                class: 'prose prose-sm sm:prose lg:prose-lg xl:prose-2xl mx-auto focus:outline-none min-h-[400px] p-4 max-w-none',
            },
        },
    })

    // Update content if it changes externally (e.g. initial load) - strict check to avoid loops
    useEffect(() => {
        if (editor && content && editor.getHTML() !== content) {
            // Only update if the content is significantly different to avoid cursor jumping
            // This is a simple check; for production might need more robust diffing or just trust initial load
            if (editor.getText() === "" && content.length > 0) {
                editor.commands.setContent(content)
            }
        }
    }, [content, editor])

    const handleImageUpload = () => {
        if (onImageUpload) {
            const input = document.createElement('input')
            input.type = 'file'
            input.accept = 'image/*'
            input.onchange = async (e) => {
                const file = (e.target as HTMLInputElement).files?.[0]
                if (file) {
                    try {
                        const url = await onImageUpload(file)
                        if (url) {
                            editor?.chain().focus().setImage({ src: url }).run()
                        }
                    } catch (error) {
                        console.error("Image upload failed", error)
                    }
                }
            }
            input.click()
        } else {
            const url = window.prompt('Enter image URL')
            if (url) {
                editor?.chain().focus().setImage({ src: url }).run()
            }
        }
    }

    return (
        <div className="border rounded-md overflow-hidden bg-background">
            <MenuBar editor={editor} addImage={handleImageUpload} />
            <EditorContent editor={editor} />
        </div>
    )
}
