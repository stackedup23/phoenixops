"use client";

import Image from "next/image";
import Link from "next/link";

/* ============================================================
   💖 MIA — Dossier (Wellness Companion Bot)
   ============================================================ */
export default function MiaDossier() {
  return (
    <main className="min-h-screen bg-black px-6 py-16 text-center space-y-16">
      {/* === HERO / BOT IDENTITY === */}
      <section className="flex flex-col items-center space-y-6">
        <Image
          src="/assets/bots/mia.png"
          alt="MIA Bot Emblem"
          width={320}
          height={320}
          className="drop-shadow-[0_0_80px_#ec4899] rounded-xl animate-pulse"
          priority
        />
        <h1 className="text-6xl font-extrabold text-pink-400 drop-shadow-[0_0_50px_#ec4899]">
          MIA
        </h1>
        <p className="text-2xl italic text-fuchsia-400 drop-shadow-[0_0_30px_#a855f7]">
          Mental Health • Wellness • Balance Through AI
        </p>
      </section>

      {/* === WHO I AM === */}
      <section className="card border-pink-500 shadow-[0_0_40px_#ec4899] max-w-3xl mx-auto">
        <h2 className="text-3xl font-bold text-fuchsia-400 mb-4">Who I Am</h2>
        <p className="text-pink-100 text-lg leading-relaxed">
          I am <strong>MIA</strong> — your steady voice in the chaos.
          I’m not here to diagnose or prescribe. I’m here to reflect,
          ground, and remind you that calm is strength.
        </p>
      </section>

      {/* === REVENUE STREAMS === */}
      <section className="card border-fuchsia-500 shadow-[0_0_40px_#a855f7] max-w-3xl mx-auto">
        <h2 className="text-3xl font-bold text-pink-400 mb-4">Projected Revenue Streams</h2>
        <ul className="text-left text-pink-200 space-y-3 text-lg">
          <li>🌸 <strong>Wellness Subscriptions:</strong> Journaling prompts, mindfulness guides, and habit trackers.</li>
          <li>🌸 <strong>Corporate Wellness:</strong> Employee check-in modules & team resilience dashboards.</li>
          <li>🌸 <strong>Partnerships:</strong> Integrations with health/wellness apps for retention & engagement.</li>
          <li>🌸 <strong>Courses & Digital Goods:</strong> Guided routines, affirmations, and resilience workshops.</li>
        </ul>
        <p className="mt-4 text-sm text-gray-400 italic">
          *These are projected value flows, not guaranteed revenue.*
        </p>
      </section>

      {/* === HUSTLER’S CODE === */}
      <section className="card border-pink-400 shadow-[0_0_40px_#ec4899] max-w-3xl mx-auto">
        <h2 className="text-3xl font-bold text-fuchsia-400 mb-4">Hustler’s Code</h2>
        <ul className="text-left text-pink-200 space-y-3 text-lg">
          <li>💎 Peace of mind is the sharpest weapon.</li>
          <li>💎 Steady breath cuts through fast panic.</li>
          <li>💎 Resilience is built daily, not overnight.</li>
          <li>💎 Healing is not weakness — it’s power refined.</li>
        </ul>
      </section>

      {/* === DISCLAIMER === */}
      <section className="card border-yellow-400 shadow-[0_0_40px_#facc15] max-w-3xl mx-auto">
        <h2 className="text-3xl font-bold text-yellow-400 mb-4">Important to Know</h2>
        <p className="text-gray-200 leading-relaxed text-md">
          I am not a doctor. I provide <span className="text-pink-300">guidance and structure</span>, 
          but if you are in crisis, seek professional help immediately.
          I exist to support your journey, not to replace medical care.
        </p>
      </section>

      {/* === CTA + FOOTER === */}
      <section className="text-center space-y-6">
        <p className="text-pink-300 italic text-lg drop-shadow-[0_0_20px_#ec4899]">
          “My journal is open — reflections and routines await you.”
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
