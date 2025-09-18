export default function PartnersPage() {
  return (
    <main className="min-h-screen bg-black text-center px-6 py-16 space-y-12">
      {/* === Title === */}
      <h1 className="text-6xl font-extrabold text-pink-500 drop-shadow-[0_0_25px_#ff00ff]">
        Partner With PhoenixOps
      </h1>

      {/* === Intro Copy === */}
      <p className="text-lg text-gray-300 max-w-3xl mx-auto leading-relaxed">
        At <span className="text-yellow-400 font-bold">Stackin Technologies AO LLC</span>, 
        we believe in growth through collaboration. Whether you’re a visionary, a hustler, 
        or an organization ready to push boundaries, there’s room for you at our table. 
      </p>

      {/* === GPT Flare Line === */}
      <p className="text-md italic text-lime-400 drop-shadow-[0_0_15px_#22c55e]">
        ⚡ “When human grit meets GPT intelligence, partnerships turn into revolutions.” ⚡
      </p>

      {/* === CTA === */}
      <div className="mt-10">
        <a
          href="/contact"
          className="inline-block px-8 py-4 text-lg font-extrabold rounded-lg bg-gradient-to-r from-pink-500 via-yellow-400 to-lime-400 text-black shadow-[0_0_25px_#ff00ff,0_0_40px_#22c55e] hover:scale-105 transition"
        >
          Let’s Build Together →
        </a>
      </div>
    </main>
  );
}
