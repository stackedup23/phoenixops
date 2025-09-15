import "./globals.css";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Stackin Technologies | PhoenixOps",
  description: "Automation, Hustle, and Light in the Dark",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-black min-h-screen text-center">
        {/* Logo Centerpiece */}
        <div className="flex flex-col items-center justify-center py-8">
          <img
            src="/assets/logos/logo.png"
            alt="Stackin Technologies Logo"
            className="w-48 h-48 drop-shadow-[0_0_25px_rgba(255,215,0,0.8)] animate-pulse"
          />
          <h1 className="mt-4 text-3xl font-extrabold text-yellow-400 drop-shadow-[0_0_10px_rgb(0,255,255)]">
            Stackin Technologies
          </h1>
          <p className="text-md text-gray-300 italic">
            “Bringers of Light · Builders of Hustle”
          </p>
        </div>

        {/* Navigation */}
        <header className="w-full flex justify-center py-4">
          <nav className="space-x-8">
            <Link className="nav-link text-yellow-300 hover:text-teal-400 transition" href="/">Home</Link>
            <Link className="nav-link text-yellow-300 hover:text-teal-400 transition" href="/about">About</Link>
            <Link className="nav-link text-yellow-300 hover:text-teal-400 transition" href="/contact">Contact</Link>
            <Link className="nav-link text-yellow-300 hover:text-teal-400 transition" href="/turning-point">Turning Point</Link>
            <Link className="nav-link text-yellow-300 hover:text-teal-400 transition" href="/certifications">Certifications</Link>
          </nav>
        </header>

        {/* Main Content */}
        <main className="flex flex-col items-center justify-center w-full px-6">
          {children}
        </main>

        {/* Footer */}
        <footer className="mt-12 py-6 text-gray-400 text-sm">
          © {new Date().getFullYear()} Stackin Technologies AO LLC · All Rights Reserved
        </footer>
      </body>
    </html>
  );
}
