import Link from "next/link";
import { getProjects } from "@/lib/posts";
import ProjectCard from "@/components/ProjectCard";
import ServiceIcon from "@/components/ServiceIcon";
import { SERVICES } from "@/lib/services";

const WHY_WORK_WITH_ME = [
  "Hands-on experience managing and maintaining 20+ WordPress websites",
  "Practical, day-to-day experience with Elementor and Divi page builders",
  "Comfortable improving and maintaining existing websites, not just building new ones",
  "Understands the business side of a website, not only the technical side",
  "Reliable ongoing support after your site goes live",
  "Added capability in CRM setup and business process automation",
];

const WORKFLOW = [
  {
    step: "01",
    title: "Discovery",
    description: "We talk through your business, your goals, and what you need your website to do.",
  },
  {
    step: "02",
    title: "Planning",
    description: "I outline the right approach and scope — whether that's a new build, a redesign, or a fix.",
  },
  {
    step: "03",
    title: "Development",
    description: "I build or improve the website, keeping you updated as the work progresses.",
  },
  {
    step: "04",
    title: "Review",
    description: "We test functionality, responsiveness, and performance together before anything goes live.",
  },
  {
    step: "05",
    title: "Delivery",
    description: "The site launches, and I stay available for support, updates, and maintenance.",
  },
];

const FAQS = [
  {
    question: "Do you only build new websites, or can you work with my existing site?",
    answer:
      "Both. A large part of my work is improving, fixing, and maintaining existing WordPress sites — not only building from scratch.",
  },
  {
    question: "What platforms do you build with?",
    answer:
      "Primarily WordPress, using Elementor or Divi depending on what fits the project best.",
  },
  {
    question: "Do you offer ongoing maintenance after the site is launched?",
    answer:
      "Yes. Website maintenance and support is one of my core services — plugin and theme updates, backups, troubleshooting, and content changes.",
  },
  {
    question: "Can you help connect my website to a CRM?",
    answer:
      "Yes. I have experience setting up CRM systems like Salesmate, along with form and email integrations to automate lead follow-up.",
  },
  {
    question: "How do we get started?",
    answer:
      "Reach out through the contact form with a short description of your project. I'll follow up to discuss goals, scope, and next steps.",
  },
];

export default async function Home() {
  const allProjects = await getProjects();
  const featured = allProjects.slice(0, 3);

  return (
    <>
      {/* ── Hero ─────────────────────────────────────── */}
      <section className="relative overflow-hidden border-b border-zinc-200 dark:border-zinc-800">
        <div className="max-w-[1200px] mx-auto px-6 py-24 lg:py-32">
          <div className="max-w-3xl animate-fade-in-up">
            <div className="inline-flex items-center gap-2 text-sm font-medium text-violet-600 dark:text-violet-400 bg-violet-50 dark:bg-violet-950/50 border border-violet-200 dark:border-violet-800/60 px-3.5 py-1.5 rounded-full mb-8">
              <span className="w-2 h-2 bg-violet-500 rounded-full animate-pulse" />
              Available for new projects
            </div>

            <h1 className="text-5xl lg:text-6xl font-bold tracking-tight leading-tight mb-6">
              Websites That Help Businesses Grow.
            </h1>

            <p className="text-lg text-zinc-600 dark:text-zinc-400 leading-relaxed mb-10 max-w-xl">
              I help businesses build, improve, and maintain professional
              websites that look great, perform smoothly, and support their
              business goals — on WordPress, with ongoing support when you
              need it.
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
                Let&apos;s Work Together
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── Services ─────────────────────────────────── */}
      <section className="py-24 border-b border-zinc-200 dark:border-zinc-800">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-12">
            <div>
              <p className="text-sm font-semibold text-violet-600 dark:text-violet-400 uppercase tracking-widest mb-2">
                Services
              </p>
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">How I Can Help</h2>
            </div>
            <Link
              href="/services"
              className="inline-flex items-center gap-1.5 text-sm font-medium text-zinc-600 dark:text-zinc-400 hover:text-violet-600 dark:hover:text-violet-400 transition-colors"
            >
              View all services
              <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {SERVICES.map(({ slug, icon, title, summary }, i) => (
              <div
                key={slug}
                className="animate-fade-in-up p-6 rounded-2xl bg-zinc-50 dark:bg-zinc-900/60 border border-zinc-200 dark:border-zinc-800 hover:border-violet-300 dark:hover:border-violet-800/60 transition-colors duration-200"
                style={{ animationDelay: `${i * 80}ms` }}
              >
                <div className="w-11 h-11 rounded-xl bg-violet-100 dark:bg-violet-950/60 flex items-center justify-center text-violet-600 dark:text-violet-400 mb-4">
                  <ServiceIcon icon={icon} />
                </div>
                <h3 className="font-semibold text-lg mb-2">{title}</h3>
                <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">{summary}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Featured Work ────────────────────────────── */}
      <section className="py-24 border-b border-zinc-200 dark:border-zinc-800">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-4">
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
          <p className="text-sm text-zinc-500 dark:text-zinc-400 mb-12 max-w-2xl">
            These are demo / practice projects that showcase web development
            capability. Most of my real-world experience is managing and
            maintaining client WordPress sites, which aren&apos;t shown here
            out of client confidentiality.
          </p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {featured.map((project, i) => (
              <div key={project.slug} className="animate-fade-in-up" style={{ animationDelay: `${i * 80}ms` }}>
                <ProjectCard project={project} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Why Work With Me ────────────────────────── */}
      <section className="py-24 border-b border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900/30">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="mb-12">
            <p className="text-sm font-semibold text-violet-600 dark:text-violet-400 uppercase tracking-widest mb-2">
              Why Work With Me
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">What You Get</h2>
          </div>

          <div className="grid sm:grid-cols-2 gap-5">
            {WHY_WORK_WITH_ME.map((point, i) => (
              <div
                key={i}
                className="animate-fade-in-up flex items-start gap-3 p-5 rounded-xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800"
                style={{ animationDelay: `${i * 60}ms` }}
              >
                <svg className="w-5 h-5 shrink-0 mt-0.5 text-violet-600 dark:text-violet-400" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
                <p className="text-sm text-zinc-700 dark:text-zinc-300 leading-relaxed">{point}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Workflow ─────────────────────────────────── */}
      <section className="py-24 border-b border-zinc-200 dark:border-zinc-800">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="mb-12">
            <p className="text-sm font-semibold text-violet-600 dark:text-violet-400 uppercase tracking-widest mb-2">
              My Workflow
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">How We&apos;ll Work Together</h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {WORKFLOW.map(({ step, title, description }, i) => (
              <div key={step} className="animate-fade-in-up" style={{ animationDelay: `${i * 80}ms` }}>
                <div className="text-sm font-bold text-violet-600 dark:text-violet-400 mb-2">{step}</div>
                <h3 className="font-semibold text-lg mb-2">{title}</h3>
                <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">{description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ ──────────────────────────────────────── */}
      <section className="py-24 border-b border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900/30">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="mb-12 max-w-2xl">
            <p className="text-sm font-semibold text-violet-600 dark:text-violet-400 uppercase tracking-widest mb-2">
              FAQ
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">Common Questions</h2>
          </div>

          <div className="max-w-3xl flex flex-col gap-4">
            {FAQS.map(({ question, answer }, i) => (
              <div
                key={i}
                className="animate-fade-in-up p-6 rounded-xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800"
                style={{ animationDelay: `${i * 60}ms` }}
              >
                <h3 className="font-semibold text-zinc-900 dark:text-zinc-50 mb-2">{question}</h3>
                <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">{answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA Banner ───────────────────────────────── */}
      <section className="py-24">
        <div className="max-w-[1200px] mx-auto px-6 text-center">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-4">
              Have a Project in Mind? Let&apos;s Build Something Great.
            </h2>
            <p className="text-zinc-600 dark:text-zinc-400 text-lg mb-10 leading-relaxed">
              Whether you need a new website, a redesign, ongoing maintenance,
              or help automating your lead follow-up — let&apos;s talk about
              what your business needs.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link
                href="/contact"
                className="px-7 py-3.5 rounded-full bg-violet-600 hover:bg-violet-500 text-white font-semibold transition-colors duration-150 shadow-lg shadow-violet-500/20"
              >
                Start a Conversation
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
