import Link from "next/link";
import Image from "next/image";
import { getProjectBySlug, getAllProjects } from "@/lib/projects";
import { notFound } from "next/navigation";
import ReactMarkdown from "react-markdown";

export async function generateStaticParams() {
    const projects = getAllProjects();
    return projects.map((project) => ({
        slug: project.slug,
    }));
}

export default async function ProjectPage({
    params,
}: {
    params: Promise<{ slug: string }>;
}) {
    const { slug } = await params;
    const project = getProjectBySlug(slug);

    if (!project) {
        notFound();
    }

    return (
        <div className="w-full h-dvh overflow-hidden">
            <div className="h-full w-full p-8 flex flex-col gap-6 overflow-y-auto pb-40">
                <div className="max-w-xl mx-auto flex flex-col gap-4">
                    <Link
                        href="/engr"
                        className="flex flex-row items-center gap-2"
                    >
                        <p className="tracking-tighter text-sm">← back</p>
                    </Link>

                    {/* Hero Section */}
                    <article className="pb-24">
                        {/* Meta info */}
                        <div className="flex items-center gap-3 mb-6">
                            <span className="px-3 py-1 text-xs rounded-full bg-blue-50 text-blue-600 font-medium">
                                {project.type}
                            </span>
                            {project.status === "live" && (
                                <span className="px-3 py-1 text-xs rounded-full bg-green-50 text-green-600 font-medium">
                                    Live
                                </span>
                            )}
                            {/* <span className="text-sm text-gray-500">{project.date}</span> */}
                        </div>

                        {/* Title and description */}
                        <h1 className="text-5xl md:text-6xl font-bold tracking-tighter mb-6">
                            {project.title}
                        </h1>

                        <p className="text-xl md:text-2xl text-gray-600 mb-12">
                            {project.description}
                        </p>

                        {/* Cover image */}
                        {project.coverImage && (
                            <div className="w-full aspect-video bg-gray-100 rounded-2xl overflow-hidden mb-16 relative">
                                <Image
                                    src={project.coverImage}
                                    alt={project.title}
                                    fill
                                    className="object-contain"
                                    priority
                                />
                            </div>
                        )}

                        {/* Markdown content */}
                        <div className="prose prose-lg max-w-none">
                            <ReactMarkdown
                                components={{
                                    h2: ({ children }) => (
                                        <h2 className="text-3xl font-semibold tracking-tight mt-16 mb-6">
                                            {children}
                                        </h2>
                                    ),
                                    h3: ({ children }) => (
                                        <h3 className="text-2xl font-semibold tracking-tight mt-12 mb-4">
                                            {children}
                                        </h3>
                                    ),
                                    p: ({ children }) => (
                                        <p className="text-gray-700 leading-relaxed mb-6">
                                            {children}
                                        </p>
                                    ),
                                    img: ({ src, alt }) => (
                                        <div className="w-full my-12 rounded-xl overflow-hidden">
                                            <Image
                                                src={src || ""}
                                                alt={alt || ""}
                                                width={1200}
                                                height={800}
                                                className="w-full"
                                            />
                                        </div>
                                    ),
                                    video: ({ src }) => (
                                        <div className="w-full my-12 rounded-xl overflow-hidden">
                                            <video
                                                src={src}
                                                controls
                                                className="w-full"
                                            />
                                        </div>
                                    ),
                                    code: ({ children, className }) => {
                                        const isInline = !className;
                                        if (isInline) {
                                            return (
                                                <code className="px-1.5 py-0.5 bg-gray-100 text-pink-600 rounded text-sm">
                                                    {children}
                                                </code>
                                            );
                                        }
                                        return (
                                            <code className="block p-4 bg-gray-50 rounded-lg text-sm overflow-x-auto">
                                                {children}
                                            </code>
                                        );
                                    },
                                    ul: ({ children }) => (
                                        <ul className="list-disc list-inside space-y-2 mb-6">
                                            {children}
                                        </ul>
                                    ),
                                    ol: ({ children }) => (
                                        <ol className="list-decimal list-inside space-y-2 mb-6">
                                            {children}
                                        </ol>
                                    ),
                                }}
                            >
                                {project.content}
                            </ReactMarkdown>
                        </div>

                        {/* Tech tags */}
                        {project.tags && project.tags.length > 0 && (
                            <div className="mt-16 pt-8 border-t border-gray-100">
                                <h3 className="text-sm font-medium text-gray-500 mb-4">
                                    Technologies
                                </h3>
                                <div className="flex flex-wrap gap-2">
                                    {project.tags.map((tag) => (
                                        <span
                                            key={tag}
                                            className="px-4 py-2 bg-gray-50 text-gray-700 text-sm rounded-full"
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        )}
                    </article>
                </div>
            </div>
        </div>
    );
}
