import Image from "next/image";
import projects from  "@/data/projects.json"
import Link from "next/link";

const Dev = () => {
  return (
    <div className="flex flex-col mx-auto gap-6 max-w-4xl text-lg my-16 p-4 relative">
      <div className="fixed top-0 right-0 p-4 flex flex-col text-right">
        <Link href="https://github.com/tasvln" className="uppercase text-sm font-bold">GitHub</Link>
        <Link href="https://nrma.company" className="uppercase text-sm font-bold">The Nrma Company</Link>
      </div>
      <div className="flex flex-col gap-2 text-sm">
        <p>Hi,</p>
        <p>I&apos;m <b className="text-xl">Temitope Adebayo</b>, a <b>Curious Programmer</b>.</p>
        <p>
          To hone my skills in game development & integration engineering, over the years i’ve learnt and understood, <b>Object Oriented Programming</b>, <b>Graphics Rendering</b>, <b>Audio Processing::Production (FL Studio)</b>,  
          <b>3D Modeling (Blender)</b>, <b>GPU::CPU Core Processes</b>, <b>Game Physics</b>, <b>User Experience::Graphic Design (Photoshop, Illustrator, Figma)</b>, and other concepts... 
        </p>
        <p>
          With my proficiency in programming languages such as, <b>Python</b>, <b>C++</b>, <b>Go</b> and <b>Bash Scripting</b>, I believe I would be a very valuable asset to any <b>Development Team</b>.
        </p>
      </div>
      <div>
        <p className="font-bold uppercase text-2xl mb-2">Projects</p>
        <div className="grid sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
          {projects.map((p, index) => (
            <div className="flex flex-col gap-2" key={index}>
              {/* <div className="bg-gray-500 w-full h-[300px]" /> */}
              {p.prev && (
                <Image 
                  src={p.prev} 
                  alt={p.name} 
                  style={{objectFit: "contain"}}
                  priority={true}
                  quality={80}
                  width={600}
                  height={1000}
                />
              )}
              <div className="">
                <p className="font-bold">{p.name} <sup>[{p.stack}] <Link className="text-blue-500 italic" href={p.link}>preview</Link></sup></p>
                <p className="text-sm">{p.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div>
        <p className="font-bold uppercase text-2xl mb-2">Skills</p>
        <p className="capitalize font-bold text-sm">C++, Python, Go, SDL, GLFW, OpenGL, WebGL, C# (Unity), scripting, game design, game mechanics::physics, rendering pipelines, Javascript, Typescript, React, NextJS, NodeJS, NestJS, and Fastify</p>
      </div>
      <div>
        <p className="font-bold uppercase text-2xl mb-2">Contact</p>
        <a href="mailto:tsad3bayo@outlook.com" className="lowercase w-fit link text-sm">like what you see? email me a proposition :)</a>
      </div>
    </div>
  );
}

export default Dev;