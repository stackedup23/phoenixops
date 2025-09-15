"use client";
import Link from "next/link";

export default function CertificationsPage() {
  return (
    <main className="min-h-screen bg-black px-6 py-16 space-y-12 text-center">
      {/* === Title Banner === */}
      <h1 className="text-6xl md:text-7xl font-extrabold text-yellow-400 drop-shadow-[0_0_35px_#facc15] mb-12">
        Certifications & Credentials
      </h1>
      <p className="text-2xl text-teal-400 drop-shadow-[0_0_20px_#14f1d9] max-w-4xl mx-auto mb-12">
        Proof of resilience, skill, and dedication — official certifications that
        showcase the foundation of Stackin Technologies AO LLC.
      </p>

      {/* === OSHA 30 Hour === */}
      <section className="bg-black/70 border-4 border-orange-500 rounded-xl shadow-[0_0_30px_#f97316] p-8 space-y-3">
        <h2 className="text-3xl font-bold text-orange-400 drop-shadow-[0_0_25px_#f97316]">
          OSHA 30 Hour – General Industry Safety & Health
        </h2>
        <p className="text-gray-200 text-lg">Completed: June 23, 2025</p>
        <p className="text-gray-200 text-lg">
          ID: NYCCST-20250623-20917432
        </p>
        <p className="text-gray-200 text-lg">
          Issuer: NYC Construction Safety Training LLC
        </p>
        <Link
          href="/assets/certs/osha30.pdf"
          target="_blank"
          className="inline-block mt-4 px-6 py-3 bg-orange-500 text-black font-bold rounded-lg hover:bg-yellow-400 transition drop-shadow-[0_0_20px_#f97316]"
        >
          View Certificate (PDF)
        </Link>
      </section>

      {/* === Drugs & Alcohol Awareness === */}
      <section className="bg-black/70 border-4 border-red-500 rounded-xl shadow-[0_0_30px_#ef4444] p-8 space-y-3">
        <h2 className="text-3xl font-bold text-red-400 drop-shadow-[0_0_25px_#ef4444]">
          Drugs & Alcohol Awareness in Construction
        </h2>
        <p className="text-gray-200 text-lg">Completed: 2025</p>
        <Link
          href="/assets/certs/drug-awareness.pdf"
          target="_blank"
          className="inline-block mt-4 px-6 py-3 bg-red-500 text-black font-bold rounded-lg hover:bg-pink-500 transition drop-shadow-[0_0_20px_#ef4444]"
        >
          View Certificate (PDF)
        </Link>
      </section>

      {/* === Intro to OSHA === */}
      <section className="bg-black/70 border-4 border-teal-500 rounded-xl shadow-[0_0_30px_#14f1d9] p-8 space-y-3">
        <h2 className="text-3xl font-bold text-teal-400 drop-shadow-[0_0_25px_#14f1d9]">
          Introduction to OSHA
        </h2>
        <p className="text-gray-200 text-lg">Completed: 2025</p>
        <Link
          href="/assets/certs/intro-osha.pdf"
          target="_blank"
          className="inline-block mt-4 px-6 py-3 bg-teal-500 text-black font-bold rounded-lg hover:bg-cyan-400 transition drop-shadow-[0_0_20px_#14f1d9]"
        >
          View Certificate (PDF)
        </Link>
      </section>

      {/* === LLC Info === */}
      <section className="bg-black/70 border-4 border-yellow-500 rounded-xl shadow-[0_0_35px_#facc15] p-8 space-y-3">
        <h2 className="text-3xl font-bold text-yellow-400 drop-shadow-[0_0_25px_#facc15]">
          Stackin Technologies AO LLC – Minority Owned
        </h2>
        <p className="text-gray-200 text-lg">1719 E Pine St, Midland, TX 79705</p>
        <p className="text-gray-200 text-lg">Phone: 432-661-6101</p>
        <p className="text-gray-200 text-lg">D-U-N-S: 13-682-8095</p>
      </section>

      {/* === Placeholder for Future Diplomas === */}
      <section className="bg-black/70 border-4 border-purple-500 rounded-xl shadow-[0_0_30px_#a855f7] p-8 space-y-3">
        <h2 className="text-3xl font-bold text-purple-400 drop-shadow-[0_0_25px_#a855f7]">
          Upcoming Credentials
        </h2>
        <p className="text-gray-200 text-lg italic">
          Alison Wastewater Diplomas + more certifications will be added here as
          soon as we expand our portfolio.
        </p>
      </section>
    </main>
  );
}

