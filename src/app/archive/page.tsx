import Link from "next/link";
import archive from "@/data/archive.json"

const Archive = () => {
  return (
    <div className="mx-auto max-w-[1440px] p-8 border-2 border-red-500 relative">
      <div className="fixed top-0 right-0 p-4 flex flex-col text-right">
        <Link href="https://instagram.com/byoladimeji" className="uppercase font-bold">Instagram</Link>
        <Link href="https://instagram.com/byoladimeji" className="uppercase font-bold"><sup>(tap in)</sup> commisions</Link>
      </div>
      <div className="grid grid-cols-2 gap-4">
        {archive.map((arc, index) => (
          <div key={index}>
            <div className="bg-indigo-800 w-full h-[775px]" />
          </div>
        ))}
      </div>
    </div>
  )
}

export default Archive;