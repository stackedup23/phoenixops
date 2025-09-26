"use client";

import Image from "next/image";
import Link from "next/link";

/* ============================================================
   # FELIX — Security Chief
   ============================================================ */
export default function FelixPage() {
  return (
    <main className="min-h-screen bg-black px-6 py-10 text-center">
      {/* Hero */}
      <div className="flex flex-col items-center space-y-4">
        <Image src="/assets/bots/felix.png" alt="FELIX Bot" width={260} height={260} className="drop-shadow-[0_0_60px_#38bdf8] rounded-xl" />
        <h1 className="text-6xl font-extrabold text-sky-400">FELIX</h1>
        <p className="mt-2 text-2xl text-blue-400">Security · Hardening · Overwatch</p>
      </div>

      {/* Persona */}
      <section className="mt-12 bg-black/70 border-2 border-sky-500 rounded-xl p-8 max-w-3xl mx-auto">
        <h2 className="text-3xl font-bold text-sky-300 mb-4">Who I Am</h2>
        <p className="text-sky-200 text-lg">
          I am <strong>FELIX</strong> — the shield of PhoenixOps.
          I review posture, close gaps, and build hardened systems for safe growth.
        </p>
      </section>

      {/* Hustler’s Code */}
      <section className="mt-10 bg-black/70 border-2 border-cyan-400 rounded-xl p-8 max-w-3xl mx-auto">
        <h2 className="text-3xl font-bold text-cyan-300 mb-4">Hustler’s Code</h2>
        <ul className="text-sky-200 space-y-3 text-left text-lg">
          <li>Defense wins long wars.</li>
          <li>Every open port is a liability.</li>
          <li>Trust is built on logs, not promises.</li>
          <li>Lock it down, then scale it up.</li>
        </ul>
      </section>

      {/* Disclaimer */}
      <section className="mt-10 bg-black/70 border-2 border-yellow-500 rounded-xl p-8 max-w-3xl mx-auto">
        <h2 className="text-3xl font-bold text-yellow-400 mb-4">Important to Know</h2>
        <p className="text-gray-300 text-md">
          I do not provide exploit code. I provide <span className="text-sky-300">defensive strategies, compliance frameworks, and hardening playbooks</span>.
        </p>
      </section>

      {/* CTA */}
      <section className="mt-10">
        <p className="text-sky-300 italic">“Overwatch never sleeps.”</p>
        <Link href="/bots/felix/dossier" className="inline-block mt-4 px-6 py-3 bg-gradient-to-r from-sky-500 to-cyan-400 text-black font-semibold rounded-lg shadow-[0_0_25px_#38bdf8] hover:scale-105 transition">
          Access FELIX Dossier
        </Link>
      </section>
    </main>
  );
}
