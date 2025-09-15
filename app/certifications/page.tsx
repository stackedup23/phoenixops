"use client";

export default function CertificationsPage() {
  return (
    <main className="min-h-screen bg-black px-6 py-16 space-y-12 text-center">
      {/* Title Banner */}
      <h1 className="text-6xl md:text-7xl font-extrabold text-yellow-400 drop-shadow-[0_0_35px_#facc15] mb-12">
        Certifications & Credentials
      </h1>
      <p className="text-2xl text-teal-400 drop-shadow-[0_0_20px_#14f1d9] max-w-4xl mx-auto mb-12">
        Proof of resilience, skill, and dedication — official certifications that
        showcase the foundation of Stackin Technologies AO LLC.
      </p>

      {/* OSHA 30 Hour */}
      <section className="bg-black/70 border-4 border-orange-500 rounded-xl shadow-[0_0_30px_#f97316] p-8 space-y-3">
        <h2 className="text-3xl font-bold text-orange-400 drop-shadow-[0_0_25px_#f97316]">
          OSHA 30 Hour – General Industry Safety & Health
        </h2>
        <p className="text-gray-200 text-lg">Completed: June 23, 2025</p>
        <p className="text-gray-200 text-lg">ID: NYCCST-20250623-20917432</p>
        <p className="text-gray-200 text-lg">
          Issuer: NYC Construction Safety Training LLC
        </p>
        <a
          href="/OSHA 30 Hour General Industry Safety and Health Certificate.pdf"
          target="_blank"
          className="text-teal-400 underline hover:text-yellow-300 transition"
        >
          View Certificate (PDF)
        </a>
      </section>

      {/* Drugs & Alcohol Awareness */}
      <section className="bg-black/70 border-4 border-red-500 rounded-xl shadow-[0_0_30px_#ef4444] p-8 space-y-3">
        <h2 className="text-3xl font-bold text-red-400 drop-shadow-[0_0_25px_#ef4444]">
          Drugs & Alcohol Awareness in Construction
        </h2>
        <p className="text-gray-200 text-lg">Completed: 2025</p>
        <a
          href="/Drugs and Alcohol Awareness In Construction Certificate.pdf"
          target="_blank"
          className="text-teal-400 underline hover:text-yellow-300 transition"
        >
          View Certificate (PDF)
        </a>
      </section>

      {/* Intro to OSHA */}
      <section className="bg-black/70 border-4 border-teal-500 rounded-xl shadow-[0_0_30px_#14f1d9] p-8 space-y-3">
        <h2 className="text-3xl font-bold text-teal-400 drop-shadow-[0_0_25px_#14f1d9]">
          Introduction to OSHA
        </h2>
        <p className="text-gray-200 text-lg">Completed: 2025</p>
        <a
          href="/Introduction To OSHA Certificate.pdf"
          target="_blank"
          className="text-teal-400 underline hover:text-yellow-300 transition"
        >
          View Certificate (PDF)
        </a>
      </section>

      {/* LLC Info */}
      <section className="bg-black/70 border-4 border-yellow-500 rounded-xl shadow-[0_0_35px_#facc15] p-8 space-y-3">
        <h2 className="text-3xl font-bold text-yellow-400 drop-shadow-[0_0_30px_#facc15]">
          Company Registration
        </h2>
        <p className="text-gray-200 text-lg">
          Stackin Technologies AO LLC — Minority Owned
        </p>
        <p className="text-gray-200 text-lg">
          1719 E Pine St, Midland, TX 79705
        </p>
        <p className="text-gray-200 text-lg">Phone: 432-661-6101</p>
        <p className="text-gray-200 text-lg">D-U-N-S: 13-682-8095</p>
      </section>

      {/* Placeholder for future diplomas */}
      <section className="bg-black/70 border-4 border-purple-500 rounded-xl shadow-[0_0_30px_#a855f7] p-8 space-y-3">
        <h2 className="text-3xl font-bold text-purple-400 drop-shadow-[0_0_25px_#a855f7]">
          Upcoming Credentials
        </h2>
        <p className="text-gray-200 text-lg italic">
          Alison Wastewater Diplomas + more certifications will be added here
          soon as we expand our portfolio.
        </p>
      </section>
    </main>
  );
}
