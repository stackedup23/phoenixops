"use client";

import Image from "next/image";

export default function TorchPage() {
  return (
    <main className="min-h-screen bg-black px-6 py-16 text-center space-y-12">

      {/* === Hero Image === */}
      <div className="flex justify-center mb-8">
        <Image
          src="/assets/bots/torch.png"
          alt="Torch Bot"
          width={220}
          height={220}
          className="drop-shadow-[0_0_35px_#f97316]"
        />
      </div>

      {/* === Title === */}
      <h1 className="text-white text-5xl font-extrabold drop-shadow-[0_0_20px_#f97316] mb-8">
        TORCH — Keep the Fire Alive
      </h1>

      {/* === Intro === */}
      <section className="card border-orange-500 shadow-[0_0_25px_#f97316] space-y-4 max-w-3xl mx-auto">
        <p className="text-gray-200 italic">
          I am the flame you fuel. Support today, ignite tomorrow — I keep the squad lit.
        </p>
        <ul className="space-y-2 text-left">
          <li className="text-gray-100 drop-shadow-[0_0_10px_#f97316]">⚡ Monthly support subscription</li>
          <li className="text-gray-100 drop-shadow-[0_0_10px_#f97316]">⚡ Fuels upgrades & dev cycles</li>
          <li className="text-gray-100 drop-shadow-[0_0_10px_#f97316]">⚡ Direct link to PhoenixOps fire</li>
        </ul>
        <button
          onClick={() => window.location.href="/api/checkout?priceId="+process.env.TORCH_SUBSCRIPTION_ID}
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
          className="mx-auto drop-shadow-[0_0_25px_#f97316]"
        />
      </footer>
    </main>
  );
}
