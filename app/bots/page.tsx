"use client";

import Image from "next/image";
import Link from "next/link";

/* ============================================================
   === PhoenixOps Bots Page (Full Squad Grid with Images) ===
   ============================================================ */
export default function BotsPage() {
  return (
    <main className="min-h-screen bg-black px-6 py-16 text-center space-y-16">
      {/* ================== Header ================== */}
      <section>
        <h1 className="text-5xl font-extrabold text-white drop-shadow-[0_0_30px_#f97316] mb-6">
          Meet the PhoenixOps Bots
        </h1>
        <p className="text-gray-300 text-lg italic">
          Every bot is live, active, and working its field.
        </p>
      </section>

      {/* ================== BOT GRID ================== */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-6xl mx-auto">
        {/* --- MIA --- */}
        <div className="card border-pink-500 shadow-[0_0_30px_#ec4899] p-6 rounded-xl">
          <Image
            src="/assets/bots/mia.png"
            alt="MIA Bot"
            width={180}
            height={180}
            className="mx-auto mb-4 drop-shadow-[0_0_25px_#ec4899]"
          />
          <h2 className="text-pink-400 text-2xl font-bold">MIA</h2>
          <p className="text-gray-200 mt-3">
            Core AI assistant for health and mission-critical automation.
          </p>
          <Link href="/bots/mia" className="btn-glow mt-6 inline-block">
            Meet MIA →
          </Link>
        </div>

        {/* --- LIRA --- */}
        <div className="card border-teal-500 shadow-[0_0_30px_#14f1d9] p-6 rounded-xl">
          <Image
            src="/assets/bots/lira.png"
            alt="LIRA Bot"
            width={180}
            height={180}
            className="mx-auto mb-4 drop-shadow-[0_0_25px_#14f1d9]"
          />
          <h2 className="text-teal-400 text-2xl font-bold">LIRA</h2>
          <p className="text-gray-200 mt-3">
            Finance & analytics bot — forecasting and financial growth.
          </p>
          <Link href="/bots/lira" className="btn-glow mt-6 inline-block">
            Meet LIRA →
          </Link>
        </div>

        {/* --- REAPER --- */}
        <div className="card border-red-500 shadow-[0_0_30px_#ef4444] p-6 rounded-xl">
          <Image
            src="/assets/bots/reaper.png"
            alt="REAPER Bot"
            width={180}
            height={180}
            className="mx-auto mb-4 drop-shadow-[0_0_25px_#ef4444]"
          />
          <h2 className="text-red-400 text-2xl font-bold">REAPER</h2>
          <p className="text-gray-200 mt-3">
            Ops & field bot — scraping, security, and tactical deployment.
          </p>
          <Link href="/bots/reaper" className="btn-glow mt-6 inline-block">
            Meet Reaper →
          </Link>
        </div>

        {/* --- FELIX --- */}
        <div className="card border-sky-500 shadow-[0_0_30px_#38bdf8] p-6 rounded-xl">
          <Image
            src="/assets/bots/felix.png"
            alt="FELIX Bot"
            width={180}
            height={180}
            className="mx-auto mb-4 drop-shadow-[0_0_25px_#38bdf8]"
          />
          <h2 className="text-sky-400 text-2xl font-bold">FELIX</h2>
          <p className="text-gray-200 mt-3">
            Security chief, automation architect, and system overwatch.
          </p>
          <Link href="/bots/felix" className="btn-glow mt-6 inline-block">
            Meet Felix →
          </Link>
        </div>

        {/* --- LOCKDOWN --- */}
        <div className="card border-yellow-500 shadow-[0_0_30px_#eab308] p-6 rounded-xl">
          <Image
            src="/assets/bots/lockdown.png"
            alt="LOCKDOWN Bot"
            width={180}
            height={180}
            className="mx-auto mb-4 drop-shadow-[0_0_25px_#eab308]"
          />
          <h2 className="text-yellow-400 text-2xl font-bold">LOCKDOWN</h2>
          <p className="text-gray-200 mt-3">
            Sentinel bot — compliance, monitoring, and digital defense.
          </p>
          <Link href="/bots/lockdown" className="btn-glow mt-6 inline-block">
            Meet Lockdown →
          </Link>
        </div>

        {/* --- TORCH --- */}
        <div className="card border-orange-500 shadow-[0_0_30px_#f97316] p-6 rounded-xl">
          <Image
            src="/assets/logos/torched.png"
            alt="TORCH Bot"
            width={180}
            height={180}
            className="mx-auto mb-4 drop-shadow-[0_0_25px_#f97316]"
          />
          <h2 className="text-orange-400 text-2xl font-bold">TORCH</h2>
          <p className="text-gray-200 mt-3">
            PhoenixOps micro-support — fuel to keep the fire alive.
          </p>
          <Link href="/bots/torch" className="btn-glow mt-6 inline-block">
            Meet Torch →
          </Link>
        </div>

        {/* --- BINGO --- */}
        <div className="card border-green-500 shadow-[0_0_30px_#22c55e] p-6 rounded-xl">
          <Image
            src="/assets/bots/bingo.png"
            alt="BINGO Bot"
            width={180}
            height={180}
            className="mx-auto mb-4 drop-shadow-[0_0_25px_#22c55e]"
          />
          <h2 className="text-green-400 text-2xl font-bold">BINGO</h2>
          <p className="text-gray-200 mt-3">
            Opportunity bot — where fortune meets flow, hustle meets luck.
          </p>
          <Link href="/bots/bingo" className="btn-glow mt-6 inline-block">
            Meet Bingo →
          </Link>
        </div>
      </section>
    </main>
  );
}
