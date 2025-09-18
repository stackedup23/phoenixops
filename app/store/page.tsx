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
    tagline,
    img,
    priceId,
    keyId,
  }: {
    title: string;
    blurb: string;
    tagline?: string;
    img: string;
    priceId: string;
    keyId: Key;
  }) => (
    <div className="card-stripe max-w-md mx-auto p-6 rounded-xl">
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
      <p className="text-sm text-gray-300 mb-4">{blurb}</p>

      <button
        onClick={() => buy(priceId, keyId)}
        disabled={loadingKey === keyId}
        className="btn-stripe w-full disabled:opacity-60 disabled:cursor-not-allowed"
      >
        {loadingKey === keyId ? "Processing..." : "Subscribe — $10/mo"}
      </button>

      {tagline && (
        <p className="mt-3 italic text-purple-300 text-xs drop-shadow-[0_0_12px_rgba(168,85,247,0.7)]">
          {tagline}
        </p>
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
          blurb="Non-clinical AI support: journaling, coping prompts, guided self-reflection."
          tagline="Your steady companion in the storm."
          img="/assets/bots/mia.png"
          priceId={process.env.MIA_PRICE_ID as string}
          keyId="mia"
        />
        <Card
          title="LYRA – Finance & Analytics Bot"
          blurb="Dashboards, budgets, and forecasts — insights for your growth."
          tagline="Turning numbers into navigation."
          img="/assets/bots/lira.png"
          priceId={process.env.LYRA_PRICE_ID as string}
          keyId="lyra"
        />
        <Card
          title="REAPER – Ops & Field Bot"
          blurb="Scraping, tactical deployment, and field-ready automations."
          tagline="Silent, sharp, and precise."
          img="/assets/bots/reaper.png"
          priceId={process.env.REAPER_PRICE_ID as string}
          keyId="reaper"
        />
        <Card
          title="FELIX – Security Chief / Architect"
          blurb="Security reviews, hardening checklists, ops playbooks."
          tagline="Overwatch in real-time."
          img="/assets/bots/felix.png"
          priceId={process.env.FELIX_PRICE_ID as string}
          keyId="felix"
        />
        <Card
          title="LOCKDOWN – Sentinel Bot"
          blurb="Digital shield. Compliance, monitoring, and protection."
          tagline="The gatekeeper stands ready."
          img="/assets/bots/lockdown.png"
          priceId={process.env.LOCKDOWN_PRICE_ID as string}
          keyId="lockdown"
        />
        <Card
          title="BINGO – Opportunity Bot"
          blurb="Entertainment and prosperity energy. The golden spark."
          tagline="Where fortune meets flow."
          img="/assets/bots/bingo.png"
          priceId={process.env.BINGO_PRICE_ID as string}
          keyId="bingo"
        />
        <Card
          title="TORCH – PhoenixOps Micro-Support"
          blurb="Fuel the flame. Monthly support keeps the squad alive."
          tagline="Keep the fire alive."
          img="/assets/bots/torch.png"
          priceId={process.env.TORCH_PRICE_ID as string}
          keyId="torch"
        />
      </div>

      {/* === FOOTER LEGAL === */}
      <p className="text-xs text-gray-400 mt-10 max-w-3xl text-center">
        By subscribing, you agree that PhoenixOps bots are non-clinical,
        informational AI tools. No refunds once delivered, except where
        required by law. All bots are support systems — not medical, legal,
        or financial advisors. Use responsibly.
      </p>
    </div>
  );
}


