"use client";

import Link from "next/link";

export default function RevenueStrategy() {
  return (
    <main className="text-center text-gray-200 py-12 px-6">
      {/* === Header === */}
      <h1 className="text-4xl font-extrabold text-yellow-400 drop-shadow-[0_0_20px_#facc15]">
        Revenue & Resilience Strategy
      </h1>
      <p className="mt-4 text-lg text-gray-400 italic">
        Multi-stream income plan • Global outlook • Future-proof resilience
      </p>

      {/* === Global Markets === */}
      <section className="mt-12 max-w-4xl mx-auto">
        <h2 className="text-2xl font-bold text-teal-400">🌍 Targeting Global Markets</h2>
        <p className="mt-4 text-gray-300">
          We prioritize <span className="text-yellow-300">overseas countries</span> with
          low AI or computer integration. By modernizing equipment, automating workflows,
          and upgrading banking/accounting systems, we grow in high-demand regions.
          Examples: <span className="text-sky-300">Estonia</span>, rural EU states,
          and underserved microtowns worldwide.
        </p>
      </section>

      {/* === AI Integration === */}
      <section className="mt-12 max-w-4xl mx-auto">
        <h2 className="text-2xl font-bold text-purple-400">🤖 AI Integration for Small Biz</h2>
        <p className="mt-4 text-gray-300">
          We help small businesses adopt AI: website builds, portfolio upgrades,
          automation workflows, and digital assistants — bridging traditional
          businesses into the modern market.
        </p>
      </section>

      {/* === Hustle Streams === */}
      <section className="mt-12 max-w-4xl mx-auto">
        <h2 className="text-2xl font-bold text-pink-400">💸 Multi-Stream Hustles</h2>
        <ul className="mt-4 space-y-3 text-left text-gray-300">
          <li>• Crypto trading, day trading, and mining operations</li>
          <li>• AI contract work and enterprise automation</li>
          <li>• Creative product sales (Etsy, digital drops)</li>
          <li>• Local services (lawn care, repairs, garage work)</li>
          <li>• Partnerships with companies developing AI</li>
        </ul>
      </section>

      {/* === Fallback Plan === */}
      <section className="mt-12 max-w-4xl mx-auto">
        <h2 className="text-2xl font-bold text-red-400">🛡️ Fallback Resilience</h2>
        <p className="mt-4 text-gray-300">
          If markets dip or the dollar weakens, we shift into{" "}
          <span className="text-green-400">cryptocurrency, barter systems,
          and multiple hustle lanes</span>. This ensures resilience across economies.
        </p>
      </section>

      {/* === CTA === */}
      <div className="mt-12">
        <Link
          href="/contact"
          className="px-6 py-3 bg-yellow-400 text-black font-bold rounded-lg hover:bg-teal-400 drop-shadow-[0_0_20px_#facc15]"
        >
          Let’s Build Together →
        </Link>
      </div>
    </main>
  );
}
