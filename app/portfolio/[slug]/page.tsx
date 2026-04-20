import { getProjectBySlug, getProjects } from "@/lib/posts";
import { notFound } from "next/navigation";
import Link from "next/link";
import AnimateIn from "@/components/AnimateIn";

const TAG_COLORS = [
  "bg-blue-100 text-blue-700 dark:bg-blue-950/60 dark:text-blue-300",
  "bg-violet-100 text-violet-700 dark:bg-violet-950/60 dark:text-violet-300",
  "bg-emerald-100 text-emerald-700 dark:bg-emerald-950/60 dark:text-emerald-300",
  "bg-orange-100 text-orange-700 dark:bg-orange-950/60 dark:text-orange-300",
  "bg-pink-100 text-pink-700 dark:bg-pink-950/60 dark:text-pink-300",
  "bg-cyan-100 text-cyan-700 dark:bg-cyan-950/60 dark:text-cyan-300",
];

const GRADIENTS = [
  "from-violet-400/20 via-fuchsia-400/10 to-cyan-400/20",
  "from-orange-400/20 via-pink-400/10 to-rose-400/20",
  "from-emerald-400/20 via-teal-400/10 to-cyan-400/20",
  "from-blue-400/20 via-indigo-400/10 to-violet-400/20",
  "from-yellow-400/20 via-orange-400/10 to-pink-400/20",
];

function hash(s: string) {
  let h = 0;
  for (const c of s) h = (h * 31 + c.charCodeAt(0)) & 0xffff;
  return h;
}

export async function generateStaticParams() {
  const projects = await getProjects();
  return projects.map((project) => ({ slug: project.slug }));
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = await getProjectBySlug(slug);

  if (!project) notFound();

  const gradient = GRADIENTS[hash(project.slug) % GRADIENTS.length];

  return (
    <main className="max-w-4xl mx-auto px-6 py-16">
      {/* Back link */}
      <AnimateIn>
        <Link
          href="/portfolio"
          className="inline-flex items-center gap-1.5 text-sm text-zinc-500 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors mb-10"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16l-4-4m0 0l4-4m-4 4h18" />
          </svg>
          Back to Portfolio
        </Link>
      </AnimateIn>

      {/* Hero image */}
      <AnimateIn delay={80}>
        <div className="relative aspect-video w-full overflow-hidden rounded-2xl mb-10 bg-zinc-100 dark:bg-zinc-800 shadow-lg">
          {project.image ? (
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover"
            />
          ) : (
            <div className={`w-full h-full bg-gradient-to-br ${gradient}`} />
          )}
        </div>
      </AnimateIn>

      {/* Title */}
      <AnimateIn delay={140}>
        <h1 className="text-4xl sm:text-5xl font-bold tracking-tight mb-4">
          {project.title}
        </h1>
      </AnimateIn>

      {/* Description */}
      <AnimateIn delay={180}>
        <p className="text-lg text-zinc-600 dark:text-zinc-400 leading-relaxed mb-6">
          {project.description}
        </p>
      </AnimateIn>

      {/* Tags */}
      {project.tags && project.tags.length > 0 && (
        <AnimateIn delay={220}>
          <div className="flex flex-wrap gap-2 mb-8">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className={`text-sm px-3 py-1 rounded-full font-medium ${
                  TAG_COLORS[hash(tag) % TAG_COLORS.length]
                }`}
              >
                {tag}
              </span>
            ))}
          </div>
        </AnimateIn>
      )}

      {/* CTA */}
      {project.url && (
        <AnimateIn delay={260}>
          <a
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-zinc-900 dark:bg-zinc-50 text-white dark:text-black px-6 py-2.5 text-sm font-semibold hover:opacity-80 active:scale-95 transition-all duration-200 mb-12 shadow-md"
          >
            Live Demo
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </a>
        </AnimateIn>
      )}

      {/* Divider */}
      <AnimateIn delay={300}>
        <hr className="border-zinc-200 dark:border-zinc-800 mb-10" />
      </AnimateIn>

      {/* Content */}
      <AnimateIn delay={340}>
        <article className="prose prose-zinc dark:prose-invert max-w-none prose-headings:font-bold prose-headings:tracking-tight prose-a:text-violet-600 dark:prose-a:text-violet-400">
          <div dangerouslySetInnerHTML={{ __html: project.content }} />
        </article>
      </AnimateIn>
    </main>
  );
}
