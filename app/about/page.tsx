import type { Metadata } from "next";
import Link from "next/link";
import { SITE_NAME } from "@/lib/site";

export const metadata: Metadata = { title: "About" };

const SKILLS = [
  {
    category: "Website Development",
    color: "bg-sky-100 text-sky-700 dark:bg-sky-950/60 dark:text-sky-300",
    items: ["WordPress", "Elementor", "Divi", "Responsive Design", "Landing Pages"],
  },
  {
    category: "Technical Experience",
    color: "bg-green-100 text-green-700 dark:bg-green-950/60 dark:text-green-300",
    items: ["Hostinger", "WordPress Administration", "Plugins & Themes", "Hosting & Domains", "Troubleshooting"],
  },
  {
    category: "Business Systems",
    color: "bg-indigo-100 text-indigo-700 dark:bg-indigo-950/60 dark:text-indigo-300",
    items: ["Salesmate CRM", "Lead Generation Workflows", "Form & Email Integrations", "Process Automation"],
  },
];

export default function About() {
  return (
    <main>
      {/* ── Hero ──────────────────────────────────────────────── */}
      <section className="border-b border-zinc-200 dark:border-zinc-800 py-20">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Text */}
            <div className="animate-fade-in-up">
              <p className="text-sm font-semibold text-violet-600 dark:text-violet-400 uppercase tracking-widest mb-4">
                About Me
              </p>
              <h1 className="text-4xl sm:text-5xl font-bold tracking-tight leading-tight mb-6">
                Hi, I&apos;m {SITE_NAME}
              </h1>
              <p className="text-lg text-zinc-600 dark:text-zinc-400 leading-relaxed mb-6">
                I help small and medium-sized businesses build, improve, and
                maintain their websites — with a focus on WordPress.
              </p>
              <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed mb-4">
                Over time I&apos;ve managed and maintained more than 20
                WordPress websites, working extensively with Elementor and
                Divi to build and customize sites that stay easy to manage
                long after launch. I&apos;m just as comfortable working with
                an existing website — fixing what&apos;s broken, updating
                outdated content, improving performance — as I am building
                something new from scratch.
              </p>
              <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed mb-8">
                Alongside web development, I also work with CRM platforms
                like Salesmate to help businesses automate lead follow-up and
                simplify day-to-day operations. My focus is on practical,
                reliable solutions that support what your business is
                actually trying to do — not just a website that looks good.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link
                  href="/contact"
                  className="px-6 py-3 rounded-full bg-violet-600 hover:bg-violet-500 text-white font-semibold text-sm transition-colors"
                >
                  Get In Touch
                </Link>
                <Link
                  href="/services"
                  className="px-6 py-3 rounded-full border border-zinc-300 dark:border-zinc-700 text-zinc-700 dark:text-zinc-300 hover:bg-zinc-100 dark:hover:bg-zinc-800 font-semibold text-sm transition-colors"
                >
                  View Services
                </Link>
              </div>
            </div>

            {/* Avatar placeholder */}
            <div className="animate-fade-in-up flex justify-center lg:justify-end" style={{ animationDelay: "120ms" }}>
              <div className="relative">
                <div className="w-72 h-72 sm:w-96 sm:h-96 rounded-3xl overflow-hidden ring-4 ring-violet-200 dark:ring-violet-800/50 shadow-2xl bg-gradient-to-br from-violet-100 to-cyan-100 dark:from-violet-950/60 dark:to-cyan-950/40 flex items-center justify-center">
                  <span className="text-7xl sm:text-8xl font-bold text-violet-400 dark:text-violet-500/70">
                    {SITE_NAME.charAt(0)}
                  </span>
                </div>
                {/* Decorative dot grid */}
                <div className="absolute -bottom-6 -right-6 w-24 h-24 opacity-20 dark:opacity-10"
                  style={{ backgroundImage: "radial-gradient(circle, #8b5cf6 1.5px, transparent 1.5px)", backgroundSize: "10px 10px" }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Skills ────────────────────────────────────────────── */}
      <section className="py-20 border-b border-zinc-200 dark:border-zinc-800">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="mb-12">
            <p className="text-sm font-semibold text-violet-600 dark:text-violet-400 uppercase tracking-widest mb-2">
              Skills
            </p>
            <h2 className="text-3xl font-bold tracking-tight">Tools &amp; Expertise</h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {SKILLS.map(({ category, color, items }) => (
              <div
                key={category}
                className="p-6 rounded-2xl bg-zinc-50 dark:bg-zinc-900/60 border border-zinc-200 dark:border-zinc-800"
              >
                <h3 className="font-semibold text-sm text-zinc-900 dark:text-zinc-50 mb-4">{category}</h3>
                <div className="flex flex-wrap gap-2">
                  {items.map((item) => (
                    <span key={item} className={`text-xs px-2.5 py-1 rounded-full font-medium ${color}`}>
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ───────────────────────────────────────────────── */}
      <section className="py-20">
        <div className="max-w-[1200px] mx-auto px-6 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold mb-4">Interested in working together?</h2>
          <p className="text-zinc-600 dark:text-zinc-400 mb-8">
            I&apos;m currently taking on new freelance projects. Let&apos;s build something great.
          </p>
          <Link
            href="/contact"
            className="inline-block px-7 py-3.5 rounded-full bg-violet-600 hover:bg-violet-500 text-white font-semibold transition-colors shadow-lg shadow-violet-500/20"
          >
            Say Hello
          </Link>
        </div>
      </section>
    </main>
  );
}
