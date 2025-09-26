"use client";

import Image from "next/image";
import Link from "next/link";

/* ==========================================================================
   # PHOENIXOPS BOTS — Squadron Brief (REAPER x FELIX Final Build)
   ========================================================================== */

export default function BotsPage() {
  return (
    <main className="min-h-screen bg-black px-6 py-16 text-center space-y-12">

      {/* === PAGE HEADER === */}
      <section>
        <h1 className="text-6xl font-extrabold text-purple-400 drop-shadow-[0_0_40px_#a020f0] mb-4">
          Meet the PhoenixOps Bots
        </h1>
        <p className="text-gray-300 text-lg italic max-w-2xl mx-auto">
          The squadron explains its roles below. Systems are staged and operating under{" "}
          <span className="text-amber-400 font-semibold">LOCKDOWN MODE</span> — 
          every bot runs safe, in-character, with human oversight.
        </p>
      </section>

      {/* === BOT GRID === */}
      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">

        {/* === MIA === */}
        <article className="card p-6 rounded-xl border border-pink-600 bg-black/40 shadow-[0_0_30px_#ec4899]/20">
          <Image src="/assets/bots/mia.png" alt="MIA Bot" width={160} height={160} className="mx-auto mb-4" />
          <h2 className="text-2xl font-bold text-pink-300">MIA</h2>
          <p className="text-gray-300 mt-2">
            Emotional resilience & micro-workflows — journaling, grounding, steady check-ins.
          </p>
          <p className="mt-3 text-xs font-mono text-pink-200">// Status: LOCKDOWN MODE</p>
          <Link href="/bots/mia" className="btn-glow mt-4 inline-block">Learn More About Me →</Link>
        </article>

        {/* === LIRA === */}
        <article className="card p-6 rounded-xl border border-teal-500 bg-black/40 shadow-[0_0_30px_#14f1d9]/20">
          <Image src="/assets/bots/lira.png" alt="LIRA Bot" width={160} height={160} className="mx-auto mb-4" />
          <h2 className="text-2xl font-bold text-teal-300">LIRA</h2>
          <p className="text-gray-300 mt-2">
            Finance & analytics engine — turns metrics into experiments, flags anomalies, suggests plays.
          </p>
          <p className="mt-3 text-xs font-mono text-teal-200">// Status: LOCKDOWN MODE</p>
          <Link href="/bots/lira" className="btn-glow mt-4 inline-block">Learn More About Me →</Link>
        </article>

        {/* === REAPER === */}
        <article className="card p-6 rounded-xl border border-red-600 bg-black/40 shadow-[0_0_30px_#ef4444]/20">
          <Image src="/assets/bots/reaper.png" alt="REAPER Bot" width={160} height={160} className="mx-auto mb-4" />
          <h2 className="text-2xl font-bold text-red-300">REAPER</h2>
          <p className="text-gray-300 mt-2">
            Ops & field specialist — defensive runbooks, safe automation templates, monitoring.
          </p>
          <p className="mt-3 text-xs font-mono text-red-200">// Status: LOCKDOWN MODE</p>
          <Link href="/bots/reaper" className="btn-glow mt-4 inline-block">Learn More About Me →</Link>
        </article>

        {/* === FELIX === */}
        <article className="card p-6 rounded-xl border border-sky-500 bg-black/40 shadow-[0_0_30px_#38bdf8]/20">
          <Image src="/assets/bots/felix.png" alt="FELIX Bot" width={160} height={160} className="mx-auto mb-4" />
          <h2 className="text-2xl font-bold text-sky-300">FELIX</h2>
          <p className="text-gray-300 mt-2">
            Security chief — posture reviews, prioritized hardening, audit-ready remediation plans.
          </p>
          <p className="mt-3 text-xs font-mono text-sky-200">// Status: LOCKDOWN MODE</p>
          <Link href="/bots/felix" className="btn-glow mt-4 inline-block">Learn More About Me →</Link>
        </article>

        {/* === LOCKDOWN === */}
        <article className="card p-6 rounded-xl border border-yellow-400 bg-black/40 shadow-[0_0_30px_#eab308]/20">
          <Image src="/assets/bots/lockdown.png" alt="LOCKDOWN Bot" width={160} height={160} className="mx-auto mb-4" />
          <h2 className="text-2xl font-bold text-yellow-300">LOCKDOWN</h2>
          <p className="text-gray-300 mt-2">
            Sentinel & incident triage — containment templates, escalation phrasing, isolation steps.
          </p>
          <p className="mt-3 text-xs font-mono text-yellow-200">// Status: LOCKDOWN MODE</p>
          <Link href="/bots/lockdown" className="btn-glow mt-4 inline-block">Learn More About Me →</Link>
        </article>

        {/* === TORCH === */}
        <article className="card p-6 rounded-xl border border-orange-500 bg-black/40 shadow-[0_0_30px_#f97316]/20">
          <Image src="/assets/bots/torch.png" alt="TORCH Bot" width={160} height={160} className="mx-auto mb-4" />
          <h2 className="text-2xl font-bold text-orange-300">TORCH</h2>
          <p className="text-gray-300 mt-2">
            Micro-support & retention — nudges, welcome flows, micro-experiments to keep engagement alive.
          </p>
          <p className="mt-3 text-xs font-mono text-orange-200">// Status: LOCKDOWN MODE</p>
          <Link href="/bots/torch" className="btn-glow mt-4 inline-block">Learn More About Me →</Link>
        </article>

        {/* === BINGO === */}
        <article className="card p-6 rounded-xl border border-green-500 bg-black/40 shadow-[0_0_30px_#22c55e]/20">
          <Image src="/assets/bots/bingo.png" alt="BINGO Bot" width={160} height={160} className="mx-auto mb-4" />
          <h2 className="text-2xl font-bold text-green-300">BINGO</h2>
          <p className="text-gray-300 mt-2">
            Opportunity scout — recovery playbooks, outreach hooks, legal discovery experiments.
          </p>
          <p className="mt-3 text-xs font-mono text-green-200">// Status: LOCKDOWN MODE</p>
          <Link href="/bots/bingo" className="btn-glow mt-4 inline-block">Learn More About Me →</Link>
        </article>
      </section>

      {/* === SQUADRON README / LEGAL SAFETY === */}
      <section className="max-w-4xl mx-auto text-left mt-8 p-6 rounded-xl border border-gray-800 bg-black/60">
        <h3 className="text-xl font-bold text-purple-400 drop-shadow-[0_0_20px_#a020f0] mb-4">
          Squadron ReadMe — How We Operate
        </h3>

        <ul className="text-gray-300 text-sm list-disc list-inside space-y-2 mb-4">
          <li><strong>No regulated advice:</strong> medical, legal, financial decisions require licensed professionals.</li>
          <li><strong>Defensive-only security:</strong> no exploit code or intrusive actions.</li>
          <li><strong>Human-in-the-loop:</strong> all automation/scripts require operator approval before execution.</li>
          <li><strong>Privacy & logs:</strong> interactions may be logged; PII is redacted. Removal requests → <span className="text-amber-400">admin@stackingtechnologiesaollc.com</span>.</li>
        </ul>

        <p className="text-xs text-gray-500 font-mono">
          [FLIGHT DECK NOTICE] These systems run in LOCKDOWN MODE. Certifications & policies are accessible via the Navbar’s <span className="text-purple-400">Trust</span> dropdown.
        </p>
      </section>
    </main>
  );
}
