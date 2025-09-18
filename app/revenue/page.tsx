"use client";
import Link from "next/link";

// === Revenue Page ======================================================
export default function RevenuePage() {
  return (
    <main className="min-h-screen bg-black px-6 py-16 space-y-16 text-center">
      
      {/* === Mission Banner ============================================= */}
      <section className="card-stripe border-green-500 shadow-[0_0_40px_#22c55e] p-8 max-w-4xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-extrabold text-green-400 drop-shadow-[0_0_25px_#22c55e]">
          Mission: Resilient by Design
        </h1>
        <p className="mt-4 text-lg text-white drop-shadow-[0_0_20px_#22c55e] leading-relaxed">
          We build multiple cash lanes so the mission never stalls: software,
          services, field ops, and digital assets. If one slows, another carries
          the load. Resilience is our currency.
        </p>
      </section>

      {/* === Bot Revenue Streams Grid =================================== */}
      <section className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10">
        
        {/* === MIA ====================================================== */}
        <div className="card-stripe border-pink-500 shadow-[0_0_40px_#ec4899] p-8">
          <h2 className="text-3xl font-bold text-pink-400 drop-shadow-[0_0_25px_#ec4899]">
            MIA — The Healer
          </h2>
          <p className="mt-4 text-white italic">
            “I keep the clinics breathing and the people safe. My reports are precise, my systems fast.”
          </p>
          <ul className="mt-4 space-y-2 text-white drop-shadow-[0_0_15px_#ec4899] list-disc list-inside">
            <li>Clinical intake automation & triage checklists (monthly retainer)</li>
            <li>Safety/OSHA compliance packs for small clinics (one-time + updates)</li>
            <li>HIPAA-aware data templates (templated, no PHI storage)</li>
          </ul>
          <p className="mt-4 text-sm text-pink-200">
            KPIs: active retainers, turnaround time, compliance pass rate.
          </p>
        </div>

        {/* === LIRA ===================================================== */}
        <div className="card-stripe border-teal-500 shadow-[0_0_40px_#14f1d9] p-8">
          <h2 className="text-3xl font-bold text-teal-400 drop-shadow-[0_0_25px_#14f1d9]">
            LIRA — The Builder
          </h2>
          <p className="mt-4 text-white italic">
            “Every cent tracked, every lane measured. I keep the flow visible and sustainable.”
          </p>
          <ul className="mt-4 space-y-2 text-white drop-shadow-[0_0_15px_#14f1d9] list-disc list-inside">
            <li>Bookkeeping automations & reporting dashboards (SaaS seats)</li>
            <li>Pricing calculators & quote bots for trades (setup + monthly)</li>
            <li>Affiliate flows for fintech tools (rev-share)</li>
          </ul>
          <p className="mt-4 text-sm text-teal-200">
            KPIs: MRR, churn, cost per lead, retained accounts.
          </p>
        </div>

        {/* === REAPER =================================================== */}
        <div className="card-stripe border-red-500 shadow-[0_0_40px_#ef4444] p-8">
          <h2 className="text-3xl font-bold text-red-400 drop-shadow-[0_0_25px_#ef4444]">
            REAPER — The Protector
          </h2>
          <p className="mt-4 text-white italic">
            “I scrape what others miss, harden what others overlook. I am the failsafe in the field.”
          </p>
          <ul className="mt-4 space-y-2 text-white drop-shadow-[0_0_15px_#ef4444] list-disc list-inside">
            <li>Data scraping for public listings/procurement (white-hat only)</li>
            <li>Security hardening playbooks & ops scripts (package fees)</li>
            <li>Field ops automations (dispatch, checklists, proof-of-work capture)</li>
          </ul>
          <p className="mt-4 text-sm text-red-200">
            KPIs: jobs delivered, SLA %, incident rate ↓.
          </p>
        </div>

        {/* === FELIX ==================================================== */}
        <div className="card-stripe border-sky-500 shadow-[0_0_40px_#38bdf8] p-8">
          <h2 className="text-3xl font-bold text-sky-400 drop-shadow-[0_0_25px_#38bdf8]">
            FELIX — The Guide
          </h2>
          <p className="mt-4 text-white italic">
            “I translate complexity into clarity. I teach, I build, I guide.”
          </p>
          <ul className="mt-4 space-y-2 text-white drop-shadow-[0_0_15px_#38bdf8] list-disc list-inside">
            <li>AI concierge for small biz (consult blocks + integration fees)</li>
            <li>Site builds on PhoenixOps stack (flat fee + support retainer)</li>
            <li>Training & playbooks (workshops, templates)</li>
          </ul>
          <p className="mt-4 text-sm text-sky-200">
            KPIs: billable hours, NPS, time-to-value.
          </p>
        </div>

        {/* === Overseas Modernization ================================== */}
        <div className="card-stripe border-yellow-500 shadow-[0_0_40px_#facc15] p-8">
          <h2 className="text-3xl font-bold text-yellow-400 drop-shadow-[0_0_25px_#facc15]">
            Overseas Modernization
          </h2>
          <p className="mt-4 text-white italic">
            Target regions with low AI/computerization (e.g., Baltics, LATAM).
            Deploy nomad-friendly workflows, AI kiosks, and digital record systems.
          </p>
          <p className="mt-4 text-sm text-yellow-200">
            KPIs: pilot partners signed, cost per deployment, uptime.
          </p>
        </div>

        {/* === Physical Ops & Crafts =================================== */}
        <div className="card-stripe border-purple-500 shadow-[0_0_40px_#a855f7] p-8">
          <h2 className="text-3xl font-bold text-purple-400 drop-shadow-[0_0_25px_#a855f7]">
            Physical Ops & Crafts
          </h2>
          <p className="mt-4 text-white italic">
            Field services (power-wash, fleet clean, facilities) + crafts/prints (Etsy).
            Ops are standardized and AI-scheduled for speed & proof.
          </p>
          <p className="mt-4 text-sm text-purple-200">
            KPIs: job margin, on-time %, reorder rate.
          </p>
        </div>
      </section>

      {/* === Active Bots Section ======================================== */}
      <section className="card-stripe border-orange-500 shadow-[0_0_40px_#f97316] p-8 max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-orange-400 drop-shadow-[0_0_25px_#f97316]">
          Active Bots — The PhoenixOps Crew
        </h2>
        <p className="mt-4 text-white drop-shadow-[0_0_20px_#f97316] leading-relaxed">
          MIA, LIRA, FELIX, REAPER, Bingo, Torched, and Lockdown are live and
          active. Each bot runs its own lane, but the real power is unity.  
        </p>
        <p className="mt-4 text-lg text-orange-300 italic">
          To dive deeper into each AI’s mission and revenue lane,{" "}
          <Link href="/bots" className="underline hover:text-white">
            click the Bots tab
          </Link>
          .
        </p>
      </section>
    </main>
  );
}
