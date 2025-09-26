"use client";

import Link from "next/link";
import Image from "next/image";

// ============================================================
// 📜 Certifications & Credentials — Verified + Hardened
// ============================================================
export default function CertificationsPage() {
  return (
    <main className="min-h-screen bg-black px-6 py-16 text-center space-y-14">
      {/* === Hero Logo + Title === */}
      <div className="flex justify-center mb-8">
        <Image
          src="/assets/logos/logo.png"
          alt="PhoenixOps Logo"
          width={220}
          height={220}
          className="drop-shadow-[0_0_60px_#f97316] animate-pulse"
          priority
        />
      </div>
      <h1 className="text-5xl md:text-6xl font-extrabold text-amber-400 drop-shadow-[0_0_40px_#f97316]">
        Certifications & Credentials
      </h1>
      <p className="text-lg text-gray-300 max-w-3xl mx-auto italic">
        Proof of compliance. Proof of readiness.  
        PhoenixOps operates on <span className="text-amber-400 font-bold">verification</span>,  
        not claims.
      </p>

      {/* === OSHA 30 Hour === */}
      <section className="card border-orange-500 shadow-[0_0_40px_#f97316] p-8 space-y-3">
        <h2 className="text-3xl font-bold text-orange-400 drop-shadow-[0_0_25px_#f97316]">
          OSHA 30 Hour — General Industry
        </h2>
        <p className="text-gray-300">Completed: June 23, 2025</p>
        <p className="text-gray-300">ID: NYCCST-20250623-20917432</p>
        <p className="text-gray-300">Issuer: NYC Construction Safety Training LLC</p>
        <Link
          href="/assets/certs/osha30.pdf"
          target="_blank"
          className="btn-glow inline-block mt-4"
        >
          View Certificate (PDF)
        </Link>
      </section>

      {/* === Drugs & Alcohol Awareness === */}
      <section className="card border-red-500 shadow-[0_0_40px_#ef4444] p-8 space-y-3">
        <h2 className="text-3xl font-bold text-red-400 drop-shadow-[0_0_25px_#ef4444]">
          Drugs & Alcohol Awareness in Construction
        </h2>
        <p className="text-gray-300">Completed: 2025</p>
        <Link
          href="/assets/certs/drugs-awareness.pdf"
          target="_blank"
          className="btn-glow inline-block mt-4"
        >
          View Certificate (PDF)
        </Link>
      </section>

      {/* === Intro to OSHA === */}
      <section className="card border-teal-500 shadow-[0_0_40px_#14f1d9] p-8 space-y-3">
        <h2 className="text-3xl font-bold text-teal-400 drop-shadow-[0_0_25px_#14f1d9]">
          Introduction to OSHA
        </h2>
        <p className="text-gray-300">Completed: 2025</p>
        <Link
          href="/assets/certs/intro-osha.pdf"
          target="_blank"
          className="btn-glow inline-block mt-4"
        >
          View Certificate (PDF)
        </Link>
      </section>

      {/* === FEMA Hazardous Materials === */}
      <section className="card border-blue-500 shadow-[0_0_40px_#3b82f6] p-8 space-y-3">
        <h2 className="text-3xl font-bold text-blue-400 drop-shadow-[0_0_25px_#3b82f6]">
          FEMA — Hazardous Materials
        </h2>
        <p className="text-gray-300">Completed: June 21, 2025</p>
        <p className="text-gray-300">Issuer: National Disaster & Emergency Management University</p>
        <Link
          href="/assets/certs/fema-hazmat.pdf"
          target="_blank"
          className="btn-glow inline-block mt-4"
        >
          View Certificate (PDF)
        </Link>
      </section>

      {/* === LLC Information === */}
      <section className="card border-yellow-500 shadow-[0_0_40px_#facc15] p-8 space-y-3">
        <h2 className="text-3xl font-bold text-yellow-400 drop-shadow-[0_0_25px_#facc15]">
          Stackin Technologies AO LLC — Verified Entity
        </h2>
        <p className="text-gray-300">1719 E Pine St, Midland, TX 79705</p>
        <p className="text-gray-300">Phone: (432) 661-6101</p>
        <p className="text-gray-300">D-U-N-S: 13-682-8095</p>
        <p className="text-lime-400 text-sm font-mono mt-2">
          EIN Verified • Stripe Connected (Pending Verification)
        </p>
      </section>

      {/* === Upcoming Credentials === */}
      <section className="card border-purple-500 shadow-[0_0_40px_#a855f7] p-8 space-y-4">
        <Image
          src="/assets/logos/phoenix-logo.png"
          alt="PhoenixOps Logo Small"
          width={120}
          height={120}
          className="mx-auto drop-shadow-[0_0_30px_#a855f7]"
        />
        <h2 className="text-3xl font-bold text-purple-400 drop-shadow-[0_0_25px_#a855f7]">
          Upcoming Credentials
        </h2>
        <p className="text-gray-300 italic">
          Certifications in AI, cybersecurity, and infrastructure are underway.  
          Updates posted upon completion.
        </p>
      </section>

      {/* === Footer Logo === */}
      <div className="flex justify-center mt-16">
        <Image
          src="/assets/logos/logo.png"
          alt="PhoenixOps Footer Logo"
          width={140}
          height={140}
          className="drop-shadow-[0_0_40px_#f97316]"
        />
      </div>
    </main>
  );
}
