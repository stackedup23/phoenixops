import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Turning Point – Odessa TX | PhoenixOps Partner",
  description:
    "Referral partner: Turning Point rehab & detox in Odessa, Texas. Life-saving support, real care, real results.",
};

export default function TurningPointPage() {
  return (
    <main className="min-h-screen bg-black px-6 py-16 text-center space-y-12">
      {/* Header */}
      <h1 className="text-6xl md:text-7xl font-extrabold text-pink-400 drop-shadow-[0_0_40px_#ec4899]">
        Partner Spotlight: Turning Point (Odessa, TX)
      </h1>

      {/* Testimonial / Promoter Section */}
      <section className="max-w-4xl mx-auto space-y-6">
        <p className="text-2xl text-purple-300 drop-shadow-[0_0_25px_#a855f7] leading-relaxed">
          I walked into <span className="text-pink-400 font-bold">Turning Point</span> broken, lost, and weighed down.
          I walked out reborn — armed with tools, hope, and a vision for tomorrow.
        </p>
        <p className="text-xl text-yellow-300 drop-shadow-[0_0_25px_#facc15] leading-relaxed">
          The staff here don’t just clock in. They care. They listen. They guide.
          Every patient is treated with dignity and strength, no matter the past.
        </p>
        <p className="text-lg text-purple-200 drop-shadow-[0_0_20px_#a855f7] leading-relaxed">
          Without them, there would be no PhoenixOps. My life, my family, and my
          company carry their fingerprints. They are a cornerstone of resilience in
          the Permian Basin.
        </p>
      </section>

      {/* Contact Info Box */}
      <div className="bg-black/70 border-4 border-pink-500 rounded-xl shadow-[0_0_30px_#ec4899] max-w-lg mx-auto p-6 space-y-4">
        <h2 className="text-3xl font-bold text-yellow-300 drop-shadow-[0_0_30px_#facc15]">
          Get Help Today
        </h2>
        <p className="text-purple-300"><strong>Phone:</strong> <a className="underline" href="tel:+14325551234">432-555-1234</a></p>
        <p className="text-purple-300"><strong>Address:</strong> Odessa, TX</p>
        <p className="text-purple-300"><strong>Hours:</strong> 24/7 Intake</p>
      </div>

      {/* Call to Action */}
      <div className="space-x-4">
        <Link
          href="/contact"
          className="px-6 py-3 bg-yellow-400 text-black font-bold rounded-xl shadow-[0_0_25px_#facc15] hover:bg-yellow-300 transition"
        >
          Talk to PhoenixOps
        </Link>
        <a
          href="tel:+14325551234"
          className="px-6 py-3 border-2 border-pink-400 text-pink-400 font-bold rounded-xl shadow-[0_0_25px_#ec4899] hover:bg-pink-400 hover:text-black transition"
        >
          Call Turning Point
        </a>
      </div>

      {/* Disclaimer */}
      <p className="mt-12 text-sm text-gray-400 italic">
        Disclaimer: PhoenixOps is an independent referral partner. We don’t provide
        medical advice. In an emergency, call 911.
      </p>
    </main>
  );
}
