"use client";

import Image from "next/image";
import Link from "next/link";

/* ============================================================
   === Contact Page (Neon Hotline) ===
   ============================================================ */
export default function ContactPage() {
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
        />
      </div>

      {/* ================== Title ================== */}
      <h1 className="text-white text-5xl font-extrabold drop-shadow-[0_0_20px_#f97316] animate-pulse">
        Contact Stackin Technologies AO LLC
      </h1>
      <p className="text-white text-lg max-w-3xl mx-auto mt-4 drop-shadow-[0_0_10px_#22c55e] italic">
        We keep our lines open for business, partners, and community.  
        Reach us anytime via email or phone.  
      </p>

      {/* ================== Email Directory ================== */}
      <section className="card border-green-500 shadow-[0_0_30px_#22c55e]">
        <h2 className="text-white text-2xl font-bold drop-shadow-[0_0_15px_#f97316] mb-4">
          Official Contact Emails
        </h2>
        <ul className="space-y-3 text-lg">
          <li className="text-white drop-shadow-[0_0_8px_#22c55e]">
            ✉️ <Link href="mailto:admin@stackingtechnologiesaollc.com" className="link-glow">admin@stackingtechnologiesaollc.com</Link>
          </li>
          <li className="text-white drop-shadow-[0_0_8px_#22c55e]">
            ✉️ <Link href="mailto:support@stackingtechnologiesaollc.com" className="link-glow">support@stackingtechnologiesaollc.com</Link>
          </li>
          <li className="text-white drop-shadow-[0_0_8px_#22c55e]">
            🤖 <Link href="mailto:ai@stackingtoolsai.com" className="link-glow">ai@stackingtoolsai.com</Link>
          </li>
          <li className="text-white drop-shadow-[0_0_8px_#22c55e]">
            ✉️ <Link href="mailto:contact@stackingtoolsai.com" className="link-glow">contact@stackingtoolsai.com</Link>
          </li>
          <li className="text-white drop-shadow-[0_0_8px_#22c55e]">
            ✉️ <Link href="mailto:no-reply@stackingtechnologiesaollc.com" className="link-glow">no-reply@stackingtechnologiesaollc.com</Link>
          </li>
        </ul>
      </section>

      {/* ================== Phone Directory ================== */}
      <section className="card border-yellow-500 shadow-[0_0_30px_#facc15]">
        <h2 className="text-white text-2xl font-bold drop-shadow-[0_0_15px_#f97316] mb-4">
          Phone Directory
        </h2>
        <p className="text-white text-lg drop-shadow-[0_0_8px_#f97316]">
          📞 Cell: 432-661-6101
        </p>
        <p className="text-white text-lg drop-shadow-[0_0_8px_#f97316]">
          📞 Twilio (Automated Line): +1 (855) 968-0242
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
      </footer>
    </main>
  );
}
