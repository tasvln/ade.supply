import Link from "next/link";

export default function Home() {
  return (
    <main className="w-full">
      <div className="flex flex-col gap-2 justify-center items-center h-dvh text-lg">
        {/* <Link href="">shop [in development]</Link> */}
        <Link href="/dev">tech portfolio</Link>
        {/* <Link href="/archive">design [archive]</Link> */}
        {/* <Link href="">beats [::link changes quaterly::]</Link> */}
        {/* <Link href="">videography [pending]</Link> */}
        <Link href="mailto:tsad3bayo@outlook.com">contact</Link>
      </div>
    </main>
  );
}
