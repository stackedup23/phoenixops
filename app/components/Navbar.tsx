"use client";

import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="bg-black border-b border-gray-800 shadow-[0_0_25px_#14f1d9]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* === Logo / Site Name === */}
          <div className="flex-shrink-0">
            <Link
              href="/"
              className="text-2xl font-extrabold text-yellow-400 drop-shadow-[0_0_25px_#facc15]"
            >
              PhoenixOps
            </Link>
          </div>

          {/* === Navigation Links === */}
          <div className="flex space-x-6">
            <Link href="/" className="hover:text-yellow-400 text-teal-400 transition">
              Home
            </Link>
            <Link href="/about" className="hover:text-yellow-400 text-teal-400 transition">
              About
            </Link>
            <Link href="/contact" className="hover:text-yellow-400 text-teal-400 transition">
              Contact
            </Link>
            <Link href="/turning-point" className="hover:text-yellow-400 text-teal-400 transition">
              Turning Point
            </Link>
            <Link href="/certifications" className="hover:text-yellow-400 text-teal-400 transition">
              Certifications
            </Link>
            <Link href="/revenue" className="hover:text-yellow-400 text-teal-400 transition">
              Revenue
            </Link>
            <Link href="/policies" className="hover:text-yellow-400 text-teal-400 transition">
              Policies
            </Link>
            <Link href="/readme" className="hover:text-yellow-400 text-teal-400 transition">
              ReadMe
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
