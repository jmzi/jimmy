import { getPostBySlug, getPosts } from "@/lib/posts";
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
  "from-sky-400/20 via-blue-400/10 to-indigo-400/20",
  "from-rose-400/20 via-pink-400/10 to-orange-400/20",
  "from-green-400/20 via-emerald-400/10 to-teal-400/20",
  "from-amber-400/20 via-yellow-400/10 to-lime-400/20",
  "from-indigo-400/20 via-purple-400/10 to-pink-400/20",
];

function hash(s: string) {
  let h = 0;
  for (const c of s) h = (h * 31 + c.charCodeAt(0)) & 0xffff;
  return h;
}

function formatDate(dateStr: string) {
  if (!dateStr) return "";
  return new Date(dateStr).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export async function generateStaticParams() {
  const posts = await getPosts();
  return posts.map((post) => ({ slug: post.slug }));
}

export default async function BlogPost({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);

  if (!post) notFound();

  const gradient = GRADIENTS[hash(post.slug) % GRADIENTS.length];
  const wordCount = post.content.trim().split(/\s+/).length;
  const readTime = Math.max(1, Math.round(wordCount / 200));

  return (
    <main className="max-w-3xl mx-auto px-6 py-16">
      {/* Back link */}
      <AnimateIn>
        <Link
          href="/blogs"
          className="inline-flex items-center gap-1.5 text-sm text-zinc-500 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors mb-10"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16l-4-4m0 0l4-4m-4 4h18" />
          </svg>
          Back to Blog
        </Link>
      </AnimateIn>

      {/* Cover image */}
      <AnimateIn delay={80}>
        <div className="relative aspect-video w-full overflow-hidden rounded-2xl mb-10 bg-zinc-100 dark:bg-zinc-800 shadow-lg">
          {post.image ? (
            <img
              src={post.image}
              alt={post.title}
              className="w-full h-full object-cover"
            />
          ) : (
            <div className={`w-full h-full bg-gradient-to-br ${gradient}`} />
          )}
        </div>
      </AnimateIn>

      {/* Meta: date + read time */}
      <AnimateIn delay={120}>
        <div className="flex items-center gap-3 text-sm text-zinc-400 dark:text-zinc-500 mb-4">
          <span>{formatDate(post.date)}</span>
          <span>·</span>
          <span>{readTime} min read</span>
        </div>
      </AnimateIn>

      {/* Title */}
      <AnimateIn delay={160}>
        <h1 className="text-4xl sm:text-5xl font-bold tracking-tight mb-4 leading-tight">
          {post.title}
        </h1>
      </AnimateIn>

      {/* Description */}
      <AnimateIn delay={200}>
        <p className="text-lg text-zinc-600 dark:text-zinc-400 leading-relaxed mb-6">
          {post.description}
        </p>
      </AnimateIn>

      {/* Tags */}
      {post.tags && post.tags.length > 0 && (
        <AnimateIn delay={240}>
          <div className="flex flex-wrap gap-2 mb-10">
            {post.tags.map((tag) => (
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

      {/* Divider */}
      <AnimateIn delay={280}>
        <hr className="border-zinc-200 dark:border-zinc-800 mb-10" />
      </AnimateIn>

      {/* Content */}
      <AnimateIn delay={320}>
        <article className="prose prose-zinc dark:prose-invert max-w-none prose-headings:font-bold prose-headings:tracking-tight prose-a:text-violet-600 dark:prose-a:text-violet-400 prose-img:rounded-xl">
          <div dangerouslySetInnerHTML={{ __html: post.content }} />
        </article>
      </AnimateIn>
    </main>
  );
}
