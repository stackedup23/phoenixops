"use client";
import Image from "next/image";

export default function About() {
  return (
    <main className="min-h-screen flex flex-col items-center bg-black text-center px-6 py-16">
      
      {/* Page Header */}
      <h1 className="text-6xl md:text-7xl font-extrabold text-yellow-400 drop-shadow-[0_0_35px_#facc15] mb-8">
        About PhoenixOps
      </h1>
      <p className="text-2xl md:text-3xl text-teal-400 max-w-4xl drop-shadow-[0_0_20px_#14f1d9] mb-12">
        PhoenixOps is the frontline of <span className="font-bold text-yellow-300">Stackin Technologies AO LLC</span>.  
        We combine AI automation, overseas development, crypto + day trading, creative hustles, and real-world services  
        to build opportunity, resilience, and independence.  
        Minority-owned, community-driven, and powered by grit + innovation.
      </p>

      {/* What We Do */}
      <section className="w-full max-w-5xl bg-black/70 border-4 border-orange-500 rounded-xl shadow-[0_0_30px_#f97316] p-10 mb-12">
        <h2 className="text-4xl font-bold text-red-400 drop-shadow-[0_0_25px_#ef4444] mb-6">
          What We Do
        </h2>
        <ul className="space-y-4 text-xl md:text-2xl text-gray-200 leading-relaxed">
          <li>🔥 Build bots that scrape jobs, manage leads, and handle communication.</li>
          <li>💧 Deliver real-world services: power washing, landscaping, HVAC basics, remodeling.</li>
          <li>📊 Drive financial growth with crypto trading, DeFi strategies, and forex arbitrage.</li>
          <li>🌍 Build overseas AI assistants for underdeveloped markets.</li>
          <li>🛠️ Provide affordable, community-driven automation solutions.</li>
          <li>🎨 Expand creative streams: Etsy crafts, digital storefronts, community art projects.</li>
        </ul>
      </section>

      {/* Mission */}
      <section className="w-full max-w-5xl bg-black/70 border-4 border-yellow-400 rounded-xl shadow-[0_0_35px_#facc15] p-10">
        <h2 className="text-4xl font-bold text-yellow-400 drop-shadow-[0_0_30px_#facc15] mb-6">
          Our Mission
        </h2>
        <p className="text-xl md:text-2xl text-gray-100 leading-relaxed">
          To prove that second chances + hustle can build lasting freedom.  
          From Midland, Texas to the world, we light the way for the lost and the brave —  
          showing that tech, hustle, and resilience can uplift families, communities, and future generations.
        </p>
      </section>

      {/* Footer Logo */}
      <footer className="mt-16 flex flex-col items-center">
        <Image
          src="/assets/logos/logo.png"
          alt="Stackin Technologies Logo"
          width={150}
          height={150}
          className="drop-shadow-[0_0_30px_#facc15]"
        />
        <p className="mt-4 text-sm text-gray-400">
          © 2025 Stackin Technologies AO LLC — All Rights Reserved
        </p>
      </footer>
    </main>
  );
}
