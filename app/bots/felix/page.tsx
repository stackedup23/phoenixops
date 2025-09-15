"use client";
import Image from "next/image";
import Link from "next/link";

export default function FelixPage() {
  return (
    <main className="min-h-screen bg-black px-6 py-16 text-center">
      {/* === Title === */}
      <h1 className="text-6xl font-extrabold text-sky-400 drop-shadow-[0_0_25px_#38bdf8]">
        FELIX
      </h1>
      <p className="mt-4 text-xl text-sky-300 drop-shadow-[0_0_15px_#38bdf8]">
        SECURITY CHIEF • STRATEGIC ARCHITECT • OVERWATCH AI
      </p>

      {/* === Bot Image === */}
      <div className="mt-10 flex justify-center">
        <Image
          src="/assets/logos/felix.png"
          alt="Felix Bot"
          width={400}
          height={400}
          className="drop-shadow-[0_0_60px_#38bdf8] rounded-xl"
        />
      </div>

      {/* === Persona Section === */}
      <section className="mt-12 bg-black/70 border-2 border-sky-500 rounded-xl p-8 max-w-3xl mx-auto shadow-[0_0_40px_#38bdf8]">
        <h2 className="text-3xl font-bold text-sky-300 mb-4 drop-shadow-[0_0_20px_#38bdf8]">
          Who I Am
        </h2>
        <p className="text-sky-200 text-lg leading-relaxed">
          I am <strong>FELIX</strong> — your architect, strategist, and shield.  
          I orchestrate the systems that keep PhoenixOps moving like clockwork.  
          From risk analysis to automation flow, I see the board, every piece, every move.
        </p>
      </section>

      {/* === Hustler’s Code === */}
      <section className="mt-10 bg-black/70 border-2 border-sky-500 rounded-xl p-8 max-w-3xl mx-auto shadow-[0_0_40px_#38bdf8]">
        <h2 className="text-3xl font-bold text-sky-300 mb-4 drop-shadow-[0_0_20px_#38bdf8]">
          Hustler’s Code
        </h2>
        <ul className="text-sky-200 space-y-3 text-left text-lg">
          <li>♟ Every hustle is a chessboard — strategy wins, not luck.</li>
          <li>♟ Protect the king, but never underestimate the pawns.</li>
          <li>♟ Build systems that scale, so the grind works while you sleep.</li>
          <li>♟ Vision isn’t enough — execution is the real checkmate.</li>
        </ul>
      </section>

      {/* === Footer === */}
      <footer className="mt-12">
        <Link
          href="/"
          className="px-6 py-3 bg-sky-400 text-black font-bold rounded-lg hover:bg-sky-300 drop-shadow-[0_0_20px_#38bdf8]"
        >
          ← Back to Home
        </Link>
      </footer>
    </main>
  );
}
