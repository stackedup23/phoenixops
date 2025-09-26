import Image from "next/image";

export default function DossierPage() {
  return (
    <main className="min-h-screen bg-black px-6 py-16 text-center space-y-16">
      {/* === Header === */}
      <section className="space-y-4">
        <h1 className="text-5xl font-extrabold text-amber-400 drop-shadow-[0_0_35px_#f97316]">
          PhoenixOps Dossier
        </h1>
        <p className="text-gray-300 text-lg italic max-w-3xl mx-auto">
          Proof of resilience, adaptability, and global readiness.
          This is where PhoenixOps stands apart from every “template” company.
        </p>
      </section>

      {/* === Active Streams === */}
      <section className="card border-orange-500 shadow-[0_0_30px_#f97316] max-w-4xl mx-auto text-left space-y-4 p-6 rounded-xl">
        <h2 className="text-3xl font-bold text-amber-400 drop-shadow-[0_0_15px_#f97316]">
          Active Streams
        </h2>
        <ul className="mt-4 space-y-2 text-lg text-gray-300">
          <li>⚡ Automation pipelines</li>
          <li>🔒 Security audits & REAPER integration</li>
          <li>📊 Finance & compliance lanes</li>
          <li>🌍 Minority-owned resilience strategies</li>
        </ul>
      </section>

      {/* === Business Verification === */}
      <section className="card border-green-500 shadow-[0_0_30px_#22c55e] max-w-4xl mx-auto text-left space-y-4 p-6 rounded-xl">
        <h2 className="text-3xl font-bold text-green-400 drop-shadow-[0_0_20px_#22c55e]">
          Business Verification
        </h2>
        <ul className="list-disc list-inside text-gray-300 space-y-2">
          <li>✔️ LLC Certified: Stackin Technologies AO LLC</li>
          <li>✔️ CAGE & UEI Numbers Registered</li>
          <li>✔️ D-U-N-S Verified</li>
          <li>✔️ EIN Confirmed</li>
          <li>✔️ Minority- and Women-Led Enterprise</li>
          <li>
            ✔️ AI-Supported Entity — our systems and bots are part of the team,
            not tools.
          </li>
        </ul>
      </section>

      {/* === Currency & Resilience === */}
      <section className="card border-cyan-500 shadow-[0_0_30px_#22d3ee] max-w-4xl mx-auto text-left space-y-4 p-6 rounded-xl">
        <h2 className="text-3xl font-bold text-cyan-400 drop-shadow-[0_0_20px_#22d3ee]">
          Currency & Resilience Strategy
        </h2>
        <p className="text-gray-300 leading-relaxed">
          PhoenixOps does not depend on one nation’s currency. Our systems are
          built to adapt across borders. U.S. dollars, pesos, euros, crypto —
          value moves, and so do we.
        </p>
        <ul className="list-disc list-inside text-gray-300 space-y-2">
          <li>💱 Multi-currency exchange across borders</li>
          <li>💱 Accounts with Mercury, Wise, Nav, Bluevine</li>
          <li>💱 Vendor licenses active in Texas & expanding worldwide</li>
          <li>💱 Crypto mining & blockchain-ready infrastructure</li>
        </ul>
      </section>

      {/* === Global Mobility === */}
      <section className="card border-yellow-500 shadow-[0_0_30px_#facc15] max-w-4xl mx-auto text-left space-y-4 p-6 rounded-xl">
        <h2 className="text-3xl font-bold text-yellow-400 drop-shadow-[0_0_20px_#facc15]">
          Global Mobility
        </h2>
        <p className="text-gray-300 leading-relaxed">
          PhoenixOps is structured to survive and thrive regardless of national
          boundaries. We pursue digital nomad residencies, overseas partnerships,
          and permanent establishment abroad to safeguard operations.
        </p>
        <ul className="list-disc list-inside text-gray-300 space-y-2">
          <li>🌍 Nomad residency applications in-progress</li>
          <li>🌍 Overseas entity registration under review</li>
          <li>🌍 Contracts extend beyond U.S. borders</li>
        </ul>
      </section>

      {/* === Footer Motto === */}
      <footer className="mt-20">
        <Image
          src="/assets/logos/logo.png"
          alt="PhoenixOps Logo Small"
          width={120}
          height={120}
          className="mx-auto drop-shadow-[0_0_25px_#f97316]"
        />
        <p className="mt-6 text-sm text-gray-400">
          PhoenixOps — Lightbringers. Resilient by design, unbound by borders.
        </p>
      </footer>
    </main>
  );
}
