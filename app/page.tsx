export default function Home() {
  return (
    <section className="text-center py-16 space-y-12">
      {/* Main header */}
      <h1 className="text-5xl sm:text-6xl md:text-7xl font-extrabold text-teal-header">
        PhoenixOps
      </h1>
      <p className="tagline mt-4">
        Automation • Hustle • Handywork • Community
      </p>

      {/* Bots in a circle grid */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 mt-12 justify-items-center">
        <div className="text-pink-500 font-bold text-xl">
          MIA <br />
          <span className="text-sm text-neon">Mental Health</span>
        </div>
        <div className="text-green-400 font-bold text-xl">
          Lyra <br />
          <span className="text-sm text-neon">Creative</span>
        </div>
        <div className="text-sky-400 font-bold text-xl">
          Reaper <br />
          <span className="text-sm text-neon">Ops & Security</span>
        </div>
        <div className="text-purple-400 font-bold text-xl">
          Felix <br />
          <span className="text-sm text-neon">Security Chief</span>
        </div>
      </div>

      {/* Services */}
      <section className="mt-16 space-y-6">
        <h2 className="text-3xl font-bold text-teal-header">On-Site Services</h2>
        <div className="card text-neon space-y-2 max-w-md mx-auto">
          <p>✅ Power Washing</p>
          <p>✅ Yardwork & Landscaping</p>
          <p>✅ HVAC & Basic Repairs</p>
          <p>✅ Remodeling & Handywork</p>
        </div>
      </section>

      {/* Logo footer */}
      <footer className="mt-20 flex flex-col items-center space-y-4">
        <img
          src="/logo.png"
          alt="Stackin Technologies Logo"
          className="h-20 opacity-90 hover:opacity-100 transition"
        />
        <p className="text-xs opacity-60 text-neon">
          © {new Date().getFullYear()} Stackin Technologies AO LLC
        </p>
      </footer>
    </section>
  );
}
