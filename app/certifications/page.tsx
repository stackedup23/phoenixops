"use client";

export default function CertificationsPage() {
  return (
    <main className="min-h-screen bg-black p-8 space-y-12">
      {/* Title Banner */}
      <h1 className="text-4xl md:text-5xl font-extrabold text-neon-teal text-center mb-8">
        Certifications & Credentials
      </h1>

      {/* OSHA 30 Hour */}
      <section className="bg-white/5 border border-white/10 rounded-xl p-6 space-y-2">
        <h2 className="text-2xl font-bold text-neon-teal">
          OSHA 30 Hour – General Industry Safety & Health
        </h2>
        <p className="text-neon-purple">Completed: June 23, 2025</p>
        <p className="text-neon-purple">ID: NYCCST-20250623-20917432</p>
        <p className="text-neon-purple">
          Issuer: NYC Construction Safety Training LLC
        </p>
        <a
          href="/OSHA 30 Hour General Industry Safety and Health Certificate.pdf"
          target="_blank"
          className="text-neon-teal underline"
        >
          View Certificate (PDF)
        </a>
      </section>

      {/* Drugs & Alcohol Awareness */}
      <section className="bg-white/5 border border-white/10 rounded-xl p-6 space-y-2">
        <h2 className="text-2xl font-bold text-neon-teal">
          Drugs & Alcohol Awareness in Construction
        </h2>
        <p className="text-neon-purple">Completed: 2025</p>
        <a
          href="/Drugs and Alcohol Awareness In Construction Certificate.pdf"
          target="_blank"
          className="text-neon-teal underline"
        >
          View Certificate (PDF)
        </a>
      </section>

      {/* Intro to OSHA */}
      <section className="bg-white/5 border border-white/10 rounded-xl p-6 space-y-2">
        <h2 className="text-2xl font-bold text-neon-teal">
          Introduction to OSHA
        </h2>
        <p className="text-neon-purple">Completed: 2025</p>
        <a
          href="/Introduction To OSHA Certificate.pdf"
          target="_blank"
          className="text-neon-teal underline"
        >
          View Certificate (PDF)
        </a>
      </section>

      {/* LLC Info */}
      <section className="bg-white/5 border border-white/10 rounded-xl p-6 space-y-2">
        <h2 className="text-2xl font-bold text-neon-teal">
          Company Registration
        </h2>
        <p className="text-neon-purple">Stackin Technologies AO LLC</p>
        <p className="text-neon-purple">1719 E Pine St, Midland, TX 79705</p>
        <p className="text-neon-purple">Phone: 432-661-6101</p>
        <p className="text-neon-purple">D-U-N-S: 13-682-8095</p>
      </section>
    </main>
  );
}
