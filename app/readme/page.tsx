"use client";

export default function ReadMe() {
  return (
    <main className="text-center text-gray-200 py-12 px-6">
      {/* === Header === */}
      <h1 className="text-4xl font-extrabold text-yellow-400 drop-shadow-[0_0_20px_#facc15]">
        ReadMe & Technical Overview
      </h1>
      <p className="mt-4 text-lg text-gray-400 italic">
        Infrastructure • AI Integration • Transparency
      </p>

      {/* === Purpose === */}
      <section className="mt-12 max-w-4xl mx-auto">
        <h2 className="text-2xl font-bold text-sky-400">📘 Purpose of This Project</h2>
        <p className="mt-4 text-gray-300">
          PhoenixOps is a demonstration of automation, resilience, and
          hustle strategy. It is both a storefront and a portfolio,
          proving legitimacy to banks, partners, and funders.
        </p>
      </section>

      {/* === AI Integration === */}
      <section className="mt-12 max-w-4xl mx-auto">
        <h2 className="text-2xl font-bold text-teal-400">🤖 AI Systems & Bots</h2>
        <p className="mt-4 text-gray-300">
          Powered by AI agents (Felix, Mia, Lira, Reaper, Bingo), each bot
          represents a focused domain: automation, finance, ops, or creativity.
          Together, they form a modular AI stack.
        </p>
      </section>

      {/* === Disclaimer === */}
      <section className="mt-12 max-w-4xl mx-auto">
        <h2 className="text-2xl font-bold text-red-400">⚠️ Disclaimer</h2>
        <p className="mt-4 text-gray-300">
          This site is built with transparency but may include projections
          and roadmap content that are forward-looking. Nothing here
          constitutes financial or legal advice.
        </p>
      </section>
    </main>
  );
}
