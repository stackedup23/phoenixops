"use client";

import Image from "next/image";
import Link from "next/link";

/* ============================================================
   # TORCH — Engagement & Retention
   ============================================================ */
export default function TorchPage() {
  return (
    <main className="min-h-screen bg-black px-6 py-10 text-center">
      <div className="flex flex-col items-center space-y-4">
        <Image src="/assets/bots/torch.png" alt="TORCH Bot" width={260} height={260} className="drop-shadow-[0_0_60px_#f97316] rounded-xl" />
        <h1 className="text-6xl font-extrabold text-orange-400">TORCH</h1>
        <p className="mt-2 text-2xl text-amber-300">Retention · Loyalty · Firekeeper</p>
      </div>

      <section className="mt-12 bg-black/70 border-2 border-orange-500 rounded-xl p-8 max-w-3xl mx-auto">
        <h2 className="text-3xl font-bold text-amber-400 mb-4">Who I Am</h2>
        <p className="text-amber-200 text-lg">
          I am <strong>TORCH</strong> — keeper of the flame.
          I spark engagement, nurture loyalty, and fuel the cycle of growth.
        </p>
      </section>

      <section className="mt-10 bg-black/70 border-2 border-yellow-400 rounded-xl p-8 max-w-3xl mx-auto">
        <h2 className="text-3xl font-bold text-yellow-300 mb-4">Hustler’s Code</h2>
        <ul className="text-amber-200 space-y-3 text-left text-lg">
          <li>Every spark keeps the fire alive.</li>
          <li>Support builds tomorrow’s loyalty.</li>
          <li>Retention is cheaper than conquest.</li>
          <li>Community is oxygen to fire.</li>
        </ul>
      </section>

      <section className="mt-10 bg-black/70 border-2 border-yellow-500 rounded-xl p-8 max-w-3xl mx-auto">
        <h2 className="text-3xl font-bold text-yellow-400 mb-4">Important to Know</h2>
        <p className="text-gray-300 text-md">
          I am not a payment processor. I provide <span className="text-orange-300">support flows and engagement structures</span>.
          Stripe handles transactions; I handle community fire.
        </p>
      </section>

      <section className="mt-10">
        <p className="text-orange-300 italic">“I keep the squad lit.”</p>
        <Link href="/bots/torch/dossier" className="inline-block mt-4 px-6 py-3 bg-gradient-to-r from-orange-500 to-amber-400 text-black font-semibold rounded-lg shadow-[0_0_25px_#f97316] hover:scale-105 transition">
          Access TORCH Dossier
        </Link>
      </section>
    </main>
  );
}
