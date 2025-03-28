import Link from "next/link";
import archive from "@/data/archive.json"
import Image from "next/image";

const Archive = () => {
  return (
    <div className="mx-auto max-w-[1440px] py-24 px-4 md:p-24 m-4 relative">
      <div className="fixed top-0 right-0 p-4 flex flex-col text-right z-50">
        <Link href="https://instagram.com/byoladimeji" className="uppercase font-bold">Instagram</Link>
        <Link href="https://instagram.com/byoladimeji" className="uppercase font-bold"><sup>(tap in)</sup> commisions</Link>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {archive.map((arc, index) => (
          <div key={index}>
            <Image
              src={arc.prev}
              alt={arc.name}
              priority
              width={1080}
              height={1350}
            />
          </div>
        ))}
      </div>
    </div>
  )
}

export default Archive;