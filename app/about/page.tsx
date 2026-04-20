import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = { title: "About" };

const SKILLS = [
  {
    category: "Frontend",
    color: "bg-sky-100 text-sky-700 dark:bg-sky-950/60 dark:text-sky-300",
    items: ["React", "Next.js", "TypeScript", "Tailwind CSS", "HTML / CSS", "Framer Motion"],
  },
  {
    category: "Backend",
    color: "bg-green-100 text-green-700 dark:bg-green-950/60 dark:text-green-300",
    items: ["Node.js", "Express", "REST APIs", "GraphQL", "tRPC", "WebSockets"],
  },
  {
    category: "Database",
    color: "bg-indigo-100 text-indigo-700 dark:bg-indigo-950/60 dark:text-indigo-300",
    items: ["PostgreSQL", "MongoDB", "Redis", "Supabase", "Prisma", "Drizzle ORM"],
  },
  {
    category: "Tools & Infra",
    color: "bg-orange-100 text-orange-700 dark:bg-orange-950/60 dark:text-orange-300",
    items: ["Git", "Docker", "Vercel", "AWS S3", "GitHub Actions", "Figma"],
  },
];

const EXPERIENCE = [
  {
    role: "Senior Frontend Developer",
    company: "TechCorp",
    period: "2023 – Present",
    description:
      "Lead the frontend architecture for an enterprise SaaS platform serving 50k+ users. Built a design system from scratch, reduced bundle size by 40%, and mentored a team of 4 developers.",
    tags: ["Next.js", "TypeScript", "Design System"],
  },
  {
    role: "Full Stack Developer",
    company: "Startup Inc",
    period: "2021 – 2023",
    description:
      "Built the core product from zero-to-launch. Owned the full stack — React frontend, Node.js API, and PostgreSQL database. Grew the product to 10k monthly active users.",
    tags: ["React", "Node.js", "PostgreSQL"],
  },
  {
    role: "Frontend Developer",
    company: "Digital Agency Co",
    period: "2019 – 2021",
    description:
      "Delivered over 20 client projects ranging from marketing sites to complex web apps. Established frontend coding standards and introduced TypeScript to the team.",
    tags: ["React", "TypeScript", "CSS"],
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
                Hi, I&apos;m jmz
              </h1>
              <p className="text-lg text-zinc-600 dark:text-zinc-400 leading-relaxed mb-6">
                A full-stack developer based in San Francisco, CA. I build
                fast, accessible web applications that people actually enjoy
                using — from idea to deployment.
              </p>
              <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed mb-8">
                With 5+ years of experience across startups and agencies, I&apos;ve
                developed a strong eye for both engineering quality and product
                design. I care deeply about clean code, great UX, and shipping things that matter.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link
                  href="/contact"
                  className="px-6 py-3 rounded-full bg-violet-600 hover:bg-violet-500 text-white font-semibold text-sm transition-colors"
                >
                  Get In Touch
                </Link>
                <a
                  href="/alex-carter-resume.pdf"
                  className="px-6 py-3 rounded-full border border-zinc-300 dark:border-zinc-700 text-zinc-700 dark:text-zinc-300 hover:bg-zinc-100 dark:hover:bg-zinc-800 font-semibold text-sm transition-colors inline-flex items-center gap-2"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                  Download Resume
                </a>
              </div>
            </div>

            {/* Photo */}
            <div className="animate-fade-in-up flex justify-center lg:justify-end" style={{ animationDelay: "120ms" }}>
              <div className="relative">
                <div className="w-72 h-72 sm:w-96 sm:h-96 rounded-3xl overflow-hidden ring-4 ring-violet-200 dark:ring-violet-800/50 shadow-2xl">
                  <img
                    src="https://res.cloudinary.com/dnr4zo1ov/image/upload/v1776670527/jmz_wunyoh.jpg"
                    alt="jmz"
                    className="w-full h-full object-cover"
                  />
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
            <h2 className="text-3xl font-bold tracking-tight">Technologies &amp; Tools</h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
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

      {/* ── Experience ────────────────────────────────────────── */}
      <section className="py-20 border-b border-zinc-200 dark:border-zinc-800">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="mb-12">
            <p className="text-sm font-semibold text-violet-600 dark:text-violet-400 uppercase tracking-widest mb-2">
              Experience
            </p>
            <h2 className="text-3xl font-bold tracking-tight">Work History</h2>
          </div>

          <div className="flex flex-col gap-6">
            {EXPERIENCE.map(({ role, company, period, description, tags }, i) => (
              <div
                key={i}
                className="group p-6 sm:p-8 rounded-2xl bg-zinc-50 dark:bg-zinc-900/60 border border-zinc-200 dark:border-zinc-800 hover:border-violet-300 dark:hover:border-violet-800/60 transition-colors duration-200"
              >
                <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3 mb-3">
                  <div>
                    <h3 className="font-semibold text-lg text-zinc-900 dark:text-zinc-50">{role}</h3>
                    <p className="text-violet-600 dark:text-violet-400 font-medium text-sm">{company}</p>
                  </div>
                  <span className="shrink-0 text-sm text-zinc-500 dark:text-zinc-400 bg-zinc-100 dark:bg-zinc-800 px-3 py-1 rounded-full">
                    {period}
                  </span>
                </div>
                <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed text-sm mb-4">{description}</p>
                <div className="flex flex-wrap gap-2">
                  {tags.map((tag) => (
                    <span key={tag} className="text-xs px-2.5 py-1 rounded-full bg-zinc-200 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-400 font-medium">
                      {tag}
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
            I&apos;m currently open to new opportunities. Let&apos;s build something great.
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
