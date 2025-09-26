"use client";

import Image from "next/image";
import Link from "next/link";

/* ============================================================
   === PhoenixOps Homepage — Live Fire Build ===
   ============================================================ */
export default function HomePage() {
  return (
    <main className="min-h-screen relative bg-black flex flex-col items-center justify-center px-6 py-20 space-y-14 text-center overflow-hidden">
      
      {/* === Starfield Background === */}
      <div className="absolute inset-0 -z-10 animate-starfield"></div>

      {/* === Hero Title === */}
      <h1 className="text-6xl sm:text-7xl md:text-8xl font-extrabold leading-tight drop-shadow-[0_0_40px_#a020f0] text-purple-400 relative">
        <span className="relative z-10">WELCOME TO THE GRIND</span>
        <span className="absolute inset-0 blur-3xl text-yellow-400 opacity-60 select-none">
          WELCOME TO THE GRIND
        </span>
      </h1>

      {/* === Bird Emblem === */}
      <Image
        src="/assets/logos/bird-logo3.png"
        alt="PhoenixOps Bird Logo Emblem"
        width={420}
        height={420}
        className="drop-shadow-[0_0_80px_#facc15] [filter:drop-shadow(0_0_120px_#a020f0)] animate-hover"
        priority
      />

      {/* === Tagline HUD === */}
      <p className="tagline max-w-2xl mx-auto animate-fadein-slow leading-relaxed text-lg text-gray-300">
        PhoenixOps isn’t just a site — it’s a{" "}
        <span className="text-purple-400 font-semibold">living AI system</span>.
        <br />
        <span className="text-lime-400 font-mono">
          EIN Verified • D-U-N-S Registered • Minority-Owned
        </span>
      </p>

      {/* === CTA Button === */}
      <Link
        href="/bots"
        className="px-8 py-4 rounded-lg font-bold text-black bg-gradient-to-r from-purple-500 via-cyan-400 to-purple-500 shadow-[0_0_40px_#a020f0] hover:scale-105 transition-all animate-pulse-slow"
      >
        ⚡ Meet the Bots
      </Link>
    </main>
  );
}
