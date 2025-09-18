"use client";

import Link from "next/link";

export default function BoxPage() {
  return (
    <main className="min-h-screen bg-black px-6 py-16 text-center space-y-16">

      {/* ================= BOTS GRID ================= */}
      <section className="grid grid-cols-1 md:grid-cols-4 gap-10 max-w-7xl mx-auto">

        {/* --- MIA --- */}
        <div className="card border-pink-500 shadow-[0_0_30px_#ec4899]">
          <h2 className="header-yellow">MIA</h2>
          <p className="body-green mt-4">
            Core AI automation assistant — medical + mission critical.
          </p>
          <Link
            href="/bots/mia"
            className="btn-glow mt-6 inline-block"
          >
            Meet MIA →
          </Link>
        </div>

        {/* --- LIRA --- */}
        <div className="card border-teal-500 shadow-[0_0_30px_#14f1d9]">
          <h2 className="header-yellow">LIRA</h2>
          <p className="body-green mt-4">
            Finance & analytics bot — tracking growth and scale.
          </p>
          <Link
            href="/bots/lira"
            className="btn-glow mt-6 inline-block"
          >
            Meet LIRA →
          </Link>
        </div>

        {/* --- REAPER --- */}
        <div className="card border-red-500 shadow-[0_0_30px_#ef4444]">
          <h2 className="header-yellow">REAPER</h2>
          <p className="body-green mt-4">
            Ops + field bot — security, scraping, tactical deployment.
          </p>
          <Link
            href="/bots/reaper"
            className="btn-glow mt-6 inline-block"
          >
            Meet Reaper →
          </Link>
        </div>

        {/* --- FELIX --- */}
        <div className="card border-sky-500 shadow-[0_0_30px_#38bdf8]">
          <h2 className="header-yellow">FELIX</h2>
          <p className="body-green mt-4">
            Security Chief • Automation Architect • Overwatch AI.
          </p>
          <Link
            href="/bots/felix"
            className="btn-glow mt-6 inline-block"
          >
            Meet Felix →
          </Link>
        </div>
      </section>
    </main>
  );
}
