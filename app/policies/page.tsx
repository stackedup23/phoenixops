"use client";

export default function Policies() {
  return (
    <main className="text-center text-gray-200 py-12 px-6">
      {/* === Header === */}
      <h1 className="text-4xl font-extrabold text-yellow-400 drop-shadow-[0_0_20px_#facc15]">
        Policies & Legal
      </h1>
      <p className="mt-4 text-lg text-gray-400 italic">
        Transparency • Protection • Professionalism
      </p>

      {/* === Privacy === */}
      <section className="mt-12 max-w-4xl mx-auto">
        <h2 className="text-2xl font-bold text-teal-400">🔒 Privacy Policy</h2>
        <p className="mt-4 text-gray-300">
          We respect your data. No unnecessary collection, no resale.
          Information shared with Stackin Technologies AO LLC stays secure
          and is used only for direct business operations.
        </p>
      </section>

      {/* === Terms === */}
      <section className="mt-12 max-w-4xl mx-auto">
        <h2 className="text-2xl font-bold text-purple-400">📜 Terms of Service</h2>
        <p className="mt-4 text-gray-300">
          Services provided are based on transparent agreements.
          Any disputes are handled with fair resolution practices,
          prioritizing client trust and compliance.
        </p>
      </section>

      {/* === Security === */}
      <section className="mt-12 max-w-4xl mx-auto">
        <h2 className="text-2xl font-bold text-red-400">🛡️ Security Policy</h2>
        <p className="mt-4 text-gray-300">
          All systems are maintained with up-to-date security practices.
          We leverage AI monitoring, encrypted communications, and
          best-in-class infrastructure to protect business and client data.
        </p>
      </section>
    </main>
  );
}
