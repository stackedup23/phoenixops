"use client";
import Link from "next/link";

export default function RevenuePage() {
  return (
    <main className="min-h-screen bg-black text-gray-100 px-6 py-14">
      {/* === Hero ============================================================ */}
      <section className="max-w-5xl mx-auto text-center mb-14">
        <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight
                       text-yellow-400 drop-shadow-[0_0_30px_#facc15]">
          Revenue Plan 2025 — Multistream & Resilient
        </h1>
        <p className="mt-4 text-lg text-teal-300/90">
          We build multiple cash lanes so the mission never stalls: software, services, field ops,
          and digital assets. If one lane slows, another carries the load.
        </p>
      </section>

      {/* === Streams Grid ==================================================== */}
      <section className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* MIA */}
        <div className="rounded-2xl border border-pink-500/40 bg-white/5 p-6 shadow-[0_0_30px_#ec489955]">
          <h2 className="text-2xl font-bold text-pink-400">MIA — The Healer</h2>
          <ul className="mt-3 space-y-2 text-pink-100/90">
            <li>• Clinical intake automation & triage checklists (monthly retainer)</li>
            <li>• Safety/OSHA compliance packs for small clinics (one-time + updates)</li>
            <li>• HIPAA-aware data templates (templated, no PHI storage)</li>
          </ul>
          <div className="mt-4 text-sm text-pink-200/80">
            KPIs: active retainers, turnaround time, compliance pass rate.
          </div>
        </div>

        {/* LIRA */}
        <div className="rounded-2xl border border-teal-500/40 bg-white/5 p-6 shadow-[0_0_30px_#14f1d955]">
          <h2 className="text-2xl font-bold text-teal-400">LIRA — The Builder</h2>
          <ul className="mt-3 space-y-2 text-teal-100/90">
            <li>• Bookkeeping automations & reporting dashboards (SaaS seats)</li>
            <li>• Pricing calculators & quote bots for trades (setup + monthly)</li>
            <li>• Affiliate flows for fintech tools (rev-share)</li>
          </ul>
          <div className="mt-4 text-sm text-teal-200/80">
            KPIs: MRR, churn, cost per lead, retained accounts.
          </div>
        </div>

        {/* REAPER */}
        <div className="rounded-2xl border border-red-500/40 bg-white/5 p-6 shadow-[0_0_30px_#ef444455]">
          <h2 className="text-2xl font-bold text-red-400">REAPER — The Protector</h2>
          <ul className="mt-3 space-y-2 text-red-100/90">
            <li>• Data scraping for public listings/procurement (white-hat only)</li>
            <li>• Security hardening playbooks & ops scripts (package fees)</li>
            <li>• Field ops automations (dispatch, checklists, proof-of-work capture)</li>
          </ul>
          <div className="mt-4 text-sm text-red-200/80">
            KPIs: jobs delivered, SLA %, incident rate ↓.
          </div>
        </div>

        {/* FELIX */}
        <div className="rounded-2xl border border-sky-500/40 bg-white/5 p-6 shadow-[0_0_30px_#38bdf855]">
          <h2 className="text-2xl font-bold text-sky-400">FELIX — The Guide</h2>
          <ul className="mt-3 space-y-2 text-sky-100/90">
            <li>• AI concierge for small biz (consult blocks + integration fees)</li>
            <li>• Site builds on PhoenixOps stack (flat fee + support retainer)</li>
            <li>• Training & playbooks (workshops, templates)</li>
          </ul>
          <div className="mt-4 text-sm text-sky-200/80">
            KPIs: billable hours, NPS, time-to-value.
          </div>
        </div>
      </section>

      {/* === Overseas & Physical Ops ======================================== */}
      <section className="max-w-6xl mx-auto mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="rounded-2xl border border-yellow-500/40 bg-white/5 p-6">
          <h3 className="text-xl font-bold text-yellow-300">Overseas Modernization</h3>
          <p className="mt-2 text-yellow-100/90">
            Target regions with low AI/computerization (e.g., Baltics, LATAM). Deploy
            nomad-friendly workflows, AI kiosks, and digital record systems.
          </p>
          <div className="mt-3 text-sm text-yellow-200/80">
            KPIs: pilot partners signed, cost per deployment, uptime.
          </div>
        </div>
        <div className="rounded-2xl border border-orange-500/40 bg-white/5 p-6">
          <h3 className="text-xl font-bold text-orange-300">Physical Ops & Crafts</h3>
          <p className="mt-2 text-orange-100/90">
            Field services (power-wash, fleet clean, facilities) + crafts/prints (Etsy).
            Ops are standardized and AI-scheduled for speed & proof.
          </p>
          <div className="mt-3 text-sm text-orange-200/80">
            KPIs: job margin, on-time %, reorder rate.
          </div>
        </div>
      </section>

      {/* === Fallback & Risk Guardrails ===================================== */}
      <section className="max-w-6xl mx-auto mt-12">
        <div className="rounded-2xl border border-purple-500/40 bg-white/5 p-6">
          <h3 className="text-2xl font-bold text-purple-300">Fallback & Resilience</h3>
          <ul className="mt-3 space-y-2 text-purple-100/90">
            <li>• Crypto/forex day-trade playbooks (small, risk-capped allocations)</li>
            <li>• Multiple affiliates + service niches to avoid single-point failure</li>
            <li>• Cash buffers + prepaid vendor credits (net-30 → net-60 progression)</li>
          </ul>
        </div>
      </section>

      {/* === Call to Action ================================================== */}
      <section className="max-w-5xl mx-auto text-center mt-14">
        <p className="text-gray-300">
          Ready to partner or fund a pilot? Let’s talk terms and set milestones.
        </p>
        <div className="mt-6 flex items-center justify-center gap-4">
          <Link
            href="/contact"
            className="px-6 py-3 rounded-lg font-semibold bg-yellow-400 text-black
                       hover:bg-yellow-300 drop-shadow-[0_0_20px_#facc15]"
          >
            Contact PhoenixOps
          </Link>
          <Link
            href="/policies"
            className="px-6 py-3 rounded-lg font-semibold border border-teal-400 text-teal-300
                       hover:bg-teal-400/10 drop-shadow-[0_0_20px_#14f1d9]"
          >
            View Policies
          </Link>
        </div>
      </section>
    </main>
  );
}
