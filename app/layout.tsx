import "./globals.css";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "PhoenixOps",
  description: "Stackin Technologies AO LLC - Automation & Hustle",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-black min-h-screen">
        {/* Header / Nav */}
        <header className="w-full flex justify-center py-6">
          <nav className="space-x-8">
            <Link className="nav-link" href="/">Home</Link>
            <Link className="nav-link" href="/about">About</Link>
            <Link className="nav-link" href="/contact">Contact</Link>
            <Link className="nav-link" href="/turning-point">Turning Point</Link>
            <Link className="nav-link" href="/certifications">Certifications</Link>
          </nav>
        </header>

        {/* Main Content */}
        <main className="flex flex-col items-center justify-center w-full px-6">
          {children}
        </main>
      </body>
    </html>
  );
}
