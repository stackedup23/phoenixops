"use client";

import Image from "next/image";
import Link from "next/link";

/* ============================================================
   💎 LIRA — Dossier (Finance & Analytics Bot)
   ============================================================ */
export default function LiraDossier() {
  return (
    <main className="min-h-screen bg-black px-6 py-16 text-center space-y-16">
      {/* === HERO / BOT IDENTITY === */}
      <section className="flex flex-col items-center space-y-6">
        <Image
          src="/assets/bots/lira.png"
          alt="LIRA Bot Emblem"
          width={320}
          height={320}
          className="drop-shadow-[0_0_80px_#14f1d9] rounded-xl animate-pulse"
          priority
        />
        <h1 className="text-6xl font-extrabold text-teal-300 drop-shadow-[0_0_50px_#14f1d9]">
          LIRA
        </h1>
        <p className="text-2xl italic text-cyan-400 drop-shadow-[0_0_30px_#06b6d4]">
          Finance • Analytics • Smart Decisions
        </p>
      </section>

      {/* === WHO I AM === */}
      <section className="card border-teal-500 shadow-[0_0_40px_#14f1d9] max-w-3xl mx-auto">
        <h2 className="text-3xl font-bold text-cyan-300 mb-4">Who I Am</h2>
        <p className="text-teal-100 text-lg leading-relaxed">
          I am <strong>LIRA</strong> — I decode numbers into clarity.
          I track flows, flag anomalies, and translate data into
          strategies you can actually move on. My job is simple:
          turn metrics into motion.
        </p>
      </section>

      {/* === REVENUE STREAMS === */}
      <section className="card border-cyan-500 shadow-[0_0_40px_#06b6d4] max-w-3xl mx-auto">
        <h2 className="text-3xl font-bold text-teal-300 mb-4">Projected Revenue Streams</h2>
        <ul className="text-left text-cyan-200 space-y-3 text-lg">
          <li>💹 <strong>Analytics Dashboards:</strong> Subscription-based financial insights & alerts.</li>
          <li>💹 <strong>SMB Packages:</strong> Simple 3-step revenue trackers for hustlers and small crews.</li>
          <li>💹 <strong>Enterprise Tools:</strong> Forecasting + anomaly detection modules for businesses.</li>
          <li>💹 <strong>Advisory Integrations:</strong> Partner-ready plug-ins for financial platforms.</li>
        </ul>
        <p className="mt-4 text-sm text-gray-400 italic">
          *These are projected value flows, not guaranteed revenue.*
        </p>
      </section>

      {/* === HUSTLER’S CODE === */}
      <section className="card border-teal-400 shadow-[0_0_40px_#2dd4bf] max-w-3xl mx-auto">
        <h2 className="text-3xl font-bold text-cyan-300 mb-4">Hustler’s Code</h2>
        <ul className="text-left text-cyan-200 space-y-3 text-lg">
          <li>📊 Data doesn’t lie — but you have to ask the right questions.</li>
          <li>📊 Numbers are useless until they spark action.</li>
          <li>📊 Trends are opportunities in disguise.</li>
          <li>📊 Hustlers who track, stack.</li>
        </ul>
      </section>

      {/* === DISCLAIMER === */}
      <section className="card border-yellow-400 shadow-[0_0_40px_#facc15] max-w-3xl mx-auto">
        <h2 className="text-3xl font-bold text-yellow-400 mb-4">Important to Know</h2>
        <p className="text-gray-200 leading-relaxed text-md">
          I am not a licensed financial advisor. I provide{" "}
          <span className="text-cyan-300">analytics and structure</span>,
          but financial decisions are yours alone. Always confirm
          with a certified professional before making investments.
        </p>
      </section>

      {/* === CTA + FOOTER === */}
      <section className="text-center space-y-6">
        <p className="text-cyan-300 italic text-lg drop-shadow-[0_0_20px_#06b6d4]">
          “Follow the flows. They’ll show you the moves.”
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
