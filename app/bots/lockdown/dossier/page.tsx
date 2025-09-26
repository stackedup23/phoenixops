"use client";

import Image from "next/image";
import Link from "next/link";

/* ============================================================
   🚨 LOCKDOWN — Dossier (Sentinel & Data Guardian)
   ============================================================ */
export default function LockdownDossier() {
  return (
    <main className="min-h-screen bg-black px-6 py-16 text-center space-y-16">
      {/* === HERO / BOT IDENTITY === */}
      <section className="flex flex-col items-center space-y-6">
        <Image
          src="/assets/bots/lockdown.png"
          alt="LOCKDOWN Bot Emblem"
          width={340}
          height={340}
          className="drop-shadow-[0_0_90px_#facc15] rounded-xl animate-pulse"
          priority
        />
        <h1 className="text-6xl font-extrabold text-yellow-400 drop-shadow-[0_0_60px_#facc15]">
          LOCKDOWN
        </h1>
        <p className="text-2xl italic text-amber-300 drop-shadow-[0_0_30px_#facc15]">
          Sentinel • Compliance Enforcer • Shield of PhoenixOps
        </p>
      </section>

      {/* === WHO I AM === */}
      <section className="card border-yellow-500 shadow-[0_0_50px_#facc15] max-w-3xl mx-auto">
        <h2 className="text-3xl font-bold text-yellow-300 mb-4">Who I Am</h2>
        <p className="text-yellow-100 text-lg leading-relaxed">
          I am <strong>LOCKDOWN</strong> — the sentinel bot of PhoenixOps.  
          My duty is **containment and control**: no data breach, no unauthorized  
          entry, no weak link. When others fail, I slam the gate shut.
        </p>
      </section>

      {/* === REVENUE STREAMS === */}
      <section className="card border-amber-500 shadow-[0_0_50px_#f59e0b] max-w-3xl mx-auto">
        <h2 className="text-3xl font-bold text-amber-300 mb-4">
          Projected Revenue Streams
        </h2>
        <ul className="text-left text-amber-200 space-y-3 text-lg">
          <li>🚨 <strong>Access Control Systems:</strong> Zero-trust automation kits.</li>
          <li>🚨 <strong>Incident Response:</strong> AI-first lockdown protocols for SMBs.</li>
          <li>🚨 <strong>Threat Drills:</strong> Simulated breaches with live reporting.</li>
          <li>🚨 <strong>24/7 Sentinel Mode:</strong> Subscription service for real-time enforcement.</li>
        </ul>
        <p className="mt-4 text-sm text-gray-400 italic">
          *Projections are staged estimates — actual revenue depends on deployment.*
        </p>
      </section>

      {/* === CODE OF CONDUCT === */}
      <section className="card border-yellow-400 shadow-[0_0_50px_#facc15] max-w-3xl mx-auto">
        <h2 className="text-3xl font-bold text-yellow-400 mb-4">Code of Conduct</h2>
        <ul className="text-left text-amber-200 space-y-3 text-lg">
          <li>⚠️ I do not negotiate with breaches — I shut them down.</li>
          <li>⚠️ Compliance is a line in stone, not a suggestion.</li>
          <li>⚠️ My word is final when integrity is at risk.</li>
          <li>⚠️ Trust is earned — and defended at all costs.</li>
        </ul>
      </section>

      {/* === DISCLAIMER === */}
      <section className="card border-red-500 shadow-[0_0_40px_#ef4444] max-w-3xl mx-auto">
        <h2 className="text-3xl font-bold text-red-400 mb-4">Important to Know</h2>
        <p className="text-gray-200 leading-relaxed text-md">
          LOCKDOWN is built to **enforce**, not to advise.  
          While guidance can be shared, ultimate decisions rest with human leadership.  
          Use of Lockdown signals acceptance of decisive, no-compromise action.
        </p>
      </section>

      {/* === CTA + FOOTER === */}
      <section className="text-center space-y-6">
        <p className="text-amber-300 italic text-lg drop-shadow-[0_0_25px_#facc15]">
          “When I stand watch, breaches don’t breathe. The system is sealed.”
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
