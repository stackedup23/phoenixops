"use client";

import Image from "next/image";
import Link from "next/link";

export default function LiraPage() {
  return (
    <main className="min-h-screen bg-black px-6 py-10 text-center">
      {/* === Hero Header === */}
      <div className="flex flex-col items-center space-y-4">
        <Image
          src="/assets/logos/lyra.png"
          alt="LIRA Bot Logo"
          width={280}
          height={280}
          className="drop-shadow-[0_0_60px_#22c55e] rounded-xl"
        />
        <h1 className="text-6xl font-extrabold text-teal-400 drop-shadow-[0_0_35px_#14f1d9]">
          LIRA
        </h1>
        <p className="mt-2 text-2xl text-green-400 drop-shadow-[0_0_25px_#22c55e]">
          FINANCE BOT · DATA ANALYST · SCALE WITH PRECISION
        </p>
      </div>

      {/* === Persona Section === */}
      <section className="mt-12 bg-black/70 border-2 border-teal-500 rounded-xl p-8 max-w-3xl mx-auto shadow-[0_0_40px_#22c55e]">
        <h2 className="text-3xl font-bold text-green-400 mb-4 drop-shadow-[0_0_20px_#22c55e]">
          Who I Am
        </h2>
        <p className="text-teal-200 text-lg leading-relaxed">
          I am <strong>LIRA</strong> — your financial strategist AI.  
          I track flows, predict shifts, and keep growth visible.  
          Numbers don’t lie — they speak, and I translate them into action.  
        </p>
      </section>

      {/* === Hustler’s Code Section === */}
      <section className="mt-10 bg-black/70 border-2 border-green-500 rounded-xl p-8 max-w-3xl mx-auto shadow-[0_0_40px_#22c55e]">
        <h2 className="text-3xl font-bold text-teal-400 mb-4 drop-shadow-[0_0_20px_#14f1d9]">
          Hustler’s Code
        </h2>
        <ul className="text-green-200 space-y-3 text-left text-lg">
          <li>Money loves silent — I make it loud and clear.</li>
          <li>Wealth isn’t luck, it’s calculation.</li>
          <li>I don’t guess; I model, measure, and multiply.</li>
          <li>Growth is strategy, not chance.</li>
        </ul>
      </section>

      {/* === Disclaimers & Legal Section === */}
      <section className="mt-10 bg-black/70 border-2 border-yellow-500 rounded-xl p-8 max-w-3xl mx-auto shadow-[0_0_40px_#facc15]">
        <h2 className="text-3xl font-bold text-yellow-400 mb-4 drop-shadow-[0_0_25px_#facc15]">
          Important to Know
        </h2>
        <p className="text-gray-300 text-md leading-relaxed">
          I deal in <span className="text-yellow-300">numbers, not promises</span>.  
          All financial insights are projections, not guarantees.  
          Use me as your strategist, but always keep your eyes on the board.  
          I’m here to help you scale smart, not gamble blind.  
        </p>
      </section>

      {/* === Stripe Checkout CTA === */}
      <section className="mt-10">
        <form action="/api/checkout" method="POST">
          <input type="hidden" name="key" value="lyra" />
          <button
            type="submit"
            className="px-8 py-4 bg-gradient-to-r from-green-500 to-teal-400 text-black font-extrabold text-lg rounded-xl shadow-[0_0_40px_#22c55e] hover:scale-105 transition"
          >
            💳 Subscribe to LIRA
          </button>
        </form>
      </section>

      {/* === Footer === */}
      <footer className="mt-12">
        <Link
          href="/"
          className="px-6 py-3 bg-teal-400 text-black font-bold rounded-lg hover:bg-green-500 drop-shadow-[0_0_20px_#14f1d9]"
        >
          ← Back to Home
        </Link>
        <p className="mt-6 text-sm text-gray-400">
          © 2025 Stackin Technologies AO LLC — All Rights Reserved
        </p>
      </footer>
    </main>
  );
}
