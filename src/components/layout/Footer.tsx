export default function Footer() {
  return (
    <footer className="mt-20 border-t-2 border-neo-black dark:border-white bg-cream dark:bg-neo-black">
      <div className="max-w-6xl mx-auto px-4 py-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-sm font-bold text-neo-black dark:text-white">
          © {new Date().getFullYear()}{" "}
          <span className="bg-neo-yellow px-1">Outflo</span>
        </p>
        <p className="text-sm font-medium text-[#555] dark:text-[#AAA]">
          Outcome-driven AI workflows for real-world problems.
        </p>
      </div>
    </footer>
  );
}
