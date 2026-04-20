import { getProjects } from "@/lib/posts";
import ProjectCard from "@/components/ProjectCard";
import Pagination from "@/components/Pagination";

const PER_PAGE = 6;

export default async function Portfolio({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) {
  const { page } = await searchParams;
  const currentPage = Math.max(1, Number(page) || 1);

  const allProjects = await getProjects();
  const totalPages = Math.ceil(allProjects.length / PER_PAGE);
  const projects = allProjects.slice((currentPage - 1) * PER_PAGE, currentPage * PER_PAGE);

  return (
    <main className="max-w-[1200px] mx-auto px-6 py-16">
      {/* Header */}
      <div className="mb-12 animate-fade-in-up">
        <h1 className="text-4xl sm:text-5xl font-bold tracking-tight mb-3">Portfolio</h1>
        <p className="text-zinc-500 dark:text-zinc-400 text-lg">
          A collection of things I&apos;ve designed and built.
        </p>
      </div>

      {allProjects.length === 0 ? (
        <div className="text-center py-24 text-zinc-400">No projects yet.</div>
      ) : (
        <>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, i) => (
              <div
                key={project.slug}
                className="animate-fade-in-up"
                style={{ animationDelay: `${i * 80}ms` }}
              >
                <ProjectCard project={project} />
              </div>
            ))}
          </div>

          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            basePath="/portfolio"
          />
        </>
      )}
    </main>
  );
}
