"use client";

export default function Contact() {
  return (
    <main className="min-h-screen bg-black text-center px-6 py-16 space-y-10">
      {/* Header */}
      <h1 className="text-6xl md:text-7xl font-extrabold text-teal-400 drop-shadow-[0_0_35px_#14f1d9]">
        Contact Us
      </h1>
      <p className="text-xl text-yellow-400 drop-shadow-[0_0_20px_#facc15]">
        Get in touch with Stackin Technologies AO LLC — automation never sleeps.
      </p>

      {/* Contact Info */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto mt-12 text-lg">
        <div className="bg-black/70 border-4 border-teal-500 rounded-xl shadow-[0_0_30px_#14f1d9] p-6 space-y-3">
          <h2 className="text-2xl font-bold text-teal-400 drop-shadow-[0_0_20px_#14f1d9]">
            Business
          </h2>
          <p className="text-gray-200">admin@stackingtoolsai.com</p>
          <p className="text-gray-200">Phone: +1 (855) 968-0242</p>
        </div>

        <div className="bg-black/70 border-4 border-purple-500 rounded-xl shadow-[0_0_30px_#a855f7] p-6 space-y-3">
          <h2 className="text-2xl font-bold text-purple-400 drop-shadow-[0_0_20px_#a855f7]">
            Work / Ops
          </h2>
          <p className="text-gray-200">felixops23@proton.me</p>
          <p className="text-gray-200">admin@vercel-email.com</p>
        </div>

        <div className="bg-black/70 border-4 border-pink-500 rounded-xl shadow-[0_0_30px_#ec4899] p-6 space-y-3">
          <h2 className="text-2xl font-bold text-pink-400 drop-shadow-[0_0_20px_#ec4899]">
            Personal
          </h2>
          <p className="text-gray-200">stackingtools247@gmail.com</p>
        </div>

        <div className="bg-black/70 border-4 border-yellow-500 rounded-xl shadow-[0_0_30px_#facc15] p-6 space-y-3">
          <h2 className="text-2xl font-bold text-yellow-400 drop-shadow-[0_0_20px_#facc15]">
            Headquarters
          </h2>
          <p className="text-gray-200">1719 E Pine St</p>
          <p className="text-gray-200">Midland, TX 79705</p>
        </div>
      </section>

      {/* Hours / Note */}
      <p className="mt-12 text-lg text-gray-400 italic">
        We operate globally, 24/7. Expect replies within 1–2 business days.
      </p>

      {/* Footer */}
      <footer className="mt-16 text-sm text-gray-400">
        <p>
          © 2025 Stackin Technologies AO LLC • Powered by OpenAI • Built with
          Next.js • Hustle never sleeps
        </p>
      </footer>
    </main>
  );
}
