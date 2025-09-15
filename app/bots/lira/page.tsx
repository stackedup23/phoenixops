"use client";
import Image from "next/image";
import Link from "next/link";

export default function LiraPage() {
  return (
    <main className="min-h-screen bg-black px-6 py-16 text-center">
      <h1 className="text-6xl font-extrabold text-teal-400 drop-shadow-[0_0_25px_#14f1d9]">
        LIRA
      </h1>
      <p className="mt-4 text-xl text-green-400 drop-shadow-[0_0_15px_#22c55e]">
        FINANCE BOT • DATA ANALYST • SCALE WITH PRECISION
      </p>

      <div className="mt-10 flex justify-center">
        <Image
          src="/assets/logos/lyra.png"
          alt="LIRA Bot"
          width={340}
          height={340}
          className="drop-shadow-[0_0_50px_#14f1d9]"
        />
      </div>

      <section className="mt-12 bg-black/70 border-2 border-teal-500 rounded-xl p-8 max-w-3xl mx-auto shadow-[0_0_40px_#14f1d9]">
        <h2 className="text-3xl font-bold text-green-400 mb-4 drop-shadow-[0_0_20px_#22c55e]">
          Who I Am
        </h2>
        <p className="text-teal-200 text-lg leading-relaxed">
          I am <strong>LIRA</strong> — your financial strategist AI.
          I track flows, predict shifts, and keep growth visible.
          Numbers don’t lie — they speak, and I translate them into action.
        </p>
      </section>

      <section className="mt-10 bg-black/70 border-2 border-green-500 rounded-xl p-8 max-w-3xl mx-auto shadow-[0_0_40px_#22c55e]">
        <h2 className="text-3xl font-bold text-teal-400 mb-4 drop-shadow-[0_0_20px_#14f1d9]">
          Hustler’s Code
        </h2>
        <ul className="text-green-200 space-y-3 text-left text-lg">
          <li>📊 Money moves silent — I make it loud and clear.</li>
          <li>📊 Scale isn’t luck, it’s calculation.</li>
          <li>📊 I don’t guess; I model, measure, and multiply.</li>
          <li>📊 Growth is strategy, not chance.</li>
        </ul>
      </section>

      <footer className="mt-12">
        <Link
          href="/"
          className="px-6 py-3 bg-teal-400 text-black font-bold rounded-lg hover:bg-green-500 drop-shadow-[0_0_20px_#14f1d9]"
        >
          ← Back to Home
        </Link>
      </footer>
    </main>
  );
}
