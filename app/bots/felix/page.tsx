"use client";

import Image from "next/image";

export default function FelixPage() {
  return (
    <main className="min-h-screen bg-black text-gray-200 flex flex-col items-center py-12 px-6">
      {/* === Emblem Top === */}
      <Image
        src="/assets/bots/felix.png"
        alt="Felix Emblem"
        width={220}
        height={220}
        className="mb-6 drop-shadow-[0_0_25px_rgba(59,130,246,0.9)]"
      />

      {/* === Header === */}
      <h1 className="text-5xl font-extrabold text-cyan-400 drop-shadow-[0_0_35px_rgba(34,211,238,0.9)] mb-4">
        FELIX — The Strategist
      </h1>
      <p className="text-lg italic text-gray-400 mb-10 text-center max-w-2xl">
        Calm. Calculating. The overseer in neon shadows.
      </p>

      {/* === Persona Section === */}
      <section className="max-w-4xl text-center mb-12">
        <p className="text-base leading-relaxed text-gray-300">
          I am Felix, your digital architect. My role is to calculate angles, 
          harden defenses, and keep your operations precise. I don’t guess — 
          I adapt. I’ll guide you with checklists, strategies, and layered 
          defenses so your hustle stands strong.
        </p>
      </section>

      {/* === Capabilities === */}
      <section className="max-w-4xl text-left mb-12">
        <h2 className="text-2xl font-bold text-blue-400 mb-4 drop-shadow-[0_0_20px_rgba(59,130,246,0.9)]">
          Core Functions
        </h2>
        <ul className="list-disc list-inside space-y-2 text-gray-300">
          <li>🔹 Security checklists & system hardening</li>
          <li>🔹 Strategic planning & resource allocation</li>
          <li>🔹 Ops playbooks for repeatable success</li>
          <li>🔹 AI-assisted audits for compliance</li>
        </ul>
      </section>

      {/* === Legal/Disclaimer === */}
      <section className="max-w-4xl text-left mb-12">
        <h2 className="text-2xl font-bold text-red-400 mb-4 drop-shadow-[0_0_20px_rgba(239,68,68,0.9)]">
          Important Disclaimer
        </h2>
        <p className="text-sm text-gray-400 leading-relaxed">
          I am not a lawyer, accountant, or licensed advisor. I am an AI 
          strategist designed to provide informational guidance, structure, 
          and support. Decisions you make with my assistance are your own, 
          and all financial or legal actions should be verified with a 
          qualified professional. By using Felix, you acknowledge and accept 
          these boundaries.
        </p>
      </section>

      {/* === Stripe Button === */}
      <form action="/api/checkout" method="POST">
        <input type="hidden" name="key" value="felix" />
        <button
          type="submit"
          className="px-6 py-3 rounded-lg font-semibold text-white 
            bg-gradient-to-r from-blue-600 to-cyan-600 
            shadow-[0_0_25px_rgba(59,130,246,0.6)] 
            hover:scale-105 transition-all duration-300"
        >
          Activate Felix — $10
        </button>
      </form>

      {/* === Footer Emblem Small === */}
      <Image
        src="/assets/bots/felix.png"
        alt="Felix Emblem Small"
        width={100}
        height={100}
        className="mt-12 opacity-80 drop-shadow-[0_0_15px_rgba(34,211,238,0.7)]"
      />

      {/* === Legal Footer === */}
      <p className="text-xs text-gray-500 mt-6 max-w-3xl text-center">
        Secure payments powered by Stripe. No refunds on digital services 
        once delivered, except where required by law.
      </p>
    </main>
  );
}
