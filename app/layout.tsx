import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "jmz — Full-Stack Developer",
    template: "%s | jmz",
  },
  description:
    "Full-stack developer specializing in React, Next.js, and TypeScript. Building fast, accessible web experiences.",
};

// Runs before paint to prevent flash of wrong theme. Defaults to dark.
const THEME_SCRIPT = `try{var t=localStorage.getItem('theme');if(t==='light')document.documentElement.classList.remove('dark');else document.documentElement.classList.add('dark')}catch(e){}`;

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} dark h-full`}
      suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col antialiased bg-white dark:bg-zinc-950 text-zinc-900 dark:text-zinc-50">
        <script dangerouslySetInnerHTML={{ __html: THEME_SCRIPT }} />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
