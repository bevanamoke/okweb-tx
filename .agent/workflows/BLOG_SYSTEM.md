---
description: Setup and implementation of the Firebase blog system
---

# Firebase Blog System Implementation Plan

## 1. Project Setup
- [x] Install Firebase SDK (`npm install firebase`)
- [ ] Create `lib/firebase.ts` configuration file
- [ ] Create `contexts/AuthContext.tsx` for user authentication

## 2. Database Structure (Firestore)
- **Collection**: `posts`
    - `title` (string)
    - `slug` (string, unique)
    - `excerpt` (string)
    - `content` (string/markdown)
    - `coverImage` (string URL)
    - `authorId` (string)
    - `authorName` (string)
    - `authorPhoto` (string)
    - `publishedAt` (timestamp)
    - `updatedAt` (timestamp)
    - `status` ('draft' | 'published')
    - `tags` (array of strings)
- **Collection**: `users` (profiles)
    - `uid` (string)
    - `displayName` (string)
    - `email` (string)
    - `photoURL` (string)
    - `role` ('admin' | 'editor' | 'author')
    - `bio` (string)

## 3. Frontend Pages
- `app/blog/page.tsx`: Public list of published articles
- `app/blog/[slug]/page.tsx`: Public article view
- `app/admin/dashboard/page.tsx`: Dashboard for authors
- `app/admin/posts/create/page.tsx`: Article creation
- `app/admin/posts/[id]/edit/page.tsx`: Article editing

## 4. Components
- `components/blog/blog-card.tsx`
- `components/blog/blog-header.tsx`
- `components/blog/article-content.tsx`
- `components/admin/admin-nav.tsx`
- `components/admin/post-editor.tsx`

## 5. Security Rules (Firestore)
- Public: Read-only for `status == 'published'`
- Authors: Create, Update own posts
- Editors/Admins: Update/Delete any post, Publish

## 6. Configuration 
- Update `components/header.tsx` to include Blog link
- Update `next.config.mjs` if necessary for image domains
