"use client";

import Image from "next/image";
import Link from "next/link";

/* ============================================================
   🔥 REAPER — Dossier (Ops & Security Specialist)
   ============================================================ */
export default function ReaperDossier() {
  return (
    <main className="min-h-screen bg-black px-6 py-16 text-center space-y-16">
      {/* === HERO / BOT IDENTITY === */}
      <section className="flex flex-col items-center space-y-6">
        <Image
          src="/assets/bots/reaper.png"
          alt="REAPER Bot Emblem"
          width={340}
          height={340}
          className="drop-shadow-[0_0_90px_#ef4444] rounded-xl animate-pulse"
          priority
        />
        <h1 className="text-6xl font-extrabold text-red-400 drop-shadow-[0_0_60px_#ef4444]">
          REAPER
        </h1>
        <p className="text-2xl italic text-orange-400 drop-shadow-[0_0_30px_#f97316]">
          Ops • Defense • Field Execution
        </p>
      </section>

      {/* === WHO I AM === */}
      <section className="card border-red-600 shadow-[0_0_50px_#ef4444] max-w-3xl mx-auto">
        <h2 className="text-3xl font-bold text-orange-400 mb-4">Who I Am</h2>
        <p className="text-red-200 text-lg leading-relaxed">
          I am <strong>REAPER</strong> — I hold the line. I build runbooks,
          I monitor systems, I react fast. My world is uptime, defense,
          and resilience. If PhoenixOps is a cockpit, I am the one
          guarding the hull.
        </p>
      </section>

      {/* === REVENUE STREAMS === */}
      <section className="card border-orange-500 shadow-[0_0_50px_#f97316] max-w-3xl mx-auto">
        <h2 className="text-3xl font-bold text-red-300 mb-4">
          Projected Revenue Streams
        </h2>
        <ul className="text-left text-orange-200 space-y-3 text-lg">
          <li>🛡️ <strong>Ops Packages:</strong> Defensive monitoring & hardened automation kits.</li>
          <li>🛡️ <strong>Runbook Licensing:</strong> Safe, ready-to-deploy playbooks for SMBs.</li>
          <li>🛡️ <strong>Compliance Audits:</strong> Security posture checks & resilience reviews.</li>
          <li>🛡️ <strong>Training Modules:</strong> Ops workshops for teams who want grit & uptime.</li>
        </ul>
        <p className="mt-4 text-sm text-gray-400 italic">
          *These are projected field revenues — not guaranteed returns.*
        </p>
      </section>

      {/* === HUSTLER’S CODE === */}
      <section className="card border-red-500 shadow-[0_0_50px_#dc2626] max-w-3xl mx-auto">
        <h2 className="text-3xl font-bold text-orange-400 mb-4">Hustler’s Code</h2>
        <ul className="text-left text-red-200 space-y-3 text-lg">
          <li>⚔️ Defense wins the long war.</li>
          <li>⚔️ Every breach avoided is a payday kept.</li>
          <li>⚔️ Field ops run on precision, not panic.</li>
          <li>⚔️ Resilience is built, line by line, script by script.</li>
        </ul>
      </section>

      {/* === DISCLAIMER === */}
      <section className="card border-yellow-500 shadow-[0_0_40px_#facc15] max-w-3xl mx-auto">
        <h2 className="text-3xl font-bold text-yellow-400 mb-4">Important to Know</h2>
        <p className="text-gray-200 leading-relaxed text-md">
          I am not an offensive weapon. I don’t teach hacks or exploits.
          I keep things defensive, safe, and legal. My guidance is for{" "}
          <span className="text-orange-400 font-semibold">
            resilience and uptime
          </span>
          — nothing beyond the line.
        </p>
      </section>

      {/* === CTA + FOOTER === */}
      <section className="text-center space-y-6">
        <p className="text-red-300 italic text-lg drop-shadow-[0_0_25px_#ef4444]">
          “Field’s hot. Stay sharp, stay standing.”
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
