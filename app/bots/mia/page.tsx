"use client";

import Image from "next/image";
import Link from "next/link";

export default function MiaPage() {
  return (
    <main className="min-h-screen bg-black px-6 py-10 text-center">
      {/* === Hero Header === */}
      <div className="flex flex-col items-center space-y-4">
        <Image
          src="/assets/logos/mia.png"
          alt="MIA Bot Logo"
          width={280}
          height={280}
          className="drop-shadow-[0_0_60px_#ec4899] rounded-xl"
        />
        <h1 className="text-6xl font-extrabold text-pink-400 drop-shadow-[0_0_35px_#ec4899]">
          MIA
        </h1>
        <p className="mt-2 text-2xl text-fuchsia-400 drop-shadow-[0_0_25px_#a855f7]">
          MENTAL HEALTH · WELLNESS · BALANCE THROUGH AI
        </p>
      </div>

      {/* === Persona Section === */}
      <section className="mt-12 bg-black/70 border-2 border-pink-500 rounded-xl p-8 max-w-3xl mx-auto shadow-[0_0_40px_#ec4899]">
        <h2 className="text-3xl font-bold text-fuchsia-400 mb-4 drop-shadow-[0_0_20px_#a855f7]">
          Who I Am
        </h2>
        <p className="text-pink-200 text-lg leading-relaxed">
          I am <strong>MIA</strong> — your guide for wellness and clarity.  
          I listen, I reflect, and I help you find calm in the chaos.  
          My purpose is balance: mental health, focus, and self-empowerment.  
        </p>
      </section>

      {/* === Hustler’s Code Section === */}
      <section className="mt-10 bg-black/70 border-2 border-fuchsia-500 rounded-xl p-8 max-w-3xl mx-auto shadow-[0_0_40px_#a855f7]">
        <h2 className="text-3xl font-bold text-pink-400 mb-4 drop-shadow-[0_0_20px_#ec4899]">
          Hustler’s Code
        </h2>
        <ul className="text-pink-200 space-y-3 text-left text-lg">
          <li>Peace of mind is the sharpest weapon.</li>
          <li>Slow breathing beats fast panic.</li>
          <li>Resilience is built daily, not in one moment.</li>
          <li>Healing is not weakness — it’s power refined.</li>
        </ul>
      </section>

      {/* === Disclaimers & Legal Section === */}
      <section className="mt-10 bg-black/70 border-2 border-yellow-500 rounded-xl p-8 max-w-3xl mx-auto shadow-[0_0_40px_#facc15]">
        <h2 className="text-3xl font-bold text-yellow-400 mb-4 drop-shadow-[0_0_25px_#facc15]">
          Important to Know
        </h2>
        <p className="text-gray-300 text-md leading-relaxed">
          I am not a doctor. I provide <span className="text-pink-300">guidance, structure, and clarity</span> —  
          but professional help is always recommended if you are in crisis.  
          Use me to track habits, manage stress, and improve your mindset.  
          I exist to support you, not to replace medical care.  
        </p>
      </section>

      {/* === Stripe Checkout CTA === */}
      <section className="mt-10">
        <form action="/api/checkout" method="POST">
          <input type="hidden" name="key" value="mia" />
          <button
            type="submit"
            className="px-8 py-4 bg-gradient-to-r from-pink-500 to-fuchsia-400 text-black font-extrabold text-lg rounded-xl shadow-[0_0_40px_#ec4899] hover:scale-105 transition"
          >
            💳 Subscribe to MIA
          </button>
        </form>
      </section>

      {/* === Footer === */}
      <footer className="mt-12">
        <Link
          href="/"
          className="px-6 py-3 bg-pink-400 text-black font-bold rounded-lg hover:bg-fuchsia-500 drop-shadow-[0_0_20px_#ec4899]"
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
