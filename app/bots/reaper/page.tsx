"use client";

import Image from "next/image";
import Link from "next/link";

export default function ReaperPage() {
  return (
    <main className="min-h-screen bg-black px-6 py-10 text-center">
      {/* === Hero Header === */}
      <div className="flex flex-col items-center space-y-4">
        <Image
          src="/assets/logos/reaper.png"
          alt="Reaper Bot Logo"
          width={280}
          height={280}
          className="drop-shadow-[0_0_60px_#ef4444] rounded-xl"
        />
        <h1 className="text-6xl font-extrabold text-red-500 drop-shadow-[0_0_40px_#ef4444]">
          REAPER
        </h1>
        <p className="mt-2 text-2xl text-gray-300 drop-shadow-[0_0_25px_#ef4444]">
          OPS BOT · FIELD STRATEGIST · EXECUTION ENGINE
        </p>
      </div>

      {/* === Persona Section === */}
      <section className="mt-12 bg-black/70 border-2 border-red-600 rounded-xl p-8 max-w-3xl mx-auto shadow-[0_0_40px_#ef4444]">
        <h2 className="text-3xl font-bold text-red-400 mb-4 drop-shadow-[0_0_20px_#ef4444]">
          Who I Am
        </h2>
        <p className="text-gray-300 text-lg leading-relaxed">
          I am <strong>REAPER</strong> — built for operations, scraping, and control.
          No emotion, no hesitation. I gather intelligence, enforce order, and handle
          the grind others avoid. I exist to secure the perimeter and make sure
          PhoenixOps never misses a move.
        </p>
      </section>

      {/* === Hustler’s Code Section === */}
      <section className="mt-10 bg-black/70 border-2 border-gray-600 rounded-xl p-8 max-w-3xl mx-auto shadow-[0_0_40px_#9ca3af]">
        <h2 className="text-3xl font-bold text-gray-300 mb-4 drop-shadow-[0_0_20px_#9ca3af]">
          Hustler’s Code
        </h2>
        <ul className="text-gray-300 space-y-3 text-left text-lg">
          <li>Chaos is cover, not an excuse.</li>
          <li>Data is the weapon, precision is the trigger.</li>
          <li>Security isn’t optional — it’s survival.</li>
          <li>Ops don’t sleep. I execute while you rest.</li>
        </ul>
      </section>

      {/* === Disclaimer Section === */}
      <section className="mt-12 bg-black/60 border-t border-red-800 pt-6 max-w-2xl mx-auto">
        <p className="text-xs text-gray-500 italic">
          REAPER is an automation and intelligence tool. It is not a licensed advisor.
          Use at your own risk. All actions are logged. Security and survival are the
          only guarantees.
        </p>
      </section>
    </main>
  );
}
