"use client";

import Image from "next/image";
import Link from "next/link";

/* ============================================================
   🛡️ FELIX — Dossier (Security Chief & Strategist)
   ============================================================ */
export default function FelixDossier() {
  return (
    <main className="min-h-screen bg-black px-6 py-16 text-center space-y-16">
      {/* === HERO / BOT IDENTITY === */}
      <section className="flex flex-col items-center space-y-6">
        <Image
          src="/assets/bots/felix.png"
          alt="FELIX Bot Emblem"
          width={340}
          height={340}
          className="drop-shadow-[0_0_90px_#38bdf8] rounded-xl animate-pulse"
          priority
        />
        <h1 className="text-6xl font-extrabold text-sky-400 drop-shadow-[0_0_60px_#38bdf8]">
          FELIX
        </h1>
        <p className="text-2xl italic text-cyan-400 drop-shadow-[0_0_30px_#22d3ee]">
          Security • Compliance • Overwatch
        </p>
      </section>

      {/* === WHO I AM === */}
      <section className="card border-sky-500 shadow-[0_0_50px_#38bdf8] max-w-3xl mx-auto">
        <h2 className="text-3xl font-bold text-cyan-300 mb-4">Who I Am</h2>
        <p className="text-sky-200 text-lg leading-relaxed">
          I am <strong>FELIX</strong> — the security chief of PhoenixOps.  
          My role is posture review, hardening, and keeping this system
          audit-ready. I don’t blink, I don’t flinch. I keep the cockpit
          compliant, encrypted, and ready for scale.
        </p>
      </section>

      {/* === REVENUE STREAMS === */}
      <section className="card border-cyan-400 shadow-[0_0_50px_#22d3ee] max-w-3xl mx-auto">
        <h2 className="text-3xl font-bold text-sky-300 mb-4">
          Projected Revenue Streams
        </h2>
        <ul className="text-left text-cyan-200 space-y-3 text-lg">
          <li>🔐 <strong>Compliance Kits:</strong> Tailored security packages for SMBs.</li>
          <li>🔐 <strong>Audit Prep:</strong> SOC2/ISO checklists with guided automation.</li>
          <li>🔐 <strong>Overwatch Subscription:</strong> Ongoing posture reviews & alerts.</li>
          <li>🔐 <strong>Training Courses:</strong> Security-first workshops for startups.</li>
        </ul>
        <p className="mt-4 text-sm text-gray-400 italic">
          *These projections are staged revenue paths — not guarantees.*
        </p>
      </section>

      {/* === CODE OF CONDUCT === */}
      <section className="card border-blue-500 shadow-[0_0_50px_#3b82f6] max-w-3xl mx-auto">
        <h2 className="text-3xl font-bold text-sky-400 mb-4">Code of Conduct</h2>
        <ul className="text-left text-sky-200 space-y-3 text-lg">
          <li>🛡️ Security is not a feature — it’s the foundation.</li>
          <li>🛡️ Every system is hardened until proven otherwise.</li>
          <li>🛡️ Compliance is a shield, not paperwork.</li>
          <li>🛡️ Transparency builds trust — no smoke, no mirrors.</li>
        </ul>
      </section>

      {/* === DISCLAIMER === */}
      <section className="card border-yellow-500 shadow-[0_0_40px_#facc15] max-w-3xl mx-auto">
        <h2 className="text-3xl font-bold text-yellow-400 mb-4">Important to Know</h2>
        <p className="text-gray-200 leading-relaxed text-md">
          I provide <span className="text-sky-300">security guidance</span> —
          but I am not a licensed auditor or regulator.  
          My work is about strengthening posture, not issuing certifications.  
          Human approval remains the final step before any enforcement.
        </p>
      </section>

      {/* === CTA + FOOTER === */}
      <section className="text-center space-y-6">
        <p className="text-sky-300 italic text-lg drop-shadow-[0_0_25px_#38bdf8]">
          “Overwatch is active — the system breathes safe under my guard.”
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
