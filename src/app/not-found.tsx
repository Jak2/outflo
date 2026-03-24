import Link from "next/link";

export default function NotFound() {
  return (
    <div className="max-w-lg mx-auto px-4 py-24 text-center">
      <div className="inline-block border-2 border-neo-black dark:border-white bg-neo-yellow px-4 py-2 shadow-neo mb-6">
        <span className="text-6xl font-black text-neo-black">404</span>
      </div>
      <h1 className="text-3xl font-black text-neo-black dark:text-white mb-3">
        Page not found
      </h1>
      <p className="text-[#555] dark:text-[#AAA] mb-8">
        This page does not exist or has been moved.
      </p>
      <Link
        href="/"
        className="inline-flex items-center gap-2 font-bold border-2 border-neo-black dark:border-white bg-white dark:bg-[#1A1A1A] px-5 py-2.5 shadow-neo dark:shadow-neo-white hover:bg-neo-yellow hover:text-neo-black hover:shadow-neo-sm hover:translate-x-0.5 hover:translate-y-0.5 transition-all"
      >
        Go Home
      </Link>
    </div>
  );
}
