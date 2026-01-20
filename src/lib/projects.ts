import fs from "fs";
import path from "path";
import matter from "gray-matter";

const projectsDirectory = path.join(process.cwd(), "src/content/projects");

console.log(projectsDirectory);

export interface Project {
    slug: string;
    title: string;
    description: string;
    type: "product" | "graphics" | "design" | "experiment";
    status?: "live" | "archived" | "wip";
    date: string;
    coverImage?: string;
    hasVideo?: boolean;
    tags: string[];
    links?: {
        demo?: string;
        github?: string;
        twitter?: string;
    };
    content: string;
}

export interface ProjectMetadata {
    title: string;
    description: string;
    type: "product" | "graphics" | "design" | "experiment";
    status?: "live" | "archived" | "wip";
    date: string;
    coverImage?: string;
    hasVideo?: boolean;
    tags: string[];
    links?: {
        demo?: string;
        github?: string;
        twitter?: string;
    };
}

export function getAllProjects(): Project[] {
    const fileNames = fs.readdirSync(projectsDirectory);
    const projects = fileNames
        .filter(
            (fileName) => fileName.endsWith(".md") || fileName.endsWith(".mdx"),
        )
        .map((fileName) => {
            const slug = fileName.replace(/\.mdx?$/, "");
            const fullPath = path.join(projectsDirectory, fileName);
            const fileContents = fs.readFileSync(fullPath, "utf8");
            const { data, content } = matter(fileContents);

            return {
                slug,
                ...(data as ProjectMetadata),
                content,
            } as Project;
        });

    return projects.sort((a, b) => (a.date > b.date ? -1 : 1));
}

export function getProjectBySlug(slug: string): Project | null {
    try {
        const fullPath = path.join(projectsDirectory, `${slug}.md`);
        const fileContents = fs.readFileSync(fullPath, "utf8");
        const { data, content } = matter(fileContents);

        return {
            slug,
            ...(data as ProjectMetadata),
            content,
        } as Project;
    } catch {
        return null;
    }
}
