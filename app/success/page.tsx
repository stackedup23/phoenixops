"use client";

import Image from "next/image";
import Link from "next/link";

export default function SuccessPage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-purple-950 via-black to-purple-900 text-white px-6 py-12 text-center">
      {/* === Confirmation Header === */}
      <h1 className="text-5xl font-extrabold text-green-400 drop-shadow-[0_0_30px_#22c55e] mb-6">
        ✅ Payment Confirmed
      </h1>
      <p className="text-lg text-gray-200 max-w-2xl mb-10">
        Your support has been logged in the <span className="text-purple-300">PhoenixOps</span> system.  
        <br />
        <span className="italic text-green-300">
          “Mission acknowledged — welcome aboard.”
        </span>
      </p>

      {/* === Next Steps Box === */}
      <div className="bg-black/70 border-2 border-purple-500 rounded-xl shadow-[0_0_25px_#a855f7] p-6 max-w-md mb-10">
        <h2 className="text-2xl font-bold text-purple-400 drop-shadow-[0_0_20px_#a855f7] mb-3">
          What Happens Next
        </h2>
        <ul className="text-gray-300 space-y-2 text-sm">
          <li>📧 A confirmation email will arrive shortly.</li>
          <li>🤖 Your AI service or product is being prepared.</li>
          <li>🛡️ Need help? Our support team is always on call.</li>
        </ul>
      </div>

      {/* === Action Buttons === */}
      <div className="flex flex-wrap items-center justify-center gap-4">
        <Link
          href="/store"
          className="px-6 py-3 rounded-lg font-semibold bg-green-500 text-black hover:bg-green-400 drop-shadow-[0_0_20px_#22c55e] transition"
        >
          Back to Store
        </Link>
        <Link
          href="/contact"
          className="px-6 py-3 rounded-lg font-semibold border border-purple-400 text-purple-300 hover:bg-purple-900/40 drop-shadow-[0_0_20px_#a855f7] transition"
        >
          Contact Support
        </Link>
      </div>

      {/* === Logo Footer === */}
      <div className="mt-14">
        <Image
          src="/assets/logos/logo.png"
          alt="PhoenixOps Logo"
          width={120}
          height={120}
          className="mx-auto drop-shadow-[0_0_30px_#facc15] animate-pulse"
        />
        <p className="mt-3 text-sm text-gray-400">
          © {new Date().getFullYear()} Stackin Technologies AO LLC • PhoenixOps Verified
        </p>
      </div>
    </div>
  );
}
