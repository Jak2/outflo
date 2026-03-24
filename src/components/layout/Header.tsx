"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import ThemeToggle from "@/components/ThemeToggle";

const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/workflows", label: "Workflows" },
];

export default function Header() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 py-4 px-4 bg-cream dark:bg-neo-black">
      <div className="max-w-6xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <Link
          href="/"
          className="text-xl font-black text-neo-black dark:text-white tracking-tight hover:text-neo-black dark:hover:text-neo-yellow transition-colors"
        >
          Out<span className="bg-neo-yellow text-neo-black px-1">flo</span>
        </Link>

        {/* Pill Navbar */}
        <nav className="hidden sm:flex items-center gap-1 border-2 border-neo-black dark:border-white bg-white dark:bg-[#1A1A1A] rounded-full px-3 py-1.5 shadow-neo dark:shadow-neo-white">
          {NAV_LINKS.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className={`px-4 py-1.5 rounded-full text-sm font-bold transition-colors ${
                pathname === href
                  ? "bg-neo-yellow text-neo-black border-2 border-neo-black dark:border-neo-black"
                  : "text-neo-black dark:text-white hover:bg-neo-yellow hover:text-neo-black"
              }`}
            >
              {label}
            </Link>
          ))}
        </nav>

        {/* Right side */}
        <div className="flex items-center gap-3">
          <ThemeToggle />
          {/* Mobile nav */}
          <div className="flex sm:hidden gap-2">
            {NAV_LINKS.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                className={`text-xs font-bold px-2 py-1 border-2 border-neo-black dark:border-white rounded-full ${
                  pathname === href
                    ? "bg-neo-yellow text-neo-black"
                    : "bg-white dark:bg-[#1A1A1A] text-neo-black dark:text-white"
                }`}
              >
                {label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </header>
  );
}
