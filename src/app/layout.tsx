import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Link from "next/link";

// импортируем шрифты Geist и Geist Mono
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// метаданные страницы, которые будут использоваться в теге <head> (например, для SEO)
export const metadata: Metadata = {
  title: "Next.js Book Store",
  description: "A simple book store application built with Next.js",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="h-full ">
        <header className="flex items-center justify-between px-4 py-2 bg-blue-950 ">
          <nav className="container mx-auto flex items-center justify-start space-x-7 border-t border-b border-blue-300 p-2">
            <img
              src="/logo.png"
              alt="logo"
              className="flex items-center h-15 pl-10"
            />

            <Link href="/" className=" text-blue-300 text-xl font-bold">
              Home
            </Link>
            <Link href="/books" className=" text-blue-300 text-xl font-bold">
              Books
            </Link>
          </nav>
        </header>

        {children}
      </body>
    </html>
  );
}
