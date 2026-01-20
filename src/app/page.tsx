import Image from "next/image";
import Link from "next/link";

export default function Home() {
    return (
        <main className="w-full overflow-hidden">
            <div className="flex flex-col gap-1 h-dvh text-lg p-8 relative">
                <Image
                    src="/images/logo.svg"
                    alt="temitope adebayo"
                    className="m-8 absolute bottom-0 right-0"
                    width={110}
                    height={42}
                />
                {/* <Link href="">shop [in development]</Link> */}
                <Link href="/engr">software engr portfolio</Link>
                <Link href="/">industrial design portfolio</Link>
                <Link href="/archive">graphic design [archive]</Link>
                {/* <Link href="">beats [::link changes quaterly::]</Link> */}
                {/* <Link href="">videography [pending]</Link> */}
                <Link href="mailto:tsad3bayo@outlook.com">contact</Link>
            </div>
        </main>
    );
}
