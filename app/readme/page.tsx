"use client";

export default function ReadMe() {
  return (
    <main className="min-h-screen bg-black px-6 py-16 text-center space-y-16">
      {/* === HEADER SECTION === */}
      <header>
        <h1 className="text-5xl md:text-6xl font-extrabold text-white drop-shadow-[0_0_30px_orange] mb-6">
          ReadMe & Overview
        </h1>
        <p className="text-lg text-gray-300 italic">
          Stackin Technologies AO LLC • PhoenixOps Division
        </p>
      </header>

      {/* === COMPANY INFO === */}
      <section className="card border-teal-500 shadow-[0_0_35px_#14f1d9]">
        <h2 className="text-3xl font-bold text-white drop-shadow-[0_0_25px_orange]">
          Stackin Technologies AO LLC
        </h2>
        <p className="text-gray-200 mt-4">
          Minority-owned, Midland TX. Focused on automation, AI deployment, and
          building hustler lanes for small businesses and communities.
        </p>
      </section>

      {/* === BOTS SECTION === */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="card border-sky-500 shadow-[0_0_35px_#38bdf8]">
          <h3 className="text-2xl font-bold text-white drop-shadow-[0_0_25px_skyblue]">
            Felix
          </h3>
          <p className="text-gray-200 mt-2">Strategy • Structure • Guidance</p>
        </div>
        <div className="card border-pink-500 shadow-[0_0_35px_#ec4899]">
          <h3 className="text-2xl font-bold text-white drop-shadow-[0_0_25px_hotpink]">
            Mia
          </h3>
          <p className="text-gray-200 mt-2">Compliance • Healthcare Ops</p>
        </div>
        <div className="card border-teal-400 shadow-[0_0_35px_#14f1d9]">
          <h3 className="text-2xl font-bold text-white drop-shadow-[0_0_25px_teal]">
            Lira
          </h3>
          <p className="text-gray-200 mt-2">Finance • Revenue Automation</p>
        </div>
        <div className="card border-red-500 shadow-[0_0_35px_#ef4444]">
          <h3 className="text-2xl font-bold text-white drop-shadow-[0_0_25px_red]">
            Reaper
          </h3>
          <p className="text-gray-200 mt-2">Security • Data Ops</p>
        </div>
        <div className="card border-yellow-500 shadow-[0_0_35px_#facc15] col-span-1 md:col-span-2">
          <h3 className="text-2xl font-bold text-white drop-shadow-[0_0_25px_gold]">
            Bingo
          </h3>
          <p className="text-gray-200 mt-2">Creative Flips • New Lanes</p>
        </div>
      </section>

      {/* === MISSION === */}
      <section className="card border-orange-500 shadow-[0_0_35px_#f97316]">
        <h2 className="text-3xl font-bold text-white drop-shadow-[0_0_25px_orange]">
          Our Mission
        </h2>
        <p className="text-gray-200 mt-4">
          Bring AI to overlooked spaces. Build streams across digital and
          physical hustles. Keep operations lean, fast, and independent.
        </p>
      </section>

      {/* === CLOSER === */}
      <footer className="card border-lime-500 shadow-[0_0_35px_#22c55e]">
        <h2 className="text-2xl font-bold text-white drop-shadow-[0_0_25px_lime]">
          Statement
        </h2>
        <p className="text-gray-200 mt-4 italic">
          “We don’t just run systems — we build lanes for survival, freedom, and
          growth.”
        </p>
      </footer>
    </main>
  );
}
