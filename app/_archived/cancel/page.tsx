"use client";
import Image from "next/image";
import Link from "next/link";

export default function CancelPage() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-purple-950 via-black to-purple-900 text-white p-8">
      {/* === Cancel Header === */}
      <h1 className="text-6xl font-extrabold text-red-400 drop-shadow-[0_0_35px_#ff0000] mb-6 text-center">
        ❌ Mission Aborted
      </h1>
      <p className="text-xl text-gray-200 mb-8 text-center max-w-2xl leading-relaxed drop-shadow-[0_0_15px_#a855f7]">
        Looks like the checkout mission got cancelled. No worries —
        <span className="font-bold text-yellow-300"> no charges were made</span>.
        You can jump back into the store and finish when you’re ready.
      </p>

      {/* === Buttons === */}
      <div className="flex gap-6">
        <Link
          href="/store"
          className="px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white text-lg font-bold rounded-lg shadow-lg hover:shadow-purple-400/70 transition-all duration-300 ease-in-out"
        >
          🔄 Back to Store
        </Link>
        <Link
          href="/contact"
          className="px-8 py-4 bg-gradient-to-r from-red-600 to-orange-500 text-white text-lg font-bold rounded-lg shadow-lg hover:shadow-red-400/70 transition-all duration-300 ease-in-out"
        >
          📞 Contact Support
        </Link>
      </div>

      {/* === Footer Logo + Legal === */}
      <footer className="mt-20 flex flex-col items-center space-y-4">
        <Image
          src="/assets/logos/logo.png"
          alt="Stackin Technologies Logo"
          width={180}
          height={180}
          className="drop-shadow-[0_0_40px_#ffffff] filter"
        />
        <p className="text-sm text-gray-400 drop-shadow-[0_0_15px_#a855f7] text-center">
          © {new Date().getFullYear()} Stackin Technologies AO LLC — All Rights Reserved
          <br />
          Payments securely processed by <span className="font-semibold text-purple-300">Stripe</span>.
        </p>
      </footer>
    </main>
  );
}
