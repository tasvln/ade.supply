import { getAllProjects } from "@/lib/projects";
import Link from "next/link";
import Image from "next/image";

const DevPage = () => {
    const projects = getAllProjects();

    return (
        <div className="w-full h-dvh overflow-hidden">
            <div className="h-full w-full p-8 flex flex-col gap-6 overflow-y-auto pb-40">
                <Link href="/" className="flex flex-row items-center gap-2">
                    <p className="tracking-tighter text-sm">← home page</p>
                </Link>
                <div className="flex flex-col gap-24">
                    <div className="flex flex-col">
                        <p className="font-bold text-3xl">Software Engineer</p>
                        <p className="font-light text-xl">
                            Fullstack & Graphics Programming
                        </p>
                        <p className="font-light text-sm">
                            a short description
                        </p>
                    </div>
                    <div className="flex flex-col gap-4">
                        <div className="flex flex-col">
                            <p className="font-bold text-3xl">Projects</p>
                            {/* <p className="font-light text-xl">Fullstack & Graphics Programming</p> */}
                        </div>
                        {/* Project Template */}
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-4">
                            {projects.map((project, index) => (
                                <Link
                                    key={project.slug}
                                    href={`/projects/${project.slug}`}
                                    className="w-full flex flex-col"
                                    style={{ width: "100%" }}
                                >
                                    <div
                                        className="flex flex-col gap-4 relative w-full"
                                        key={index}
                                    >
                                        {/* <Image 
                                        className="w-full bg-gray-200 h-[380px] rounded-xl"
                                    /> */}
                                        <div className="w-full aspect-[2/2] bg-gray-100 rounded-2xl overflow-hidden relative">
                                            {project.coverImage ? (
                                                <Image
                                                    src={project.coverImage}
                                                    alt={project.title}
                                                    fill
                                                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                                                />
                                            ) : (
                                                <div className="w-full h-full flex items-center justify-center text-gray-400">
                                                    Preview
                                                </div>
                                            )}

                                            {/* Video indicator if project has video */}
                                            {project.hasVideo && (
                                                <div className="absolute top-4 right-4 w-10 h-10 bg-black/40 backdrop-blur-sm rounded-full flex items-center justify-center">
                                                    <svg
                                                        className="w-4 h-4 text-white ml-0.5"
                                                        fill="currentColor"
                                                        viewBox="0 0 16 16"
                                                    >
                                                        <path d="M3 2v12l10-6z" />
                                                    </svg>
                                                </div>
                                            )}
                                        </div>
                                        <div className="flex flex-col">
                                            <div className="flex flex-wrap gap-1.5 mb-2">
                                                {project.tags
                                                    ?.slice(0, 3)
                                                    .map((tag) => (
                                                        <span
                                                            key={tag}
                                                            className="w-fit p-0.5 px-4 text-sm bg-pink-100 text-pink-600"
                                                        >
                                                            {tag}
                                                        </span>
                                                    ))}
                                            </div>
                                            <p className="font-bold text-5xl mb-2">
                                                {project.title}
                                            </p>
                                            <p>{project.description}</p>
                                        </div>
                                    </div>
                                </Link>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DevPage;
