"use client";

import Image from "next/image";

/* ============================================================
   === PhoenixOps Homepage (B3 Logo Centered) ===
   ============================================================ */
export default function HomePage() {
  return (
    <main className="min-h-screen bg-black flex flex-col items-center justify-center px-6 py-16 space-y-12 text-center">
      
      {/* === Header Line === */}
      <h1 className="text-6xl md:text-7xl font-extrabold text-white-glow animate-pulse drop-shadow-[0_0_45px_#f97316]">
        WELCOME TO THE GRIND
      </h1>

      {/* === Emblem (Bird Logo 3) === */}
      <Image
        src="/assets/logos/bird-logo3.png"
        alt="PhoenixOps Emblem"
        width={400}
        height={400}
        className="drop-shadow-[0_0_60px_#facc15] animate-bounce-slow"
        priority
      />

      {/* === Tagline === */}
      <p className="tagline text-center max-w-2xl">
        PhoenixOps is a <span className="text-neon">living AI system</span>.  
        Explore above to learn more.
      </p>
    </main>
  );
}

