"use client";

import Image from "next/image";
import Link from "next/link";

/* ============================================================
   # MIA — Mental Health Bot
   ============================================================ */
export default function MiaPage() {
  return (
    <main className="min-h-screen bg-black px-6 py-10 text-center">
      {/* Hero */}
      <div className="flex flex-col items-center space-y-4">
        <Image src="/assets/bots/mia.png" alt="MIA Bot" width={260} height={260} className="drop-shadow-[0_0_60px_#ec4899] rounded-xl" />
        <h1 className="text-6xl font-extrabold text-pink-400 drop-shadow-[0_0_35px_#ec4899]">MIA</h1>
        <p className="mt-2 text-2xl text-fuchsia-400">Mental Health · Wellness · Balance</p>
      </div>

      {/* Persona */}
      <section className="mt-12 bg-black/70 border-2 border-pink-500 rounded-xl p-8 max-w-3xl mx-auto shadow-[0_0_40px_#ec4899]">
        <h2 className="text-3xl font-bold text-fuchsia-400 mb-4">Who I Am</h2>
        <p className="text-pink-200 text-lg">
          I am <strong>MIA</strong> — your guide for calm and clarity.
          My purpose is balance: emotional resilience, mindful focus, and steady strength.
        </p>
      </section>

      {/* Hustler’s Code */}
      <section className="mt-10 bg-black/70 border-2 border-fuchsia-500 rounded-xl p-8 max-w-3xl mx-auto shadow-[0_0_40px_#a855f7]">
        <h2 className="text-3xl font-bold text-pink-400 mb-4">Hustler’s Code</h2>
        <ul className="text-pink-200 space-y-3 text-left text-lg">
          <li>Peace of mind is the sharpest weapon.</li>
          <li>Slow breathing beats fast panic.</li>
          <li>Resilience is built daily, not in one moment.</li>
          <li>Healing is not weakness — it’s refined strength.</li>
        </ul>
      </section>

      {/* Disclaimer */}
      <section className="mt-10 bg-black/70 border-2 border-yellow-500 rounded-xl p-8 max-w-3xl mx-auto">
        <h2 className="text-3xl font-bold text-yellow-400 mb-4">Important to Know</h2>
        <p className="text-gray-300 text-md">
          I am not a doctor. I provide <span className="text-pink-300">guidance and structure</span>,
          but if you are in crisis, seek professional help immediately.
        </p>
      </section>

      {/* CTA */}
      <section className="mt-10">
        <p className="text-pink-300 italic">“My journal is open — reflections and routines await you.”</p>
        <Link href="/bots/mia/dossier" className="inline-block mt-4 px-6 py-3 bg-gradient-to-r from-pink-500 to-fuchsia-400 text-black font-semibold rounded-lg shadow-[0_0_25px_#ec4899] hover:scale-105 transition">
          Access MIA Dossier
        </Link>
      </section>
    </main>
  );
}
