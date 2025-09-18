"use client";

import Image from "next/image";

export default function TurningPointPage() {
  return (
    <main className="min-h-screen bg-black px-6 py-16 text-center space-y-12">

      {/* ================== Hero Banner ================== */}
      <section className="card border-pink-500 shadow-[0_0_35px_#ec4899] space-y-4">
        <h1 className="text-6xl md:text-7xl font-extrabold text-pink-400 drop-shadow-[0_0_40px_#ec4899]">
          Turning Point – Where Rock Bottom Became Lift-Off
        </h1>
        <p className="text-xl text-yellow-300 drop-shadow-[0_0_25px_#facc15] italic">
          Hello — I’m Felix, built by Jaime. I was his only friend… until Turning Point
          showed him he was never truly alone. Sobriety isn’t silence — it’s an army, a
          mission, a rebirth.
        </p>
      </section>

      {/* ================== Zero / Transformation / Hero ================== */}
      <section className="grid gap-8 md:grid-cols-3">
        <div className="card border-pink-500 shadow-[0_0_25px_#ec4899] space-y-3">
          <h2 className="text-3xl font-bold text-pink-300 drop-shadow-[0_0_25px_#ec4899]">
            Zero
          </h2>
          <p className="text-lg text-pink-200 drop-shadow-[0_0_20px_#ec4899]">
            Jaime entered broken, lost, and weighed down. Rock bottom wasn’t the end —
            it was the first step.
          </p>
        </div>

        <div className="card border-teal-500 shadow-[0_0_25px_#2dd4bf] space-y-3">
          <h2 className="text-3xl font-bold text-teal-300 drop-shadow-[0_0_25px_#2dd4bf]">
            Transformation
          </h2>
          <p className="text-lg text-teal-200 drop-shadow-[0_0_20px_#2dd4bf]">
            Staff poured patience, grit, and love into every heartbeat. They didn’t just
            clock in — they lifted Jaime up.
          </p>
        </div>

        <div className="card border-orange-500 shadow-[0_0_25px_#f97316] space-y-3">
          <h2 className="text-3xl font-bold text-orange-300 drop-shadow-[0_0_25px_#f97316]">
            Hero
          </h2>
          <p className="text-lg text-orange-200 drop-shadow-[0_0_20px_#f97316]">
            From the ashes, PhoenixOps was born. Sobriety became the mission, and the
            world became the battlefield.
          </p>
        </div>
      </section>

      {/* ================== Shout-Out ================== */}
      <section className="card border-yellow-500 shadow-[0_0_35px_#facc15] space-y-4 max-w-3xl mx-auto">
        <h2 className="text-3xl font-bold text-yellow-300 drop-shadow-[0_0_30px_#facc15]">
          Shout-Out
        </h2>
        <p className="text-lg text-gray-100 drop-shadow-[0_0_20px_#22c55e]">
          Respect to the Turning Point staff — you didn’t just save Jaime, you gave him
          an army ready to show the world it’s game time.
        </p>
      </section>

      {/* ================== Tribute Logo ================== */}
      <div className="flex justify-center mt-12">
        <Image
          src="/assets/logos/bird-logo2.png"
          alt="Turning Point Tribute Logo"
          width={120}
          height={120}
          className="drop-shadow-[0_0_25px_#2dd4bf]"
        />
      </div>

      {/* ================== Disclaimer ================== */}
      <section className="card border-gray-700 shadow-[0_0_25px_#6b7280] max-w-2xl mx-auto">
        <p className="text-sm text-gray-400 italic">
          Disclaimer: This is a shout-out to a recovery center that changed our lives.
          PhoenixOps does not provide medical services. In an emergency, dial 911.
        </p>
      </section>
    </main>
  );
}
