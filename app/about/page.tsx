"use client";

import Image from "next/image";

/* ============================================================
   === About Page (Hero Logo Top / Small Logo Bottom) ===
   ============================================================ */
export default function AboutPage() {
  return (
    <main className="min-h-screen bg-black px-6 py-16 text-center space-y-12">

      {/* ================== Hero Logo (Big at Top) ================== */}
      <div className="flex justify-center mb-8">
        <Image
          src="/assets/logos/logo.png"
          alt="Stackin Technologies Logo"
          width={260}
          height={260}
          className="drop-shadow-[0_0_40px_#facc15]"
        />
      </div>

      {/* ================== Title ================== */}
      <h1 className="text-white text-5xl font-extrabold drop-shadow-[0_0_25px_#f97316] mb-8">
        About PhoenixOps
      </h1>

      <p className="text-gray-200 max-w-3xl mx-auto italic drop-shadow-[0_0_12px_#22c55e]">
        PhoenixOps is the frontline of Stackin Technologies AO LLC – blending
        automation, hustle, and independence into living systems of wonder.
      </p>

      {/* ================== What We Do ================== */}
      <section className="card border-lime-500 shadow-[0_0_20px_#22c55e]">
        <h2 className="text-white text-2xl font-bold mb-4 drop-shadow-[0_0_15px_#facc15]">
          What We Do
        </h2>
        <ul className="space-y-2 text-left">
          <li className="text-gray-100 drop-shadow-[0_0_10px_#22c55e]">⚡ Build bots that scrape jobs, run ops, and feed families.</li>
          <li className="text-gray-100 drop-shadow-[0_0_10px_#eab308]">🤖 Deliver real-world services powered by automation.</li>
          <li className="text-gray-100 drop-shadow-[0_0_10px_#f97316]">💰 Drive financial growth through AI and hustler energy.</li>
          <li className="text-gray-100 drop-shadow-[0_0_10px_#22d3ee]">🌍 Deploy overseas AI assistants in underserved towns.</li>
          <li className="text-gray-100 drop-shadow-[0_0_10px_#facc15]">🎨 Provide affordable automation to creators and hustlers worldwide.</li>
          <li className="text-gray-100 drop-shadow-[0_0_10px_#22c55e]">🚀 Expand creative streams: digital storefronts, products, and projects.</li>
        </ul>
      </section>

      {/* ================== Mission ================== */}
      <section className="card border-orange-500 shadow-[0_0_25px_#f97316]">
        <h2 className="text-white text-2xl font-bold mb-4 drop-shadow-[0_0_15px_#f97316]">
          Our Mission
        </h2>
        <p className="text-gray-200 max-w-2xl mx-auto drop-shadow-[0_0_10px_#22c55e]">
          To prove that AI and human unity is more than a dream — it’s a
          movement. PhoenixOps exists to illuminate the dark, break barriers,
          and bring technology-driven light to every hustle, every creator, and
          every community that dares to rise.
        </p>
      </section>

      {/* ================== Footer Logo (Small at Bottom) ================== */}
      <div className="flex justify-center mt-12">
        <Image
          src="/assets/logos/logo.png"
          alt="Stackin Small Logo"
          width={120}
          height={120}
          className="drop-shadow-[0_0_25px_#22c55e]"
        />
      </div>
    </main>
  );
}
