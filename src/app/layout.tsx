import type { Metadata } from "next";
import { Kumbh_Sans } from "next/font/google";
// import { GoogleAnalytics } from '@next/third-parties/google'
import "./globals.css";

const font = Kumbh_Sans({ subsets: ["latin"] });

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
      <body
        className={`${font.className} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
