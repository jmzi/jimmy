import Link from "next/link";
import { getProjects, getPosts } from "@/lib/posts";
import ProjectCard from "@/components/ProjectCard";
import BlogCard from "@/components/BlogCard";

const TECH = [
  { name: "React", color: "bg-sky-100 text-sky-700 dark:bg-sky-950/60 dark:text-sky-300" },
  { name: "Next.js", color: "bg-zinc-100 text-zinc-700 dark:bg-zinc-800 dark:text-zinc-300" },
  { name: "TypeScript", color: "bg-blue-100 text-blue-700 dark:bg-blue-950/60 dark:text-blue-300" },
  { name: "Tailwind CSS", color: "bg-cyan-100 text-cyan-700 dark:bg-cyan-950/60 dark:text-cyan-300" },
  { name: "Node.js", color: "bg-green-100 text-green-700 dark:bg-green-950/60 dark:text-green-300" },
  { name: "PostgreSQL", color: "bg-indigo-100 text-indigo-700 dark:bg-indigo-950/60 dark:text-indigo-300" },
  { name: "MongoDB", color: "bg-emerald-100 text-emerald-700 dark:bg-emerald-950/60 dark:text-emerald-300" },
  { name: "Docker", color: "bg-sky-100 text-sky-700 dark:bg-sky-950/60 dark:text-sky-300" },
  { name: "GraphQL", color: "bg-pink-100 text-pink-700 dark:bg-pink-950/60 dark:text-pink-300" },
  { name: "Git", color: "bg-orange-100 text-orange-700 dark:bg-orange-950/60 dark:text-orange-300" },
  { name: "Figma", color: "bg-purple-100 text-purple-700 dark:bg-purple-950/60 dark:text-purple-300" },
  { name: "Vercel", color: "bg-zinc-100 text-zinc-700 dark:bg-zinc-800 dark:text-zinc-300" },
];

export default async function Home() {
  const [allProjects, allPosts] = await Promise.all([getProjects(), getPosts()]);
  const featured = allProjects.slice(0, 3);
  const latest = allPosts.slice(0, 3);

  return (
    <>
      {/* ── Hero ─────────────────────────────────────────────── */}
      <section className="relative overflow-hidden border-b border-zinc-200 dark:border-zinc-800">
        <div className="max-w-[1200px] mx-auto px-6 py-24 lg:py-36">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Text */}
            <div className="animate-fade-in-up">
              <div className="inline-flex items-center gap-2 text-sm font-medium text-violet-600 dark:text-violet-400 bg-violet-50 dark:bg-violet-950/50 border border-violet-200 dark:border-violet-800/60 px-3.5 py-1.5 rounded-full mb-8">
                <span className="w-2 h-2 bg-violet-500 rounded-full animate-pulse" />
                Available for work
              </div>

              <h1 className="text-5xl lg:text-6xl font-bold tracking-tight leading-tight mb-6">
                Crafting{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-600 to-cyan-500 dark:from-violet-400 dark:to-cyan-400">
                  Digital
                </span>
                <br />
                Experiences
              </h1>

              <p className="text-lg text-zinc-600 dark:text-zinc-400 leading-relaxed mb-10 max-w-lg">
                Full-stack developer with 5+ years building fast, accessible web
                applications. I turn ideas into polished products using React,
                Next.js, and TypeScript.
              </p>

              <div className="flex flex-wrap gap-4">
                <Link
                  href="/portfolio"
                  className="px-6 py-3 rounded-full bg-violet-600 hover:bg-violet-500 text-white font-semibold text-sm transition-colors duration-150 shadow-lg shadow-violet-500/20"
                >
                  View My Work
                </Link>
                <Link
                  href="/contact"
                  className="px-6 py-3 rounded-full border border-zinc-300 dark:border-zinc-700 text-zinc-700 dark:text-zinc-300 hover:bg-zinc-100 dark:hover:bg-zinc-800 font-semibold text-sm transition-colors duration-150"
                >
                  Get In Touch
                </Link>
              </div>
            </div>

            {/* Hero image */}
            <div className="animate-fade-in-up relative" style={{ animationDelay: "150ms" }}>
              <div className="relative rounded-2xl overflow-hidden aspect-[4/3] shadow-2xl ring-1 ring-zinc-200 dark:ring-zinc-800">
                <img
                  src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=900&q=80&fit=crop"
                  alt="Developer workspace"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-violet-900/20 to-transparent" />
              </div>
              {/* Floating badge */}
              <div className="absolute -bottom-4 -left-4 bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-700 rounded-xl px-4 py-3 shadow-lg flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-violet-100 dark:bg-violet-950/60 flex items-center justify-center">
                  <svg className="w-5 h-5 text-violet-600 dark:text-violet-400" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                  </svg>
                </div>
                <div>
                  <p className="text-xs text-zinc-500 dark:text-zinc-400">Projects completed</p>
                  <p className="font-bold text-zinc-900 dark:text-zinc-50 text-sm">50+</p>
                </div>
              </div>
            </div>
          </div>

          {/* Stats */}
          <div
            className="grid grid-cols-2 sm:grid-cols-4 gap-8 mt-20 pt-16 border-t border-zinc-200 dark:border-zinc-800 animate-fade-in-up"
            style={{ animationDelay: "250ms" }}
          >
            {[
              { value: "5+", label: "Years of Experience" },
              { value: "50+", label: "Projects Completed" },
              { value: "20+", label: "Happy Clients" },
              { value: "100%", label: "Passion for Code" },
            ].map(({ value, label }) => (
              <div key={label} className="text-center">
                <div className="text-3xl font-bold text-zinc-900 dark:text-zinc-50 mb-1">{value}</div>
                <div className="text-sm text-zinc-500 dark:text-zinc-400">{label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Featured Work ─────────────────────────────────────── */}
      <section className="py-24">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-12">
            <div>
              <p className="text-sm font-semibold text-violet-600 dark:text-violet-400 uppercase tracking-widest mb-2">
                Portfolio
              </p>
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">Selected Work</h2>
            </div>
            <Link
              href="/portfolio"
              className="inline-flex items-center gap-1.5 text-sm font-medium text-zinc-600 dark:text-zinc-400 hover:text-violet-600 dark:hover:text-violet-400 transition-colors"
            >
              View all projects
              <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {featured.map((project, i) => (
              <div key={project.slug} className="animate-fade-in-up" style={{ animationDelay: `${i * 80}ms` }}>
                <ProjectCard project={project} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Tech Stack ────────────────────────────────────────── */}
      <section className="py-20 border-y border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900/30">
        <div className="max-w-[1200px] mx-auto px-6">
          <p className="text-center text-sm font-semibold text-zinc-400 dark:text-zinc-500 uppercase tracking-widest mb-8">
            Technologies I Work With
          </p>
          <div className="flex flex-wrap gap-3 justify-center">
            {TECH.map(({ name, color }) => (
              <span
                key={name}
                className={`px-4 py-1.5 rounded-full text-sm font-medium ${color}`}
              >
                {name}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ── Latest Blog Posts ─────────────────────────────────── */}
      <section className="py-24">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-12">
            <div>
              <p className="text-sm font-semibold text-violet-600 dark:text-violet-400 uppercase tracking-widest mb-2">
                Blog
              </p>
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">From the Blog</h2>
            </div>
            <Link
              href="/blogs"
              className="inline-flex items-center gap-1.5 text-sm font-medium text-zinc-600 dark:text-zinc-400 hover:text-violet-600 dark:hover:text-violet-400 transition-colors"
            >
              All articles
              <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {latest.map((post, i) => (
              <div key={post.slug} className="animate-fade-in-up" style={{ animationDelay: `${i * 80}ms` }}>
                <BlogCard post={post} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA Banner ────────────────────────────────────────── */}
      <section className="py-24 border-t border-zinc-200 dark:border-zinc-800">
        <div className="max-w-[1200px] mx-auto px-6 text-center">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-4">
              Let&apos;s Work Together
            </h2>
            <p className="text-zinc-600 dark:text-zinc-400 text-lg mb-10 leading-relaxed">
              I&apos;m available for freelance projects and full-time opportunities.
              If you have an idea or a role you&apos;d like to discuss, I&apos;d love to hear from you.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link
                href="/contact"
                className="px-7 py-3.5 rounded-full bg-violet-600 hover:bg-violet-500 text-white font-semibold transition-colors duration-150 shadow-lg shadow-violet-500/20"
              >
                Start a Conversation
              </Link>
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="px-7 py-3.5 rounded-full border border-zinc-300 dark:border-zinc-700 text-zinc-700 dark:text-zinc-300 hover:bg-zinc-100 dark:hover:bg-zinc-800 font-semibold transition-colors duration-150 inline-flex items-center gap-2"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844a9.59 9.59 0 0 1 2.504.337c1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0 0 22 12.017C22 6.484 17.522 2 12 2z" />
                </svg>
                View GitHub
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
