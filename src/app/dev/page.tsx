const Dev = () => {
  return (
    <div className="flex flex-col mx-auto gap-2 max-w-3xl text-lg my-16 p-4">
      <p>Hi,</p>
      <p>I&apos;m <b className="text-xl">Temitope Adebayo</b>, a Software Developer</p>
      <p>
        I have the professional experience of being a Frontend and Fullstack Engineer in multiple industries. I&apos;m currently interested in core engineering (integrating software with hardware)
      </p>
      <p>
        My personal projects can be found on my <i className="text-xl"><b><a className="link" href="https://github.com/tasvln">GitHub</a></b></i> and bigger personal projects through <i className="text-xl"><b><a href="https://github.com/nrmaco" className="link">Nrma</a></b></i>
      </p>
      <p className="uppercase mt-6">my top 5 projects</p>
      <ul className="capitalize list-disc">
        <li><a className="link" href="https://www.projectstadium.com">project stadium (esport tournament platform)</a></li>
        <li><a className="link" href="https://github.com/tasvln/assembly-station-app">assembly station (C++)</a></li>
        <li><a className="link" href="https://www.madeavln.com">madeavln (shopify)</a></li>
        <li><a className="link" href="https://www.culturemedia.com">culturemedia</a></li>
        <li><a className="link" href="https://www.ade.supply">ade.supply (portfolio)</a></li>
      </ul>
      <p className="uppercase mt-6">my front//back-end stack</p>
      <ul className="capitalize list-disc">
        <li>HTML, CSS</li>
        <li>SCSS, Tailwind</li>
        <li>Typescript, Javascript</li>
        <li>React, React Native, NextJS</li>
        <li>NodeJS, Express, Fastify, NestJS, tRPC, GraphQL</li>
        <li>MongoDB, Postgresql</li>
        <li>azure, AWS</li>
        <li>Framer Motion, WebGL</li>
      </ul>
      <p className="uppercase mt-6">oop </p>
      <ul className="capitalize list-disc">
        <li>Python, C++</li>
        <li>Webassembly</li>
      </ul>
      <p className="capitalize mt-6">i&apos;m open to learning new technologies//stacks :)</p>
      <p className="uppercase mt-6">can be reached at <b><a className="link" href="mailto:tasvln@outlook.com">tasvln@outlook.com</a></b></p>
    </div>
  );
}

export default Dev;
