"use client";

import Image from "next/image";

/* ============================================================
   === Contact Page (Neon Hotline | Env-Driven) ===
   ============================================================ */
export default function ContactPage() {
  // === Helper: Format phone number for display ===
  function formatPhone(num: string) {
    if (!num) return "";
    return num.replace(/(\d{3})(\d{3})(\d{4})/, "$1-$2-$3");
  }

  // === Environment Variables (safe NEXT_PUBLIC_* only) ===
  const MAIL_PRIMARY = process.env.NEXT_PUBLIC_MAIL_PRIMARY || "admin@stackingtechnologiesaollc.com";
  const MAIL_BACKUP = process.env.NEXT_PUBLIC_MAIL_BACKUP || "support@stackingtechnologiesaollc.com";
  const MAIL_AI = process.env.NEXT_PUBLIC_MAIL_FROM || "no-reply@stackingtoolsai.com";
  const TWILIO_NUMBER = process.env.NEXT_PUBLIC_TWILIO_NUMBER || "+18559680242";
  const CELL_NUMBER = process.env.NEXT_PUBLIC_CELL_NUMBER || "4326616101";

  return (
    <main className="min-h-screen bg-black px-6 py-16 space-y-16 text-center">

      {/* ================== Hero Logo ================== */}
      <div className="flex justify-center mb-8">
        <Image
          src="/assets/logos/logo.png"
          alt="Stackin Technologies Logo"
          width={220}
          height={220}
          className="drop-shadow-[0_0_35px_#facc15]"
          priority
        />
      </div>

      {/* ================== Title ================== */}
      <h1 className="text-white text-5xl font-extrabold drop-shadow-[0_0_20px_#f97316] animate-pulse">
        Contact Stackin Technologies AO LLC
      </h1>
      <p className="text-white text-lg max-w-3xl mx-auto mt-4 drop-shadow-[0_0_10px_#22c55e] italic">
        Our hotlines are monitored by PhoenixOps systems. Humans assist where required, AI handles the rest.
      </p>

      {/* ================== Email Directory ================== */}
      <section className="card border-green-500 shadow-[0_0_30px_#22c55e] p-6 rounded-xl">
        <h2 className="text-white text-2xl font-bold drop-shadow-[0_0_15px_#f97316] mb-4">
          Official Contact Emails
        </h2>
        <ul className="space-y-4 text-lg">
          <li className="text-white drop-shadow-[0_0_8px_#22c55e]">
            ✉️ {MAIL_PRIMARY} <span className="ml-2 text-orange-400 font-mono">[ONLINE]</span>
          </li>
          <li className="text-white drop-shadow-[0_0_8px_#22c55e]">
            ✉️ {MAIL_BACKUP} <span className="ml-2 text-orange-400 font-mono">[MONITORED]</span>
          </li>
          <li className="text-neon glitch drop-shadow-[0_0_12px_#facc15]">
            🤖 {MAIL_AI} <span className="ml-2 text-lime-400 font-mono">[AI TRIAGE ACTIVE]</span>
          </li>
        </ul>
      </section>

      {/* ================== Phone Directory ================== */}
      <section className="card border-yellow-500 shadow-[0_0_30px_#facc15] p-6 rounded-xl">
        <h2 className="text-white text-2xl font-bold drop-shadow-[0_0_15px_#f97316] mb-4">
          Phone Directory
        </h2>
        <p className="text-white text-lg drop-shadow-[0_0_8px_#f97316]">
          📞 Cell: {formatPhone(CELL_NUMBER)}{" "}
          <span className="ml-2 text-orange-400 font-mono">[HUMAN]</span>
        </p>
        <p className="text-white text-lg drop-shadow-[0_0_8px_#f97316]">
          📞 Twilio Hotline: {TWILIO_NUMBER}{" "}
          <span className="ml-2 text-lime-400 font-mono">[AUTOMATED IVR]</span>
        </p>
      </section>

      {/* ================== Footer Logo ================== */}
      <footer className="mt-20 flex flex-col items-center space-y-6">
        <Image
          src="/assets/logos/logo.png"
          alt="Stackin Technologies Logo Small"
          width={120}
          height={120}
          className="drop-shadow-[0_0_25px_#22c55e]"
        />
        <p className="text-xs text-gray-400 mt-2">
          All messages are logged & triaged by PhoenixOps AI.
        </p>
      </footer>
    </main>
  );
}

