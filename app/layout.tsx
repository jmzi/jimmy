import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { SITE_NAME } from "@/lib/site";
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
    default: `${SITE_NAME} — Freelance Web Developer | WordPress Specialist`,
    template: `%s | ${SITE_NAME}`,
  },
  description:
    "Freelance web developer helping small businesses build, redesign, and maintain professional WordPress websites — plus CRM and business automation support.",
  openGraph: {
    title: `${SITE_NAME} — Freelance Web Developer | WordPress Specialist`,
    description:
      "Websites that help businesses grow. WordPress development, redesigns, maintenance, and CRM automation.",
    siteName: SITE_NAME,
    type: "website",
  },
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
