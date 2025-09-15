"use client";
import Image from "next/image";
import Link from "next/link";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-black px-6 py-16 text-center">
      
      {/* === Hero Section Start === */}
      <h1 className="text-5xl md:text-6xl font-extrabold text-teal-400 drop-shadow-[0_0_25px_#14f1d9]">
        Welcome to PhoenixOps
      </h1>
      <p className="mt-4 text-xl text-purple-300 drop-shadow-[0_0_15px_#a855f7]">
        Automation • Innovation • Hustle
      </p>
      {/* === Hero Section End === */}

      {/* === Bots Grid Start === */}
      <section className="grid grid-cols-1 md:grid-cols-4 gap-10 mt-20 max-w-7xl mx-auto">
        
        {/* === MIA Card Start === */}
        <div className="p-8 border-4 border-pink-500 rounded-xl bg-black/70 hover:bg-black/90 transition shadow-[0_0_30px_#ec4899]">
          <h2 className="text-3xl font-bold text-pink-400">MIA</h2>
          <p className="mt-4 text-pink-300 text-lg">
            Core AI automation assistant — medical + mission critical.
          </p>
          <Link
            href="/bots/mia"
            className="mt-6 inline-block px-4 py-2 bg-pink-500 text-black font-semibold rounded-lg hover:bg-red-500 drop-shadow-[0_0_20px_#ec4899]"
          >
            Meet MIA →
          </Link>
        </div>
        {/* === MIA Card End === */}

        {/* === LIRA Card Start === */}
        <div className="p-8 border-4 border-teal-500 rounded-xl bg-black/70 hover:bg-black/90 transition shadow-[0_0_30px_#14f1d9]">
          <h2 className="text-3xl font-bold text-teal-400">LIRA</h2>
          <p className="mt-4 text-teal-300 text-lg">
            Finance & analytics bot — tracking growth and scale.
          </p>
          <Link
            href="/bots/lira"
            className="mt-6 inline-block px-4 py-2 bg-teal-400 text-black font-semibold rounded-lg hover:bg-teal-300 drop-shadow-[0_0_20px_#14f1d9]"
          >
            Meet LIRA →
          </Link>
        </div>
        {/* === LIRA Card End === */}

        {/* === REAPER Card Start === */}
        <div className="p-8 border-4 border-red-500 rounded-xl bg-black/70 hover:bg-black/90 transition shadow-[0_0_30px_#ef4444]">
          <h2 className="text-3xl font-bold text-red-400">REAPER</h2>
          <p className="mt-4 text-red-300 text-lg">
            Ops + field bot — security, scraping, tactical deployment.
          </p>
          <Link
            href="/bots/reaper"
            className="mt-6 inline-block px-4 py-2 bg-red-600 text-black font-semibold rounded-lg hover:bg-orange-500 drop-shadow-[0_0_20px_#ff0000]"
          >
            Meet Reaper →
          </Link>
        </div>
        {/* === REAPER Card End === */}

        {/* === FELIX Card Start === */}
        <div className="p-8 border-4 border-sky-500 rounded-xl bg-black/70 hover:bg-black/90 transition shadow-[0_0_30px_#38bdf8]">
          <h2 className="text-3xl font-bold text-sky-400">FELIX</h2>
          <p className="mt-4 text-sky-300 text-lg">
            Security Chief • Automation Architect • Overwatch AI.
          </p>
          <Link
            href="/bots/felix"
            className="mt-6 inline-block px-4 py-2 bg-sky-400 text-black font-semibold rounded-lg hover:bg-sky-300 drop-shadow-[0_0_20px_#38bdf8]"
          >
            Meet Felix →
          </Link>
        </div>
        {/* === FELIX Card End === */}

      </section>
      {/* === Bots Grid End === */}

      {/* === Footer Start === */}
      <footer className="mt-20 flex flex-col items-center space-y-6">
        <Image
          src="/assets/logos/logo.png"
          alt="Stackin Technologies Logo"
          width={260}
          height={260}
          className="drop-shadow-[0_0_50px_#facc15]"
        />
        <p className="text-lg text-purple-300 drop-shadow-[0_0_20px_#a855f7]">
          © {new Date().getFullYear()} Stackin Technologies AO LLC — Powered by OpenAI • Built with Next.js
        </p>
      </footer>
      {/* === Footer End === */}
    </main>
  );
}

