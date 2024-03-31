import type { Metadata } from "next";
import { Truculenta } from "next/font/google";
import "./globals.css";

const font = Truculenta({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Temitope Adebayo",
  description: "personal and sub-liminal website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={font.className}>{children}</body>
    </html>
  );
}
