"use client";

import Link from "next/link";
import { useState } from "react";

/* ============================================================
   === PhoenixOps Navbar (Final Sync) ===
   ============================================================ */
export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-black border-b border-orange-500 shadow-[0_0_25px_#f97316]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">

          {/* === Brand / Home === */}
          <div className="flex-shrink-0 flex items-center">
            <Link href="/">
              <span className="text-3xl font-extrabold text-amber-400 drop-shadow-[0_0_20px_#fbbf24] animate-pulse">
                PhoenixOps
              </span>
            </Link>
          </div>

          {/* === Mobile Toggle === */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="focus:outline-none text-lime-400 drop-shadow-[0_0_12px_#22c55e]"
            >
              ☰
            </button>
          </div>

          {/* === Desktop Links === */}
          <div className="hidden md:flex space-x-6">
            <Link href="/about" className="text-lime-400 drop-shadow-[0_0_12px_#22c55e] hover:scale-105 transition">About</Link>
            <Link href="/contact" className="text-cyan-400 drop-shadow-[0_0_12px_#06b6d4] hover:scale-105 transition">Contact</Link>
            <Link href="/turning-point" className="text-pink-400 drop-shadow-[0_0_12px_#ec4899] hover:scale-105 transition">Turning Point</Link>
            <Link href="/certifications" className="text-blue-400 drop-shadow-[0_0_12px_#3b82f6] hover:scale-105 transition">Certifications</Link>
            <Link href="/revenue" className="text-orange-400 drop-shadow-[0_0_12px_#fb923c] hover:scale-105 transition">Revenue</Link>
            <Link href="/policies" className="text-red-400 drop-shadow-[0_0_12px_#ef4444] hover:scale-105 transition">Policies</Link>
            <Link href="/readme" className="text-white drop-shadow-[0_0_12px_#ffffff] hover:scale-105 transition">ReadMe</Link>
            <Link href="/store" className="text-green-400 drop-shadow-[0_0_12px_#22c55e] hover:scale-105 transition">Store</Link>
            <Link href="/bots" className="text-purple-400 drop-shadow-[0_0_12px_#a855f7] hover:scale-105 transition">Bots</Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
