import Link from "next/link";
import { PostMeta } from "@/lib/posts";

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
    month: "short",
    day: "numeric",
  });
}

export default function BlogCard({ post }: { post: PostMeta }) {
  const gradient = GRADIENTS[hash(post.slug) % GRADIENTS.length];

  return (
    <Link
      href={`/blogs/${post.slug}`}
      className="group flex flex-col rounded-2xl overflow-hidden bg-white dark:bg-zinc-900 ring-1 ring-zinc-200/80 dark:ring-zinc-800/80 shadow-sm hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 ease-out"
    >
      {/* Cover image */}
      <div className="relative aspect-video overflow-hidden bg-zinc-100 dark:bg-zinc-800">
        {post.image ? (
          <img
            src={post.image}
            alt={post.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
          />
        ) : (
          <div className={`w-full h-full bg-gradient-to-br ${gradient}`} />
        )}
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 dark:group-hover:bg-white/5 transition-colors duration-300" />
      </div>

      {/* Content */}
      <div className="flex flex-col flex-1 p-5 gap-3">
        <p className="text-xs font-medium text-zinc-400 dark:text-zinc-500 tracking-wide uppercase">
          {formatDate(post.date)}
        </p>

        <h2 className="font-semibold text-lg leading-snug tracking-tight group-hover:text-violet-600 dark:group-hover:text-violet-400 transition-colors duration-200">
          {post.title}
        </h2>

        <p className="text-sm text-zinc-500 dark:text-zinc-400 line-clamp-2 leading-relaxed flex-1">
          {post.description}
        </p>

        {post.tags && post.tags.length > 0 && (
          <div className="flex flex-wrap gap-1.5">
            {post.tags.map((tag) => (
              <span
                key={tag}
                className={`text-xs px-2.5 py-0.5 rounded-full font-medium ${
                  TAG_COLORS[hash(tag) % TAG_COLORS.length]
                }`}
              >
                {tag}
              </span>
            ))}
          </div>
        )}

        <div className="pt-1 border-t border-zinc-100 dark:border-zinc-800">
          <span className="inline-flex items-center gap-1.5 text-sm font-medium text-zinc-500 dark:text-zinc-400 group-hover:text-violet-600 dark:group-hover:text-violet-400 transition-colors duration-200">
            Read Article
            <svg
              className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform duration-200"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </span>
        </div>
      </div>
    </Link>
  );
}
