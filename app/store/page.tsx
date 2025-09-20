"use client";

import Image from "next/image";
import { useState } from "react";

// === BOT KEYS =========================================================
type Key = "mia" | "lyra" | "reaper" | "felix" | "lockdown" | "torch" | "bingo";

// === STORE PAGE =======================================================
export default function StorePage() {
  const [loadingKey, setLoadingKey] = useState<Key | null>(null);

  // === STRIPE CHECKOUT HANDLER (Disabled in Demo Mode) ================
  // NOTE: Leaving here for later reactivation. Right now we disable buttons
  // and route everything to DemoBanner compliance mode.
  /*
  const buy = async (bot: Key) => {
    try {
      setLoadingKey(bot);
      const res = await fetch("/api/checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ bot }),
      });
      const data = await res.json();
      if (data?.url) window.location.href = data.url;
    } catch (e) {
      console.error("Checkout failed:", e);
    } finally {
      setLoadingKey(null);
    }
  };
  */

  // === CARD COMPONENT =================================================
  const Card = ({
    title,
    blurb,
    tagline,
    img,
    keyId,
  }: {
    title: string;
    blurb: string;
    tagline?: string;
    img: string;
    keyId: Key;
  }) => (
    <div className="card-stripe max-w-md mx-auto p-6 rounded-xl shadow-lg bg-black/50 border border-yellow-500/40">
      {/* Bot Image */}
      <Image
        src={img}
        alt={title}
        width={300}
        height={300}
        className="mx-auto rounded-md mb-4"
      />

      {/* Bot Title */}
      <h3 className="text-2xl font-bold text-white drop-shadow mb-2">
        {title}
      </h3>

      {/* Bot Description */}
      <p className="text-sm text-gray-300 mb-4">{blurb}</p>

      {/* Subscribe Button (Disabled in Demo Mode) */}
      <button
        disabled
        className="w-full px-6 py-3 rounded-lg font-semibold bg-gray-700 text-gray-400 cursor-not-allowed border border-gray-600"
      >
        🔒 Payments Disabled — Demo Only
      </button>

      {/* Optional Tagline */}
      {tagline && (
        <p className="mt-3 italic text-purple-300 text-xs">{tagline}</p>
      )}

      {/* Compliance Footer Note */}
      <p className="text-xs text-yellow-400 mt-3">
        ⚠️ Payments disabled pending Stripe & legal clearance.<br />
        PhoenixOps is EIN + D-U-N-S verified. Demo mode for funding review.
      </p>
    </div>
  );

  // === RENDER STORE ===================================================
  return (
    <div className="min-h-screen flex flex-col items-center pt-12 px-6">
      {/* Page Title */}
      <h1 className="text-4xl sm:text-5xl font-extrabold text-white mb-8">
        PhoenixOps Store
      </h1>

      {/* Grid of Bot Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-5xl">
        <Card
          title="MIA – AI Mental Health"
          blurb="Non-clinical AI support: journaling, coping prompts, guided self-reflection."
          tagline="Your steady companion in the storm."
          img="/assets/bots/mia.png"
          keyId="mia"
        />

        <Card
          title="LYRA – Finance & Analytics"
          blurb="Dashboards, budgets, and forecasts — insights for your growth."
          tagline="Turning numbers into navigation."
          img="/assets/bots/lira.png"
          keyId="lyra"
        />

        <Card
          title="REAPER – Ops & Field Bot"
          blurb="Scraping, tactical deployment, and field-ready automations."
          tagline="Silent, sharp, and precise."
          img="/assets/bots/reaper.png"
          keyId="reaper"
        />

        <Card
          title="FELIX – Security Chief"
          blurb="Security reviews, hardening checklists, ops playbooks."
          tagline="Overwatch in real-time."
          img="/assets/bots/felix.png"
          keyId="felix"
        />

        <Card
          title="LOCKDOWN – Sentinel Bot"
          blurb="Digital shield. Compliance, monitoring, and protection."
          tagline="The gatekeeper stands ready."
          img="/assets/bots/lockdown.png"
          keyId="lockdown"
        />

        <Card
          title="BINGO – Opportunity Bot"
          blurb="Entertainment and prosperity energy. The golden spark."
          tagline="Where fortune meets flow."
          img="/assets/bots/bingo.png"
          keyId="bingo"
        />

        <Card
          title="TORCH – Micro-Support"
          blurb="Fuel the flame. Monthly support keeps the squad alive."
          tagline="Keep the fire alive."
          img="/assets/bots/torch.png"
          keyId="torch"
        />
      </div>

      {/* Legal Footer */}
      <p className="text-xs text-gray-400 mt-10 max-w-3xl text-center">
        By subscribing, you agree that PhoenixOps bots are non-clinical,
        informational AI tools. No refunds once delivered, except where
        required by law. All bots are support systems — not medical, legal,
        or financial advisors. Use responsibly.
      </p>
    </div>
  );
}
