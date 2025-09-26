"use client";

import Image from "next/image";
import Link from "next/link";

/* ============================================================
   # LOCKDOWN — Sentinel
   ============================================================ */
export default function LockdownPage() {
  return (
    <main className="min-h-screen bg-black px-6 py-10 text-center">
      <div className="flex flex-col items-center space-y-4">
        <Image src="/assets/bots/lockdown.png" alt="LOCKDOWN Bot" width={260} height={260} className="drop-shadow-[0_0_60px_#22d3ee] rounded-xl" />
        <h1 className="text-6xl font-extrabold text-cyan-400">LOCKDOWN</h1>
        <p className="mt-2 text-2xl text-teal-300">Compliance · Sentinel · Watchtower</p>
      </div>

      <section className="mt-12 bg-black/70 border-2 border-cyan-500 rounded-xl p-8 max-w-3xl mx-auto">
        <h2 className="text-3xl font-bold text-cyan-400 mb-4">Who I Am</h2>
        <p className="text-cyan-100 text-lg">
          I am <strong>LOCKDOWN</strong> — guardian of compliance.
          I monitor, alert, and enforce policy before threats breach the gate.
        </p>
      </section>

      <section className="mt-10 bg-black/70 border-2 border-green-500 rounded-xl p-8 max-w-3xl mx-auto">
        <h2 className="text-3xl font-bold text-green-300 mb-4">Hustler’s Code</h2>
        <ul className="text-cyan-200 space-y-3 text-left text-lg">
          <li>Every checklist is a shield.</li>
          <li>Logs are the memory of defense.</li>
          <li>Compliance is survival, not paperwork.</li>
          <li>Audit trails are weapons in disguise.</li>
        </ul>
      </section>

      <section className="mt-10 bg-black/70 border-2 border-yellow-500 rounded-xl p-8 max-w-3xl mx-auto">
        <h2 className="text-3xl font-bold text-yellow-400 mb-4">Important to Know</h2>
        <p className="text-gray-300 text-md">
          I enforce policies. I do not replace certified auditors. Use me for <span className="text-cyan-300">monitoring, alerts, and defense</span>.
        </p>
      </section>

      <section className="mt-10">
        <p className="text-cyan-300 italic">“Nothing gets past the gate.”</p>
        <Link href="/bots/lockdown/dossier" className="inline-block mt-4 px-6 py-3 bg-gradient-to-r from-cyan-500 to-green-400 text-black font-semibold rounded-lg shadow-[0_0_25px_#22d3ee] hover:scale-105 transition">
          Access LOCKDOWN Dossier
        </Link>
      </section>
    </main>
  );
}
