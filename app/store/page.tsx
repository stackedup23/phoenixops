"use client";

import Image from "next/image";
import { useState } from "react";

type Key = "mia" | "lyra" | "reaper" | "felix" | "lockdown" | "torch" | "bingo";

export default function StorePage() {
  const [loadingKey, setLoadingKey] = useState<Key | null>(null);

  // === STRIPE CHECKOUT HANDLER ===
  const buy = async (priceId: string, key: Key) => {
    try {
      setLoadingKey(key);
      const res = await fetch("/api/checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ priceId }),
      });
      const data = await res.json();
      if (data?.url) window.location.href = data.url;
    } catch (e) {
      console.error("Checkout failed:", e);
    } finally {
      setLoadingKey(null);
    }
  };

  // === CARD COMPONENT ===
  const Card = ({
    title,
    blurb,
    img,
    priceId,
    keyId,
    disabled,
  }: {
    title: string;
    blurb: string;
    img: string;
    priceId?: string;
    keyId: Key;
    disabled?: boolean;
  }) => (
    <div className="card max-w-md mx-auto p-6 rounded-xl border border-purple-700 bg-gradient-to-b from-purple-900 via-purple-950 to-black shadow-[0_0_25px_rgba(168,85,247,0.3)]">
      <Image
        src={img}
        alt={title}
        width={300}
        height={300}
        className="mx-auto rounded-md mb-4"
      />
      <h3 className="text-2xl font-bold text-white drop-shadow-[0_0_15px_rgba(168,85,247,0.6)] mb-2">
        {title}
      </h3>
      <p className="text-sm text-gray-300 mb-6">{blurb}</p>

      {!disabled && priceId ? (
        <button
          onClick={() => buy(priceId, keyId)}
          disabled={loadingKey === keyId}
          className="px-5 py-3 rounded-lg text-sm font-semibold text-white bg-gradient-to-r from-purple-600 to-purple-800 shadow-[0_10px_25px_rgba(168,85,247,0.25)] transition-all duration-300 ease-out disabled:opacity-60 disabled:cursor-not-allowed"
        >
          {loadingKey === keyId ? "Processing..." : "Buy Now – $10"}
        </button>
      ) : (
        <button
          disabled
          className="px-5 py-3 rounded-lg text-sm font-semibold text-gray-500 bg-gray-800 border border-gray-700 cursor-not-allowed"
        >
          Coming Soon
        </button>
      )}

      <p className="text-xs text-gray-400 mt-3">
        Secure payments powered by{" "}
        <span className="text-purple-300 font-semibold">Stripe</span>.
      </p>
    </div>
  );

  // === STORE PAGE ===
  return (
    <div className="min-h-screen flex flex-col items-center pt-12 px-6">
      <h1 className="text-4xl sm:text-5xl font-extrabold text-white drop-shadow-[0_0_25px_rgba(147,51,234,0.6)] mb-8">
        PhoenixOps Store
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-5xl">
        {/* === ACTIVE PRODUCTS === */}
        <Card
          title="MIA – AI Mental Health & Wellness"
          blurb="Non-clinical AI support. Guidance, journaling, coping prompts."
          img="/assets/bots/mia.png"
          priceId={process.env.MIA_PRICE_ID}
          keyId="mia"
        />
        <Card
          title="LYRA – Finance & Analytics Bot"
          blurb="Dashboards, budgets, and insights for your hustles."
          img="/assets/bots/lira.png"
          priceId={process.env.LYRA_PRICE_ID}
          keyId="lyra"
        />
        <Card
          title="REAPER – Ops & Field Bot"
          blurb="Scraping, tactical deployment, automations, field tools."
          img="/assets/bots/reaper.png"
          priceId={process.env.REAPER_PRICE_ID}
          keyId="reaper"
        />
        <Card
          title="FELIX – Security Chief / Architect"
          blurb="Sec reviews, hardening checklists, ops playbooks."
          img="/assets/bots/felix.png"
          priceId={process.env.FELIX_PRICE_ID}
          keyId="felix"
        />

        {/* === COMING SOON PRODUCTS === */}
        <Card
          title="LOCKDOWN – Sentinel Bot"
          blurb="Digital shield. Compliance, monitoring, and protection."
          img="/assets/bots/lockdown.png"
          keyId="lockdown"
          disabled
        />
        <Card
          title="BINGO – Hustle Bot"
          blurb="Entertainment and prosperity energy. The golden hustler."
          img="/assets/bots/bingo.png"
          keyId="bingo"
          disabled
        />
        <Card
          title="TORCH – PhoenixOps Micro-Support"
          blurb="Fuel the flame. Monthly support keeps the squad alive."
          img="/assets/bots/torch.png"
          keyId="torch"
          disabled
        />
      </div>

      {/* === FOOTER LEGAL === */}
      <p className="text-xs text-gray-400 mt-10 max-w-3xl text-center">
        By purchasing, you agree that these are non-clinical, informational AI
        tools. No refunds on digital services once delivered, except where
        required by law.
      </p>
    </div>
  );
}
