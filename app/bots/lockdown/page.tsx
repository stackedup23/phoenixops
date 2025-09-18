"use client";

import Image from "next/image";

export default function LockdownPage() {
  return (
    <main className="min-h-screen bg-black px-6 py-16 text-center space-y-12">

      {/* === Hero Image === */}
      <div className="flex justify-center mb-8">
        <Image
          src="/assets/bots/lockdown.png"
          alt="Lockdown Bot"
          width={220}
          height={220}
          className="drop-shadow-[0_0_35px_#22d3ee]"
        />
      </div>

      {/* === Title === */}
      <h1 className="text-white text-5xl font-extrabold drop-shadow-[0_0_20px_#22d3ee] mb-8">
        LOCKDOWN — The Sentinel
      </h1>

      {/* === Intro === */}
      <section className="card border-cyan-500 shadow-[0_0_25px_#22d3ee] space-y-4 max-w-3xl mx-auto">
        <p className="text-gray-200 italic">
          I stand at the gate. Every breach, every flaw, I catch before it breaks you.
        </p>
        <ul className="space-y-2 text-left">
          <li className="text-gray-100 drop-shadow-[0_0_10px_#22d3ee]">⚡ Compliance monitoring & auto-checklists</li>
          <li className="text-gray-100 drop-shadow-[0_0_10px_#22d3ee]">⚡ Real-time alerts & fallback scripts</li>
          <li className="text-gray-100 drop-shadow-[0_0_10px_#22d3ee]">⚡ Policy enforcement & audit logs</li>
        </ul>
        <button
          onClick={() => window.location.href="/api/checkout?priceId="+process.env.LOCKDOWN_PRICE_ID}
          className="btn-stripe mt-4"
        >
          Subscribe — $10/mo
        </button>
      </section>

      {/* === Footer Small Logo === */}
      <footer className="mt-20">
        <Image
          src="/assets/logos/logo.png"
          alt="PhoenixOps Logo Small"
          width={120}
          height={120}
          className="mx-auto drop-shadow-[0_0_25px_#22d3ee]"
        />
      </footer>
    </main>
  );
}
