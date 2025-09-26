"use client";

import Link from "next/link";
import { useState } from "react";

/* ============================================================
   === PhoenixOps Navbar (Unified Links, No Dropdown) ===
   ============================================================ */
export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-black border-b border-orange-500 shadow-[0_0_25px_#f97316] relative z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* === Brand / Home === */}
          <div className="flex-shrink-0 flex items-center">
            <Link href="/" aria-label="Back to Home">
              <span className="text-3xl sm:text-4xl font-extrabold text-amber-400 drop-shadow-[0_0_25px_#f97316] animate-[pulse_4s_ease-in-out_infinite]">
                PhoenixOps
              </span>
            </Link>
          </div>

          {/* === Mobile Toggle === */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle navigation"
              aria-expanded={isOpen}
              className="focus:outline-none text-amber-400 drop-shadow-[0_0_15px_#f97316]"
            >
              ☰
            </button>
          </div>

          {/* === Desktop Links === */}
          <div className="hidden md:flex items-center space-x-10 text-lg font-semibold">
            <Link href="/about" className="text-teal-400 hover:text-amber-400 transition drop-shadow-[0_0_12px_#14f1d9]">
              About
            </Link>
            <Link href="/partners" className="text-cyan-400 hover:text-amber-400 transition drop-shadow-[0_0_12px_#22d3ee]">
              Partners
            </Link>
            <Link href="/turning-point" className="text-purple-400 hover:text-amber-400 transition drop-shadow-[0_0_12px_#a020f0]">
              Turning Point
            </Link>
            <Link href="/contact" className="text-yellow-400 hover:text-amber-400 transition drop-shadow-[0_0_12px_#facc15]">
              Contact
            </Link>
            <Link href="/certifications" className="text-lime-400 hover:text-amber-400 transition drop-shadow-[0_0_12px_#22c55e]">
              Certifications
            </Link>
            <Link href="/policies" className="text-pink-400 hover:text-amber-400 transition drop-shadow-[0_0_12px_#ec4899]">
              Policies
            </Link>
            <Link href="/readme" className="text-blue-400 hover:text-amber-400 transition drop-shadow-[0_0_12px_#3b82f6]">
              ReadMe
            </Link>
          </div>
        </div>

        {/* === Mobile Menu === */}
        {isOpen && (
          <div className="md:hidden flex flex-col space-y-4 bg-black/95 p-4 border-t border-amber-500 shadow-[0_0_20px_#f97316]">
            <Link href="/about" className="text-teal-400">About</Link>
            <Link href="/partners" className="text-cyan-400">Partners</Link>
            <Link href="/turning-point" className="text-purple-400">Turning Point</Link>
            <Link href="/contact" className="text-yellow-400">Contact</Link>
            <Link href="/certifications" className="text-lime-400">Certifications</Link>
            <Link href="/policies" className="text-pink-400">Policies</Link>
            <Link href="/readme" className="text-blue-400">ReadMe</Link>
          </div>
        )}
      </div>
    </nav>
  );
}
