import fs from "fs";
import path from "path";

export type PostMeta = {
  slug: string;
  title: string;
  date: string;
  description: string;
  tags?: string[];
  image?: string;
};

export type Post = PostMeta & {
  content: string;
};

export type ProjectMeta = {
  slug: string;
  title: string;
  description: string;
  tags?: string[];
  url?: string;
  image?: string;
};

export type Project = ProjectMeta & {
  content: string;
};

function parseFrontmatter(raw: string): { data: Record<string, string>; content: string } {
  const match = raw.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n([\s\S]*)$/);
  if (!match) return { data: {}, content: raw };

  const data: Record<string, string> = {};
  for (const line of match[1].split("\n")) {
    const [key, ...rest] = line.split(":");
    if (key) data[key.trim()] = rest.join(":").trim().replace(/^["']|["']$/g, "");
  }

  return { data, content: match[2].trim() };
}

const BLOGS_DIR = path.join(process.cwd(), "content/blogs");
const PROJECTS_DIR = path.join(process.cwd(), "content/projects");

export async function getPosts(): Promise<PostMeta[]> {
  const files = fs.readdirSync(BLOGS_DIR).filter((f) => f.endsWith(".mdx"));
  return files
    .map((file) => {
      const raw = fs.readFileSync(path.join(BLOGS_DIR, file), "utf-8");
      const { data } = parseFrontmatter(raw);
      return {
        slug: file.replace(/\.mdx$/, ""),
        title: data.title ?? "Untitled",
        date: data.date ?? "",
        description: data.description ?? "",
        tags: data.tags ? data.tags.split(",").map((t) => t.trim()) : [],
        image: data.image ?? "",
      };
    })
    .sort((a, b) => (a.date < b.date ? 1 : -1));
}

export async function getPostBySlug(slug: string): Promise<Post | null> {
  const filePath = path.join(BLOGS_DIR, `${slug}.mdx`);
  if (!fs.existsSync(filePath)) return null;
  const raw = fs.readFileSync(filePath, "utf-8");
  const { data, content } = parseFrontmatter(raw);
  return {
    slug,
    title: data.title ?? "Untitled",
    date: data.date ?? "",
    description: data.description ?? "",
    tags: data.tags ? data.tags.split(",").map((t) => t.trim()) : [],
    image: data.image ?? "",
    content,
  };
}

export async function getProjects(): Promise<ProjectMeta[]> {
  const files = fs.readdirSync(PROJECTS_DIR).filter((f) => f.endsWith(".mdx"));
  return files.map((file) => {
    const raw = fs.readFileSync(path.join(PROJECTS_DIR, file), "utf-8");
    const { data } = parseFrontmatter(raw);
    return {
      slug: file.replace(/\.mdx$/, ""),
      title: data.title ?? "Untitled",
      description: data.description ?? "",
      tags: data.tags ? data.tags.split(",").map((t) => t.trim()) : [],
      url: data.url ?? "",
      image: data.image ?? "",
    };
  });
}

export async function getProjectBySlug(slug: string): Promise<Project | null> {
  const filePath = path.join(PROJECTS_DIR, `${slug}.mdx`);
  if (!fs.existsSync(filePath)) return null;
  const raw = fs.readFileSync(filePath, "utf-8");
  const { data, content } = parseFrontmatter(raw);
  return {
    slug,
    title: data.title ?? "Untitled",
    description: data.description ?? "",
    tags: data.tags ? data.tags.split(",").map((t) => t.trim()) : [],
    url: data.url ?? "",
    image: data.image ?? "",
    content,
  };
}
