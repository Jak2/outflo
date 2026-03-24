import Link from "next/link";
import Badge from "@/components/ui/Badge";
import type { WorkflowMeta } from "@/types";

interface WorkflowCardProps {
  workflow: WorkflowMeta;
}

export default function WorkflowCard({ workflow }: WorkflowCardProps) {
  return (
    <Link
      href={`/workflows/${workflow.slug}`}
      className="group block relative bg-white dark:bg-[#1A1A1A] border-2 border-neo-black dark:border-white shadow-neo dark:shadow-neo-white hover:shadow-neo-lg dark:hover:shadow-neo-white-lg hover:-translate-x-0.5 hover:-translate-y-0.5 transition-all duration-150"
    >
      {/* Top accent bar — different colour to distinguish from prompts */}
      <div className="h-1.5 w-full bg-neo-black dark:bg-neo-yellow border-b-2 border-neo-black dark:border-neo-black" />

      <div className="p-5">
        <div className="flex items-start justify-between mb-2">
          <h3 className="font-black text-neo-black dark:text-white text-base leading-snug pr-2 group-hover:underline decoration-2 underline-offset-2">
            {workflow.title}
          </h3>
          <span className="shrink-0 text-xs font-black px-2 py-0.5 border-2 border-neo-black dark:border-white bg-neo-black dark:bg-neo-yellow text-white dark:text-neo-black">
            Workflow
          </span>
        </div>

        {workflow.description && (
          <p className="text-sm text-[#555] dark:text-[#AAA] mb-4 line-clamp-2 leading-relaxed">
            {workflow.description}
          </p>
        )}

        <div className="flex flex-wrap gap-1.5">
          {workflow.tags.map((tag) => (
            <Badge key={tag} label={tag} />
          ))}
        </div>
      </div>
    </Link>
  );
}
