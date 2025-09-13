import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Turning Point – Odessa TX | PhoenixOps Partner",
  description: "Referral partner: Turning Point rehab & detox in Odessa, Texas.",
};

export default function TurningPointPage() {
  return (
    <main className="max-w-2xl mx-auto text-center space-y-6 px-6 py-12">
      <h1 className="text-4xl font-extrabold text-neon drop-shadow-lg">
        Partner Spotlight: Turning Point (Odessa, TX)
      </h1>

      <p className="opacity-90">
        We proudly support <strong>Turning Point</strong>, a trusted resource for
        detox and recovery in the Permian Basin. If you or someone you love needs
        help, reach out. You’re not alone.
      </p>

      {/* ⚠️ Replace the placeholders below with the real contact info */}
      <div className="bg-white/5 border border-white/10 rounded-xl p-6 space-y-2">
        <p><strong>Phone:</strong> <a className="underline" href="tel:+10000000000">Call Turning Point</a></p>
        <p><strong>Address:</strong> Odessa, TX</p>
        <p><strong>Hours:</strong> 24/7 intake</p>
      </div>

      <div className="space-x-3">
        <Link href="/contact" className="px-4 py-2 bg-neon text-black rounded-md font-semibold">
          Talk to PhoenixOps
        </Link>
        <a href="tel:+10000000000" className="px-4 py-2 border border-neon rounded-md font-semibold">
          Call Turning Point
        </a>
      </div>

      <p className="text-sm opacity-70">
        Disclaimer: PhoenixOps is an independent referral partner. We don’t provide
        medical advice. In an emergency, call 911.
      </p>
    </main>
  );
}
