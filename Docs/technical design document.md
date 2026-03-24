# Technical Design Document (TDD)

## 1. Architecture Overview

Next.js (Frontend + API)
|
Markdown Content
|
GitHub Repo
|
Vercel Deployment

---

## 2. Tech Stack

- Next.js (App Router)
- Tailwind CSS
- Markdown (content layer)
- Vercel (deployment)

---

## 3. Folder Structure

/content/prompts/
/content/workflows/
/app/
/components/
/lib/
/utils/

---

## 4. Data Flow

Markdown → Parsed → Rendered → Static Pages

---

## 5. Key Modules

- Markdown Parser (gray-matter)
- Routing System
- UI Components
- Copy Utility

---

## 6. Scalability Plan

Phase 2:
- Add API routes
- Integrate database

Phase 3:
- Add authentication
- Enable dynamic content

---

## 7. Deployment Flow

Git push → Vercel build → CDN delivery