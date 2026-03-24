import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { getAllPrompts, getPromptBySlug } from "@/lib/markdown";
import { buildMetadata } from "@/lib/seo";
import Badge from "@/components/ui/Badge";
import CopyButton from "@/components/ui/CopyButton";

interface Props {
  params: { slug: string };
}

export async function generateStaticParams() {
  return getAllPrompts().map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const prompt = await getPromptBySlug(params.slug);
  if (!prompt) return {};
  return buildMetadata({
    title: prompt.title,
    description: prompt.description,
    image: prompt.image,
    path: `/prompts/${prompt.slug}`,
  });
}

export default async function PromptPage({ params }: Props) {
  const prompt = await getPromptBySlug(params.slug);
  if (!prompt) notFound();

  return (
    <div className="max-w-3xl mx-auto px-4 py-12">
      {/* Back */}
      <Link
        href="/"
        className="inline-flex items-center gap-2 text-sm font-bold border-2 border-neo-black dark:border-white bg-white dark:bg-[#1A1A1A] px-3 py-1.5 shadow-neo dark:shadow-neo-white hover:bg-neo-yellow hover:text-neo-black hover:shadow-neo-sm hover:translate-x-0.5 hover:translate-y-0.5 transition-all mb-10"
      >
        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
        </svg>
        Back
      </Link>

      {/* Tags */}
      <div className="flex flex-wrap gap-2 mb-4">
        {prompt.tags.map((tag) => (
          <Badge key={tag} label={tag} />
        ))}
      </div>

      {/* Title */}
      <h1 className="text-4xl font-black text-neo-black dark:text-white mb-3 leading-tight">
        {prompt.title}
      </h1>

      {prompt.description && (
        <p className="text-lg font-medium text-[#555] dark:text-[#AAA] mb-8">
          {prompt.description}
        </p>
      )}

      {/* Image */}
      {prompt.image && (
        <div className="relative w-full aspect-video border-2 border-neo-black dark:border-white shadow-neo dark:shadow-neo-white mb-8 overflow-hidden">
          <Image src={prompt.image} alt={prompt.title} fill className="object-cover" />
        </div>
      )}

      {/* Copy button */}
      <div className="flex justify-end mb-4">
        <CopyButton text={prompt.rawContent} label="Copy Prompt" />
      </div>

      {/* Content */}
      <article
        className="prose bg-white dark:bg-[#1A1A1A] border-2 border-neo-black dark:border-white shadow-neo dark:shadow-neo-white p-6"
        dangerouslySetInnerHTML={{ __html: prompt.content }}
      />
    </div>
  );
}
