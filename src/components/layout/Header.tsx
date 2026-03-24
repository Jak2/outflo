"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import ThemeToggle from "@/components/ThemeToggle";

const NAV_LINKS = [
  { href: "/", label: "Prompts" },
  { href: "/workflows", label: "Workflows" },
];

export default function Header() {
  const pathname = usePathname();

  return (
    <header className="sticky top-4 z-50 py-3 bg-transparent pointer-events-none">
      <div className="max-w-6xl mx-auto flex justify-center pointer-events-auto">
        {/* Single pill: logo | nav links | divider | theme toggle */}
        <nav className="flex items-center border-2 border-neo-black dark:border-white bg-white dark:bg-[#1A1A1A] rounded-full shadow-neo dark:shadow-neo-white px-2 py-1 gap-1">

          {/* Logo — left of pill */}
          <Link
            href="/"
            className="text-[1.125em] font-black text-neo-black dark:text-white px-3 py-0.5 mr-[6em] rounded-full hover:bg-cream dark:hover:bg-neo-black transition-colors"
          >
            Out<span className="bg-neo-yellow px-0.5 rounded-sm">flo</span>
          </Link>

          {/* Divider */}
          {/* <span className="w-px h-5 bg-neo-black/20 dark:bg-white/20 mx-1" /> */}

          {/* Nav links with spacing */}
          <div className="flex items-center gap-1 px-2">
            {NAV_LINKS.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                className={`px-4 py-1 rounded-full text-[0.875em] font-bold transition-all ${pathname === href
                  ? "bg-neo-yellow text-neo-black border-2 border-neo-black"
                  : "text-neo-black dark:text-white hover:bg-neo-yellow/60 hover:text-neo-black"
                  }`}
              >
                {label}
              </Link>
            ))}
          </div>

          {/* Divider */}
          {/* <span className="w-px h-5 bg-neo-black/20 dark:bg-white/20 mx-1" /> */}

          {/* Theme toggle */}
          <div className="px-2 ml-[6em]">
            <ThemeToggle />
          </div>
        </nav>
      </div>
    </header>
  );
}
