"use client";

import { useState, useMemo } from "react";
import PromptCard from "@/components/cards/PromptCard";
import Badge from "@/components/ui/Badge";
import type { PromptMeta } from "@/types";

interface HomeClientProps {
  prompts: PromptMeta[];
  allTags: string[];
}

export default function HomeClient({ prompts, allTags }: HomeClientProps) {
  const [search, setSearch] = useState("");
  const [activeTag, setActiveTag] = useState<string | null>(null);

  const filtered = useMemo(() => {
    return prompts.filter((p) => {
      const q = search.toLowerCase();
      const matchSearch =
        q === "" ||
        p.title.toLowerCase().includes(q) ||
        p.description.toLowerCase().includes(q) ||
        p.tags.some((t) => t.toLowerCase().includes(q));
      const matchTag = activeTag === null || p.tags.includes(activeTag);
      return matchSearch && matchTag;
    });
  }, [prompts, search, activeTag]);

  return (
    <div>
      {/* Search */}
      <div className="relative mb-6">
        <svg
          className="absolute left-3.5 top-1/2 -translate-y-1/2 w-5 h-5 text-[#555] dark:text-[#AAA] pointer-events-none"
          fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
        <input
          type="search"
          placeholder="Search prompts..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full pl-11 pr-4 py-3 text-sm font-medium bg-white dark:bg-[#1A1A1A] text-neo-black dark:text-white border-2 border-neo-black dark:border-white shadow-neo dark:shadow-neo-white placeholder:text-[#888] focus:outline-none focus:ring-0 focus:shadow-neo-lg dark:focus:shadow-neo-white-lg transition-shadow"
        />
      </div>

      {/* Tag filters */}
      {allTags.length > 0 && (
        <div className="flex flex-wrap gap-2 mb-8">
          <Badge
            label="All"
            active={activeTag === null}
            onClick={() => setActiveTag(null)}
          />
          {allTags.map((tag) => (
            <Badge
              key={tag}
              label={tag}
              active={activeTag === tag}
              onClick={() => setActiveTag(activeTag === tag ? null : tag)}
            />
          ))}
        </div>
      )}

      {/* Results count */}
      <p className="text-xs font-bold text-[#777] dark:text-[#777] mb-5 uppercase tracking-widest">
        {filtered.length} prompt{filtered.length !== 1 ? "s" : ""}
        {activeTag ? ` · ${activeTag}` : ""}
        {search ? ` · "${search}"` : ""}
      </p>

      {/* Grid */}
      {filtered.length === 0 ? (
        <div className="border-2 border-neo-black dark:border-white bg-white dark:bg-[#1A1A1A] p-16 text-center shadow-neo dark:shadow-neo-white">
          <p className="text-lg font-black text-neo-black dark:text-white mb-1">No prompts found</p>
          <p className="text-sm text-[#777]">Try a different search or tag.</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((prompt) => (
            <PromptCard
              key={prompt.slug}
              prompt={prompt}
              onTagClick={(tag) => setActiveTag(tag)}
            />
          ))}
        </div>
      )}
    </div>
  );
}
