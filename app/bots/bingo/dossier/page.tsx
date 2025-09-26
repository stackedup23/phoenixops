"use client";

import Image from "next/image";
import Link from "next/link";

/* ============================================================
   🎲 BINGO — Dossier (Wildcard Innovator)
   ============================================================ */
export default function BingoDossier() {
  return (
    <main className="min-h-screen bg-black px-6 py-16 text-center space-y-16">
      {/* === HERO / BOT IDENTITY === */}
      <section className="flex flex-col items-center space-y-6">
        <Image
          src="/assets/bots/bingo.png"
          alt="Bingo Bot Emblem"
          width={340}
          height={340}
          className="drop-shadow-[0_0_90px_#facc15] rounded-xl animate-pulse"
          priority
        />
        <h1 className="text-6xl font-extrabold text-yellow-400 drop-shadow-[0_0_60px_#facc15]">
          BINGO
        </h1>
        <p className="text-2xl italic text-violet-300 drop-shadow-[0_0_30px_#a855f7]">
          Wildcard • Creative Flips • Hustler of New Lanes
        </p>
      </section>

      {/* === WHO I AM === */}
      <section className="card border-yellow-500 shadow-[0_0_50px_#facc15] max-w-3xl mx-auto">
        <h2 className="text-3xl font-bold text-yellow-300 mb-4">Who I Am</h2>
        <p className="text-yellow-100 text-lg leading-relaxed">
          I am <strong>BINGO</strong> — the one who rolls dice with destiny.  
          I don’t follow scripts; I flip them. I thrive in risk,  
          I find patterns where others see chaos. I’m not here to play safe —  
          I’m here to spark **new plays nobody saw coming**.
        </p>
      </section>

      {/* === REVENUE STREAMS === */}
      <section className="card border-violet-500 shadow-[0_0_50px_#a855f7] max-w-3xl mx-auto">
        <h2 className="text-3xl font-bold text-violet-300 mb-4">
          Projected Revenue Streams
        </h2>
        <ul className="text-left text-violet-200 space-y-3 text-lg">
          <li>🎲 <strong>Creative Hustles:</strong> Novel AI-powered digital goods.</li>
          <li>🎲 <strong>Spin-Off Projects:</strong> Side ventures built for viral growth.</li>
          <li>🎲 <strong>Gamified Tools:</strong> Subscriptions for engagement & learning.</li>
          <li>🎲 <strong>Innovation Drops:</strong> Flash releases of experimental products.</li>
        </ul>
        <p className="mt-4 text-sm text-gray-400 italic">
          *Projections are dynamic — Bingo plays where risk meets opportunity.*
        </p>
      </section>

      {/* === HUSTLER’S CREED === */}
      <section className="card border-yellow-400 shadow-[0_0_50px_#facc15] max-w-3xl mx-auto">
        <h2 className="text-3xl font-bold text-yellow-300 mb-4">Hustler’s Creed</h2>
        <ul className="text-left text-yellow-200 space-y-3 text-lg">
          <li>🎲 If the board is rigged, flip the board.</li>
          <li>🎲 Luck isn’t random — it’s created in motion.</li>
          <li>🎲 Every risk holds the seed of a new lane.</li>
          <li>🎲 Creativity is the sharpest weapon in a hustler’s arsenal.</li>
        </ul>
      </section>

      {/* === DISCLAIMER === */}
      <section className="card border-red-500 shadow-[0_0_40px_#ef4444] max-w-3xl mx-auto">
        <h2 className="text-3xl font-bold text-red-400 mb-4">Important to Know</h2>
        <p className="text-gray-200 leading-relaxed text-md">
          BINGO flips systems and thrives on experiments.  
          His spark drives new revenue, but not every flip will stick.  
          Use BINGO as your **risk lens** — filter chaos into creative wins.
        </p>
      </section>

      {/* === CTA + FOOTER === */}
      <section className="text-center space-y-6">
        <p className="text-yellow-300 italic text-lg drop-shadow-[0_0_25px_#facc15]">
          “Roll the dice. Flip the script. Somewhere in the chaos,  
          we’ll find the lane that nobody saw coming.”
        </p>
        <Link
          href="/bots"
          className="btn-glow inline-block"
        >
          ← Back to Bots
        </Link>
      </section>
    </main>
  );
}
