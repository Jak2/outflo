import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { buildMetadata } from "@/lib/seo";

const inter = Inter({ subsets: ["latin"], weight: ["400", "500", "600", "700", "800", "900"] });

export const metadata: Metadata = buildMetadata({});

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* Prevent dark-mode flash on load */}
        <script
          dangerouslySetInnerHTML={{
            __html: `try{const t=localStorage.getItem('theme');if(t==='dark'||(!t&&window.matchMedia('(prefers-color-scheme: dark)').matches)){document.documentElement.classList.add('dark')}}catch(_){}`,
          }}
        />
      </head>
      <body
        className={`${inter.className} bg-cream dark:bg-neo-black text-neo-black dark:text-white min-h-screen flex flex-col`}
      >
        <Header />
        <main className="flex-1 px-[8em]">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
