import "./globals.css";
import type { Metadata } from "next";
import Navbar from "@/components/Navbar";

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
      <head />
      <body className="bg-black min-h-screen text-center">
        {/* Logo Banner */}
        <div className="flex flex-col items-center justify-center py-6">
          <img
            src="/assets/logos/logo.png"
            alt="PhoenixOps Logo"
            className="w-20 h-20 drop-shadow-[0_0_25px_#a21caf] animate-pulse"
          />
          <h1 className="mt-4 text-3xl font-extrabold text-purple-400 drop-shadow-[0_0_20px_#a21caf]">
            PhoenixOps
          </h1>
          <p className="text-md text-gray-300 italic">
            Automation • Innovation • Hustle
          </p>
        </div>

        {/* Navigation */}
        <Navbar />

        {/* Main Content */}
        <main className="flex flex-col items-center justify-center w-full px-6">
          {children}
        </main>

        {/* Footer */}
        <footer className="mt-12 py-6 text-gray-400 text-sm">
          © {new Date().getFullYear()} Stackin Technologies AO LLC • EIN Verified •
          D-U-N-S Registered • Minority/Female Co-Owner Advantage
        </footer>
      </body>
    </html>
  );
}
