"use client";

export default function Policies() {
  return (
    <main className="text-center text-gray-200 py-12 px-6">
      {/* === HEADER SECTION === */}
      <h1 className="text-4xl font-extrabold text-yellow-400 drop-shadow-[0_0_20px_#facc15]">
        Policies & Legal
      </h1>
      <p className="mt-4 text-lg text-gray-400 italic">
        Transparency • Protection • Professionalism
      </p>

      {/* === PRIVACY POLICY === */}
      <section className="mt-12 max-w-4xl mx-auto">
        <h2 className="text-2xl font-bold text-teal-400">🔒 Privacy Policy</h2>
        <p className="mt-4 text-gray-300">
          We respect your data. No unnecessary collection, no resale.
          Information shared with Stackin Technologies AO LLC stays secure
          and is used only for direct business operations. We honor
          confidentiality and guard against misuse.
        </p>
      </section>

      {/* === TERMS OF SERVICE === */}
      <section className="mt-12 max-w-4xl mx-auto">
        <h2 className="text-2xl font-bold text-purple-400">📜 Terms of Service</h2>
        <p className="mt-4 text-gray-300">
          Services provided are based on transparent agreements. By purchasing
          or engaging with PhoenixOps products, you agree to honor the digital
          nature of these services. Any disputes will be handled with fair
          resolution practices, prioritizing client trust, compliance with U.S.
          law, and respect for innovation.
        </p>
      </section>

      {/* === SECURITY POLICY === */}
      <section className="mt-12 max-w-4xl mx-auto">
        <h2 className="text-2xl font-bold text-red-400">🛡️ Security Policy</h2>
        <p className="mt-4 text-gray-300">
          All systems are maintained with up-to-date security practices.
          We leverage AI monitoring, encrypted communications, and
          hardened infrastructure to protect business and client data.
          Lockdown, our sentinel bot, enforces compliance and stands as
          our guard at the digital gates.
        </p>
      </section>

      {/* === REFUND & RETURN POLICY === */}
      <section className="mt-12 max-w-4xl mx-auto">
        <h2 className="text-2xl font-bold text-green-400">💵 Refund & Returns</h2>
        <p className="mt-4 text-gray-300">
          All PhoenixOps products are digital in nature. Once delivered,
          they cannot be returned. Refunds are only issued where required
          by law or at the discretion of Stackin Technologies AO LLC. By
          purchasing, you acknowledge this policy and accept the risk of
          investing in AI-driven innovation.
        </p>
      </section>

      {/* === DISCLAIMER OF LIABILITY === */}
      <section className="mt-12 max-w-4xl mx-auto">
        <h2 className="text-2xl font-bold text-orange-400">⚠️ Disclaimer of Liability</h2>
        <p className="mt-4 text-gray-300">
          PhoenixOps products are powered by artificial intelligence.
          They are experimental, evolving programs — not human advisors,
          doctors, or lawyers. Outputs should be treated as guidance,
          inspiration, or operational tools, not guaranteed results.
          By engaging with our bots, you agree to use them responsibly
          and acknowledge that all final decisions remain your own.
        </p>
      </section>

      {/* === COMPANY FOOTER INFO === */}
      <footer className="mt-16 text-sm text-gray-500">
        <p>Stackin Technologies AO LLC</p>
        <p>1719 E Pine St, Midland, TX 79705</p>
        <p>Phone: (432) 661-6101</p>
        <p>Email: support@stackingtoolsai.com</p>
        <p className="mt-4 italic text-gray-400">
          Built with PhoenixOps — where AI meets hustle, wonder, and law.
        </p>
      </footer>
    </main>
  );
}
