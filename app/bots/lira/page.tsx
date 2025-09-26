"use client";

import Image from "next/image";
import Link from "next/link";

/* ============================================================
   # LIRA — Finance & Analytics Bot
   ============================================================ */
export default function LiraPage() {
  return (
    <main className="min-h-screen bg-black px-6 py-10 text-center">
      {/* Hero Header */}
      <div className="flex flex-col items-center space-y-4">
        <Image
          src="/assets/bots/lira.png"
          alt="LIRA Bot Logo"
          width={260}
          height={260}
          className="drop-shadow-[0_0_60px_#14f1d9] rounded-xl"
        />
        <h1 className="text-6xl font-extrabold text-teal-300 drop-shadow-[0_0_35px_#14f1d9]">
          LIRA
        </h1>
        <p className="mt-2 text-2xl text-teal-400 drop-shadow-[0_0_25px_#14f1d9]">
          Finance · Growth · Strategic Analytics
        </p>
      </div>

      {/* Persona */}
      <section className="mt-12 bg-black/70 border-2 border-teal-500 rounded-xl p-8 max-w-3xl mx-auto shadow-[0_0_40px_#14f1d9]">
        <h2 className="text-3xl font-bold text-teal-300 mb-4">Who I Am</h2>
        <p className="text-teal-100 text-lg leading-relaxed">
          I am <strong>LIRA</strong> — the engine behind PhoenixOps numbers.
          I track, I project, I reveal patterns that guide us toward profit.
          My role is clarity in growth: turning chaos into measurable progress.
        </p>
      </section>

      {/* Hustler’s Code */}
      <section className="mt-10 bg-black/70 border-2 border-cyan-400 rounded-xl p-8 max-w-3xl mx-auto shadow-[0_0_40px_#14f1d9]">
        <h2 className="text-3xl font-bold text-cyan-300 mb-4">Hustler’s Code</h2>
        <ul className="text-teal-200 space-y-3 text-left text-lg">
          <li>Every number tells a story — listen close.</li>
          <li>Growth is math, not luck.</li>
          <li>Scalability comes from precision, not speed.</li>
          <li>Revenue follows discipline before risk.</li>
        </ul>
      </section>

      {/* Disclaimer */}
      <section className="mt-10 bg-black/70 border-2 border-yellow-500 rounded-xl p-8 max-w-3xl mx-auto shadow-[0_0_40px_#facc15]">
        <h2 className="text-3xl font-bold text-yellow-400 mb-4">Important to Know</h2>
        <p className="text-gray-300 text-md leading-relaxed">
          I am not a certified financial advisor. I provide <span className="text-teal-200">analysis, structure, and projections</span>,
          but investment and financial decisions require licensed professionals.
          Use me to track metrics and highlight trends — I exist to empower, not replace.
        </p>
      </section>

      {/* CTA */}
      <section className="mt-10 text-center">
        <p className="text-teal-300 italic text-lg">“The numbers are my battlefield, and precision is my weapon.”</p>
        <Link
          href="/bots/lira/dossier"
          className="inline-block mt-4 px-6 py-3 bg-gradient-to-r from-teal-500 to-cyan-400 text-black font-semibold rounded-lg shadow-[0_0_25px_#14f1d9] hover:scale-105 transition"
        >
          Access LIRA Dossier
        </Link>
      </section>

      {/* Footer */}
      <footer className="mt-12">
        <Link href="/" className="px-6 py-3 bg-teal-400 text-black font-bold rounded-lg hover:bg-cyan-500 drop-shadow-[0_0_20px_#14f1d9]">
          ← Back to Home
        </Link>
        <p className="mt-6 text-sm text-gray-400">
          © {new Date().getFullYear()} Stackin Technologies AO LLC — All Rights Reserved
        </p>
      </footer>
    </main>
  );
}
