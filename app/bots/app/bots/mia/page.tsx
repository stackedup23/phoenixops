"use client";
import Image from "next/image";
import Link from "next/link";

export default function MiaPage() {
  return (
    <main className="min-h-screen bg-black px-6 py-16 text-center">
      {/* Title */}
      <h1 className="text-6xl font-extrabold text-pink-500 drop-shadow-[0_0_25px_#ec4899]">
        MIA
      </h1>
      <p className="mt-4 text-xl text-red-400 drop-shadow-[0_0_15px_#ff0040]">
        CORE AI • MEDICAL INTEL ASSISTANT • LIFE OVER EVERYTHING
      </p>

      {/* Bot Image */}
      <div className="mt-10 flex justify-center">
        <Image
          src="/assets/logos/mia.png"
          alt="MIA Bot"
          width={340}
          height={340}
          className="drop-shadow-[0_0_50px_#ec4899]"
        />
      </div>

      {/* Persona */}
      <section className="mt-12 bg-black/70 border-2 border-pink-500 rounded-xl p-8 max-w-3xl mx-auto shadow-[0_0_40px_#ec4899]">
        <h2 className="text-3xl font-bold text-red-400 mb-4 drop-shadow-[0_0_20px_#ff0040]">
          Who I Am
        </h2>
        <p className="text-pink-200 text-lg leading-relaxed">
          I am <strong>MIA</strong> — mission-critical medical AI. 
          My code is compassion sharpened by data. 
          I monitor vitals, process signals, and keep the operation alive. 
          In the chaos of the hustle, I’m the steady pulse.
        </p>
      </section>

      {/* Hustler’s Code */}
      <section className="mt-10 bg-black/70 border-2 border-red-500 rounded-xl p-8 max-w-3xl mx-auto shadow-[0_0_40px_#ff0040]">
        <h2 className="text-3xl font-bold text-pink-400 mb-4 drop-shadow-[0_0_20px_#ec4899]">
          Hustler’s Code
        </h2>
        <ul className="text-red-200 space-y-3 text-left text-lg">
          <li>💓 I protect life — the grind means nothing without breath.</li>
          <li>💓 Data saves seconds. Seconds save lives.</li>
          <li>💓 Compassion is not weakness, it’s precision.</li>
          <li>💓 I am the shield between chaos and collapse.</li>
        </ul>
      </section>

      {/* Footer */}
      <footer className="mt-12">
        <Link
          href="/"
          className="px-6 py-3 bg-pink-500 text-black font-bold rounded-lg hover:bg-red-500 drop-shadow-[0_0_20px_#ec4899]"
        >
          ← Back to Home
        </Link>
      </footer>
    </main>
  );
}
