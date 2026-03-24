"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Badge from "@/components/ui/Badge";
import type { PromptMeta } from "@/types";

interface PromptCardProps {
  prompt: PromptMeta;
  onTagClick?: (tag: string) => void;
}

export default function PromptCard({ prompt, onTagClick }: PromptCardProps) {
  const router = useRouter();
  const [bookmarked, setBookmarked] = useState(false);

  useEffect(() => {
    const bookmarks: string[] = JSON.parse(localStorage.getItem("bookmarks") ?? "[]");
    setBookmarked(bookmarks.includes(prompt.slug));
  }, [prompt.slug]);

  function toggleBookmark(e: React.MouseEvent) {
    e.stopPropagation();
    const bookmarks: string[] = JSON.parse(localStorage.getItem("bookmarks") ?? "[]");
    const updated = bookmarked
      ? bookmarks.filter((s) => s !== prompt.slug)
      : [...bookmarks, prompt.slug];
    localStorage.setItem("bookmarks", JSON.stringify(updated));
    setBookmarked(!bookmarked);
  }

  return (
    <div
      onClick={() => router.push(`/prompts/${prompt.slug}`)}
      className="cursor-pointer group relative bg-white dark:bg-[#1A1A1A] border-2 border-neo-black dark:border-white shadow-neo dark:shadow-neo-white hover:shadow-neo-lg dark:hover:shadow-neo-white-lg hover:-translate-x-0.5 hover:-translate-y-0.5 transition-all duration-150"
    >
      {/* Top accent bar */}
      <div className="h-1.5 w-full bg-neo-yellow border-b-2 border-neo-black dark:border-white" />

      <div className="p-5">
        {/* Header row */}
        <div className="flex items-start justify-between mb-3">
          <h3 className="font-black text-neo-black dark:text-white text-base leading-snug pr-2 group-hover:underline decoration-2 underline-offset-2">
            {prompt.title}
          </h3>
          {/* Bookmark */}
          <button
            onClick={toggleBookmark}
            aria-label="Bookmark"
            className={`shrink-0 p-1 border-2 transition-colors ${
              bookmarked
                ? "bg-neo-yellow border-neo-black text-neo-black"
                : "bg-white dark:bg-[#1A1A1A] border-neo-black dark:border-white text-neo-black dark:text-white hover:bg-neo-yellow hover:text-neo-black hover:border-neo-black"
            }`}
          >
            <svg className="w-4 h-4" fill={bookmarked ? "currentColor" : "none"} viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z" />
            </svg>
          </button>
        </div>

        {prompt.description && (
          <p className="text-sm text-[#555] dark:text-[#AAA] mb-4 line-clamp-2 leading-relaxed">
            {prompt.description}
          </p>
        )}

        {/* Tags — stop propagation so clicking tag doesn't navigate */}
        <div className="flex flex-wrap gap-1.5" onClick={(e) => e.stopPropagation()}>
          {prompt.tags.map((tag) => (
            <Badge
              key={tag}
              label={tag}
              onClick={onTagClick ? () => onTagClick(tag) : undefined}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
