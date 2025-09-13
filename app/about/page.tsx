export default function About() {
  return (
    <section className="max-w-3xl mx-auto text-center space-y-10 px-6 py-12">
      <h1 className="text-4xl font-extrabold neon-gradient">
        About PhoenixOps
      </h1>

      <p className="opacity-90 text-lg leading-relaxed">
        PhoenixOps is the frontline of <span className="text-neon">Stackin Technologies AO LLC</span>.  
        We combine <span className="text-pink-500">AI automation</span>, 
        <span className="text-green-400"> creative hustles</span>, and 
        <span className="text-sky-400"> real-world services</span> to build opportunity, 
        resilience, and independence. 
      </p>

      <div className="card">
        <h2 className="text-purple-400 text-2xl font-bold">What We Do</h2>
        <ul className="space-y-2 mt-3 text-left mx-auto max-w-md">
          <li>• Build bots that scrape jobs, manage leads, and handle communication.</li>
          <li>• Deliver real-world services: power washing, landscaping, HVAC basics, remodeling.</li>
          <li>• Provide affordable, community-driven automation solutions.</li>
        </ul>
      </div>

      <div className="card">
        <h2 className="text-green-400 text-2xl font-bold">Our Mission</h2>
        <p className="opacity-90 mt-2 leading-relaxed">
          To prove that second chances + hustle can build lasting freedom.  
          We’re showing that from Midland, Texas to the world, tech and grit can uplift families 
          and communities alike.
        </p>
      </div>

      {/* Logo footer */}
      <div className="mt-16 flex flex-col items-center space-y-4">
        <img
          src="/logo.png"
          alt="Stackin Technologies Logo"
          className="h-20 opacity-90 hover:opacity-100 transition"
        />
        <p className="text-xs opacity-60">
          © {new Date().getFullYear()} Stackin Technologies AO LLC
        </p>
      </div>
    </section>
  );
}
