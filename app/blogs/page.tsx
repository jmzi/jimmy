import { getPosts } from "@/lib/posts";
import BlogCard from "@/components/BlogCard";
import Pagination from "@/components/Pagination";

const PER_PAGE = 6;

export default async function Blogs({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) {
  const { page } = await searchParams;
  const currentPage = Math.max(1, Number(page) || 1);

  const allPosts = await getPosts();
  const totalPages = Math.ceil(allPosts.length / PER_PAGE);
  const posts = allPosts.slice((currentPage - 1) * PER_PAGE, currentPage * PER_PAGE);

  return (
    <main className="max-w-[1200px] mx-auto px-6 py-16">
      {/* Header */}
      <div className="mb-12 animate-fade-in-up">
        <h1 className="text-4xl sm:text-5xl font-bold tracking-tight mb-3">Blog</h1>
        <p className="text-zinc-500 dark:text-zinc-400 text-lg">
          Thoughts on development, design, and things I&apos;m learning.
        </p>
      </div>

      {allPosts.length === 0 ? (
        <div className="text-center py-24 text-zinc-400">No posts yet.</div>
      ) : (
        <>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {posts.map((post, i) => (
              <div
                key={post.slug}
                className="animate-fade-in-up"
                style={{ animationDelay: `${i * 80}ms` }}
              >
                <BlogCard post={post} />
              </div>
            ))}
          </div>

          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            basePath="/blogs"
          />
        </>
      )}
    </main>
  );
}
