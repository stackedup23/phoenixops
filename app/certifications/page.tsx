"use client";

import Link from "next/link";
import Image from "next/image";

// === Certifications Page ===============================================
export default function CertificationsPage() {
  return (
    <main className="min-h-screen bg-black px-6 py-16 text-center space-y-12">

      {/* === Hero Logo + Title ========================================= */}
      <div className="flex justify-center mb-10">
        <Image
          src="/assets/logos/logo.png"
          alt="PhoenixOps Logo"
          width={240}
          height={240}
          className="drop-shadow-[0_0_40px_#f97316]"
        />
      </div>
      <h1 className="text-4xl font-extrabold text-white drop-shadow-[0_0_25px_#f97316] mb-8">
        Certifications & Credentials
      </h1>
      <p className="text-lg text-white drop-shadow-[0_0_20px_#f97316] max-w-4xl mx-auto mb-12">
        Stackin Technologies AO LLC is a verified and compliant business entity.  
        Every certificate is proof of readiness, growth, and transparency.
      </p>

      {/* === OSHA 30 Hour =============================================== */}
      <section className="card-stripe border-orange-500 shadow-[0_0_30px_#f97316] p-8 space-y-3">
        <h2 className="text-3xl font-bold text-orange-400 drop-shadow-[0_0_25px_#f97316]">
          OSHA 30 Hour – General Industry Safety & Health
        </h2>
        <p className="text-lg text-white drop-shadow-[0_0_15px_#f97316]">Completed: June 23, 2025</p>
        <p className="text-lg text-white drop-shadow-[0_0_15px_#f97316]">ID: NYCCST-20250623-20917432</p>
        <p className="text-lg text-white drop-shadow-[0_0_15px_#f97316]">Issuer: NYC Construction Safety Training LLC</p>
        <Link
          href="/assets/certs/osha30.pdf"
          target="_blank"
          className="btn-stripe mt-4 inline-block"
        >
          View Certificate (PDF)
        </Link>
      </section>

      {/* === Drugs & Alcohol Awareness ================================== */}
      <section className="card-stripe border-red-500 shadow-[0_0_30px_#ef4444] p-8 space-y-3">
        <h2 className="text-3xl font-bold text-red-400 drop-shadow-[0_0_25px_#ef4444]">
          Drugs & Alcohol Awareness in Construction
        </h2>
        <p className="text-lg text-white drop-shadow-[0_0_15px_#ef4444]">Completed: 2025</p>
        <Link
          href="/assets/certs/drugs-awareness.pdf"
          target="_blank"
          className="btn-stripe mt-4 inline-block"
        >
          View Certificate (PDF)
        </Link>
      </section>

      {/* === Intro to OSHA ============================================== */}
      <section className="card-stripe border-teal-500 shadow-[0_0_30px_#14f1d9] p-8 space-y-3">
        <h2 className="text-3xl font-bold text-teal-400 drop-shadow-[0_0_25px_#14f1d9]">
          Introduction to OSHA
        </h2>
        <p className="text-lg text-white drop-shadow-[0_0_15px_#14f1d9]">Completed: 2025</p>
        <Link
          href="/assets/certs/intro-osha.pdf"
          target="_blank"
          className="btn-stripe mt-4 inline-block"
        >
          View Certificate (PDF)
        </Link>
      </section>

      {/* === FEMA Hazardous Materials =================================== */}
      <section className="card-stripe border-blue-500 shadow-[0_0_30px_#3b82f6] p-8 space-y-3">
        <h2 className="text-3xl font-bold text-blue-400 drop-shadow-[0_0_25px_#3b82f6]">
          FEMA – Introduction to Hazardous Materials
        </h2>
        <p className="text-lg text-white drop-shadow-[0_0_15px_#3b82f6]">Completed: June 21, 2025</p>
        <p className="text-lg text-white drop-shadow-[0_0_15px_#3b82f6]">
          Issuer: National Disaster & Emergency Management University
        </p>
        <Link
          href="/assets/certs/fema-hazmat.pdf"
          target="_blank"
          className="btn-stripe mt-4 inline-block"
        >
          View Certificate (PDF)
        </Link>
      </section>

      {/* === LLC Info =================================================== */}
      <section className="card-stripe border-yellow-500 shadow-[0_0_30px_#facc15] p-8 space-y-3">
        <h2 className="text-3xl font-bold text-yellow-400 drop-shadow-[0_0_25px_#facc15]">
          Stackin Technologies AO LLC – Registered Entity
        </h2>
        <p className="text-lg text-white drop-shadow-[0_0_15px_#facc15]">1719 E Pine St, Midland, TX 79705</p>
        <p className="text-lg text-white drop-shadow-[0_0_15px_#facc15]">Phone: 432-661-6101</p>
        <p className="text-lg text-white drop-shadow-[0_0_15px_#facc15]">D-U-N-S: 13-682-8095</p>
      </section>

      {/* === Upcoming Credentials ====================================== */}
      <section className="card-stripe border-purple-500 shadow-[0_0_30px_#a855f7] p-8 space-y-6">
        <Image
          src="/assets/logos/phoenix-logo.png"
          alt="PhoenixOps Logo Small"
          width={120}
          height={120}
          className="mx-auto drop-shadow-[0_0_25px_#a855f7]"
        />
        <h2 className="text-3xl font-bold text-purple-400 drop-shadow-[0_0_25px_#a855f7]">
          Upcoming Credentials
        </h2>
        <p className="text-lg text-white italic drop-shadow-[0_0_20px_#a855f7]">
          Certifications in AI, cybersecurity, and infrastructure are in progress.  
          Updates will be posted here as they’re earned.
        </p>
      </section>

      {/* === Footer Logo =============================================== */}
      <div className="flex justify-center mt-16">
        <Image
          src="/assets/logos/logo.png"
          alt="PhoenixOps Logo Small"
          width={140}
          height={140}
          className="drop-shadow-[0_0_25px_#f97316]"
        />
      </div>
    </main>
  );
}
