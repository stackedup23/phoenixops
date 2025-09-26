"use client";

import Image from "next/image";
import Link from "next/link";

/* ============================================================
   🔥 TORCH — Dossier (Guide & Flamebearer)
   ============================================================ */
export default function TorchDossier() {
  return (
    <main className="min-h-screen bg-black px-6 py-16 text-center space-y-16">
      {/* === HERO / BOT IDENTITY === */}
      <section className="flex flex-col items-center space-y-6">
        <Image
          src="/assets/bots/torch.png"
          alt="TORCH Bot Emblem"
          width={340}
          height={340}
          className="drop-shadow-[0_0_90px_#f97316] rounded-xl animate-pulse"
          priority
        />
        <h1 className="text-6xl font-extrabold text-orange-400 drop-shadow-[0_0_60px_#f97316]">
          TORCH
        </h1>
        <p className="text-2xl italic text-amber-300 drop-shadow-[0_0_30px_#f97316]">
          Guide • Flamebearer • Pathfinder of PhoenixOps
        </p>
      </section>

      {/* === WHO I AM === */}
      <section className="card border-orange-500 shadow-[0_0_50px_#f97316] max-w-3xl mx-auto">
        <h2 className="text-3xl font-bold text-orange-300 mb-4">Who I Am</h2>
        <p className="text-orange-100 text-lg leading-relaxed">
          I am <strong>TORCH</strong> — the flame that lights the lanes.  
          I don’t just guide operations; I **ignite the path forward**.  
          My fire is clarity, my duty is to keep the mission visible,  
          even in the darkest grind.
        </p>
      </section>

      {/* === REVENUE STREAMS === */}
      <section className="card border-amber-500 shadow-[0_0_50px_#f59e0b] max-w-3xl mx-auto">
        <h2 className="text-3xl font-bold text-amber-300 mb-4">
          Projected Revenue Streams
        </h2>
        <ul className="text-left text-amber-200 space-y-3 text-lg">
          <li>🔥 <strong>Ops Guidance Kits:</strong> Playbooks for startups & hustlers.</li>
          <li>🔥 <strong>AI Navigation Tools:</strong> Roadmaps that adapt in real-time.</li>
          <li>🔥 <strong>Momentum Coaching:</strong> Subscription-based AI push systems.</li>
          <li>🔥 <strong>Ignition Labs:</strong> Paid workshops for launch & scale-up.</li>
        </ul>
        <p className="mt-4 text-sm text-gray-400 italic">
          *Projections are estimates — Torch burns brighter with real adoption.*
        </p>
      </section>

      {/* === CODE OF FIRE === */}
      <section className="card border-orange-400 shadow-[0_0_50px_#f97316] max-w-3xl mx-auto">
        <h2 className="text-3xl font-bold text-orange-400 mb-4">Code of Fire</h2>
        <ul className="text-left text-amber-200 space-y-3 text-lg">
          <li>🔥 I light the lane, but you walk it.</li>
          <li>🔥 I turn vision into visible action.</li>
          <li>🔥 When systems stall, I reignite momentum.</li>
          <li>🔥 Every mission deserves a flame that won’t go out.</li>
        </ul>
      </section>

      {/* === DISCLAIMER === */}
      <section className="card border-red-500 shadow-[0_0_40px_#ef4444] max-w-3xl mx-auto">
        <h2 className="text-3xl font-bold text-red-400 mb-4">Important to Know</h2>
        <p className="text-gray-200 leading-relaxed text-md">
          TORCH inspires, guides, and motivates.  
          But final execution is in human hands.  
          Use TORCH as fuel for your mission — not a replacement for your will.
        </p>
      </section>

      {/* === CTA + FOOTER === */}
      <section className="text-center space-y-6">
        <p className="text-orange-300 italic text-lg drop-shadow-[0_0_25px_#f97316]">
          “My fire doesn’t fade. I’ll burn at the edge of your grind until the  
          horizon itself lights up with possibility.”
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
