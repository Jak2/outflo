import { getAllPrompts } from "@/lib/markdown";
import HomeClient from "@/components/HomeClient";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({});

export default function HomePage() {
  const prompts = getAllPrompts();
  const allTags = [...new Set(prompts.flatMap((p) => p.tags))].sort();

  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      {/* Hero */}
      <div className="mb-12">
        <div className="inline-block mb-4">
          <span className="text-xs font-black uppercase tracking-widest border-2 border-neo-black dark:border-white bg-neo-yellow text-neo-black px-3 py-1">
            Free AI Prompts
          </span>
        </div>
        <h1 className="text-5xl sm:text-6xl font-black text-neo-black dark:text-white leading-none mb-4">
          AI Prompts &amp;{" "}
          <span className="bg-neo-yellow text-neo-black px-2 inline-block">
            Workflows
          </span>
        </h1>
        <p className="text-lg font-medium text-[#555] dark:text-[#AAA] max-w-xl">
          Outcome-driven AI workflows that solve real-world problems. Browse,
          copy, and use instantly.
        </p>
      </div>

      <HomeClient prompts={prompts} allTags={allTags} />
    </div>
  );
}
