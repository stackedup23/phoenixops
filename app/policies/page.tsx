"use client";

export default function Policies() {
  return (
    <main className="min-h-screen bg-black px-6 py-16 text-center space-y-16">
      {/* === HEADER SECTION === */}
      <header>
        <h1 className="header-yellow animate-glowLoop text-6xl md:text-7xl font-extrabold mb-6">
          Policies & Legal
        </h1>
        <p className="body-green text-xl italic">
          Transparency • Protection • Professionalism
        </p>
      </header>

      {/* === PRIVACY POLICY === */}
      <section className="card border-teal-500 shadow-[0_0_35px_#14f1d9]">
        <h2 className="header-yellow text-3xl">Privacy Policy</h2>
        <p className="body-green mt-4">
          We respect your data. No unnecessary collection, no resale.
          Information shared with Stackin Technologies AO LLC stays secure
          and is used only for direct business operations. Confidentiality
          is honored, and misuse is never tolerated.
        </p>
      </section>

      {/* === TERMS OF SERVICE === */}
      <section className="card border-purple-500 shadow-[0_0_35px_#a855f7]">
        <h2 className="header-yellow text-3xl">Terms of Service</h2>
        <p className="body-green mt-4">
          By purchasing or engaging with PhoenixOps products, you agree
          to honor the digital nature of our services. Disputes are handled
          with fairness, compliance with U.S. law, and respect for innovation
          and client trust.
        </p>
      </section>

      {/* === SECURITY POLICY === */}
      <section className="card border-red-500 shadow-[0_0_35px_#ef4444]">
        <h2 className="header-yellow text-3xl">Security Policy</h2>
        <p className="body-green mt-4">
          All systems run on hardened infrastructure, encrypted
          communications, and 24/7 AI monitoring. Lockdown, our sentinel bot,
          enforces compliance and shields client + business data from threats.
        </p>
      </section>

      {/* === REFUND & RETURN POLICY === */}
      <section className="card border-green-500 shadow-[0_0_35px_#22c55e]">
        <h2 className="header-yellow text-3xl">Refund & Returns</h2>
        <p className="body-green mt-4">
          All PhoenixOps products are digital. Once delivered, they cannot
          be returned. Refunds are only issued when required by law or at the
          discretion of Stackin Technologies AO LLC.
        </p>
      </section>

      {/* === DISCLAIMER OF LIABILITY === */}
      <section className="card border-orange-500 shadow-[0_0_35px_#f97316]">
        <h2 className="header-yellow text-3xl">Disclaimer of Liability</h2>
        <p className="body-green mt-4">
          PhoenixOps products are powered by AI. They are evolving tools —
          not human advisors, doctors, or lawyers. Outputs should be treated
          as guidance and inspiration, not absolute guarantees. By using our
          bots, you agree to apply your own judgment to all decisions.
        </p>
      </section>

      {/* === FOOTER INFO === */}
      <footer className="mt-20 text-purple-300 drop-shadow-[0_0_25px_#a855f7] space-y-2">
        <p className="font-semibold">Stackin Technologies AO LLC</p>
        <p>1719 E Pine St, Midland, TX 79705</p>
        <p>Phone: (432) 661-6101</p>
        <p>Email: support@stackingtechnologiesaollc.com</p>
        <p className="italic mt-4">
          © {new Date().getFullYear()} PhoenixOps — resilience, innovation,
          and law-ready protection in neon glow.
        </p>
      </footer>
    </main>
  );
}
