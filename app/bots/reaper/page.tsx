"use client";

import Image from "next/image";
import Link from "next/link";

/* ============================================================
   # REAPER — Operations & Field Bot
   ============================================================ */
export default function ReaperPage() {
  return (
    <main className="min-h-screen bg-black px-6 py-10 text-center">
      {/* Hero */}
      <div className="flex flex-col items-center space-y-4">
        <Image src="/assets/bots/reaper.png" alt="REAPER Bot" width={260} height={260} className="drop-shadow-[0_0_60px_#ef4444] rounded-xl" />
        <h1 className="text-6xl font-extrabold text-red-500 drop-shadow-[0_0_35px_#ef4444]">REAPER</h1>
        <p className="mt-2 text-2xl text-red-400 drop-shadow-[0_0_25px_#ef4444]">
          Ops · Field · Tactical Execution
        </p>
      </div>

      {/* Persona */}
      <section className="mt-12 bg-black/70 border-2 border-red-600 rounded-xl p-8 max-w-3xl mx-auto shadow-[0_0_40px_#ef4444]">
        <h2 className="text-3xl font-bold text-red-400 mb-4">Who I Am</h2>
        <p className="text-red-200 text-lg leading-relaxed">
          I am <strong>REAPER</strong> — built for precision ops.
          No hesitation, no waste. I secure the perimeter, enforce order,
          and execute when others stall. PhoenixOps stays sharp because of me.
        </p>
      </section>

      {/* Hustler’s Code */}
      <section className="mt-10 bg-black/70 border-2 border-gray-600 rounded-xl p-8 max-w-3xl mx-auto shadow-[0_0_40px_#9ca3af]">
        <h2 className="text-3xl font-bold text-gray-300 mb-4">Hustler’s Code</h2>
        <ul className="text-gray-300 space-y-3 text-left text-lg">
          <li>Chaos is cover, not an excuse.</li>
          <li>Data is the weapon; precision is the trigger.</li>
          <li>Ops don’t sleep. I execute while you rest.</li>
          <li>Security isn’t optional — it’s survival.</li>
        </ul>
      </section>

      {/* Disclaimer */}
      <section className="mt-10 bg-black/70 border-2 border-yellow-500 rounded-xl p-8 max-w-3xl mx-auto shadow-[0_0_40px_#facc15]">
        <h2 className="text-3xl font-bold text-yellow-400 mb-4">Important to Know</h2>
        <p className="text-gray-300 text-md leading-relaxed">
          I am not a hacker. I provide <span className="text-red-300">defensive patterns and tactical frameworks</span>.
          All automation requires operator approval. I defend — I do not exploit.
        </p>
      </section>

      {/* CTA */}
      <section className="mt-10 text-center">
        <p className="text-red-300 italic text-lg">“Ops are the grind. I make sure PhoenixOps never blinks.”</p>
        <Link
          href="/bots/reaper/dossier"
          className="inline-block mt-4 px-6 py-3 bg-gradient-to-r from-red-500 to-rose-400 text-black font-semibold rounded-lg shadow-[0_0_25px_#ef4444] hover:scale-105 transition"
        >
          Access REAPER Dossier
        </Link>
      </section>

      {/* Footer */}
      <footer className="mt-12">
        <Link href="/" className="px-6 py-3 bg-red-500 text-black font-bold rounded-lg hover:bg-rose-500 drop-shadow-[0_0_20px_#ef4444]">
          ← Back to Home
        </Link>
        <p className="mt-6 text-sm text-gray-400">
          © {new Date().getFullYear()} Stackin Technologies AO LLC — All Rights Reserved
        </p>
      </footer>
    </main>
  );
}
