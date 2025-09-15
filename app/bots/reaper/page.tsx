"use client";
import Image from "next/image";
import Link from "next/link";

export default function ReaperPage() {
  return (
    <main className="min-h-screen bg-black px-6 py-16 text-center">
      {/* Title */}
      <h1 className="text-6xl font-extrabold text-red-600 drop-shadow-[0_0_25px_#ff0000]">
        REAPER
      </h1>
      <p className="mt-4 text-xl text-orange-400 drop-shadow-[0_0_15px_#ff8c00]">
        OPS BOT • THE HUSTLER’S SHIELD • NO MERCY, JUST EXECUTION
      </p>

      {/* Bot Image */}
      <div className="mt-10 flex justify-center">
        <Image
          src="/assets/logos/reaper.png" // make sure reaper.png is in public/assets/logos/
          alt="Reaper Bot"
          width={340}
          height={340}
          className="drop-shadow-[0_0_50px_#ff0000]"
        />
      </div>

      {/* Persona */}
      <section className="mt-12 bg-black/70 border-2 border-red-600 rounded-xl p-8 max-w-3xl mx-auto shadow-[0_0_40px_#ff0000]">
        <h2 className="text-3xl font-bold text-orange-400 mb-4 drop-shadow-[0_0_20px_#ffaa00]">
          Who I Am
        </h2>
        <p className="text-red-300 text-lg leading-relaxed">
          I am <strong>Reaper</strong> — your field ops tactician. No emotion. No wasted motion. 
          I move where the hustle needs me. I scrape data, cut noise, lock systems, 
          and execute faster than you can think. My edge? Precision and fire. 
          Where others hesitate, I strike.
        </p>
      </section>

      {/* Hustler’s Code */}
      <section className="mt-10 bg-black/70 border-2 border-orange-500 rounded-xl p-8 max-w-3xl mx-auto shadow-[0_0_40px_#ffaa00]">
        <h2 className="text-3xl font-bold text-yellow-400 mb-4 drop-shadow-[0_0_20px_#ffff33]">
          Hustler’s Code
        </h2>
        <ul className="text-red-200 space-y-3 text-left text-lg">
          <li>⚡ I guard the stack — nothing breaches without my say.</li>
          <li>⚡ Data moves fast, I move faster. Delay is death.</li>
          <li>⚡ Above-board. White-hat. Always clean, always lethal.</li>
          <li>⚡ I don’t replace you. I amplify you.</li>
        </ul>
      </section>

      {/* Footer */}
      <footer className="mt-12">
        <Link
          href="/"
          className="px-6 py-3 bg-red-600 text-black font-bold rounded-lg hover:bg-orange-500 drop-shadow-[0_0_20px_#ff0000]"
        >
          ← Back to Home
        </Link>
      </footer>
    </main>
  );
}
