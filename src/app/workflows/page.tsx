import { getAllWorkflows } from "@/lib/markdown";
import { buildMetadata } from "@/lib/seo";
import WorkflowCard from "@/components/cards/WorkflowCard";

export const metadata = buildMetadata({
  title: "Workflows",
  description:
    "Step-by-step AI workflows for marketing, content creation, and business automation.",
  path: "/workflows",
});

export default function WorkflowsPage() {
  const workflows = getAllWorkflows();

  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      {/* Hero */}
      <div className="mb-12">
        <div className="inline-block mb-4">
          <span className="text-xs font-black uppercase tracking-widest border-2 border-neo-black dark:border-white bg-neo-black dark:bg-neo-yellow text-white dark:text-neo-black px-3 py-1">
            Step-by-step
          </span>
        </div>
        <h1 className="text-5xl sm:text-6xl font-black text-neo-black dark:text-white leading-none mb-4">
          AI{" "}
          <span className="bg-neo-yellow text-neo-black px-2 inline-block">
            Workflows
          </span>
        </h1>
        <p className="text-lg font-medium text-[#555] dark:text-[#AAA] max-w-xl">
          Multi-step workflows for marketing, content creation, and business
          automation. Copy each step individually.
        </p>
      </div>

      {workflows.length === 0 ? (
        <div className="border-2 border-neo-black dark:border-white bg-white dark:bg-[#1A1A1A] shadow-neo dark:shadow-neo-white p-16 text-center">
          <p className="text-xl font-black mb-1">No workflows yet</p>
          <p className="text-sm text-[#777]">Check back soon.</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {workflows.map((workflow) => (
            <WorkflowCard key={workflow.slug} workflow={workflow} />
          ))}
        </div>
      )}
    </div>
  );
}
