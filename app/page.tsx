import Image from "next/image"

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-between bg-black text-center">
      
      {/* Hero Section */}
      <section className="mt-24 px-4">
        <h1 className="text-7xl font-extrabold text-yellow-400 drop-shadow-[0_0_35px_#facc15]">
          Stackin Technologies
        </h1>
        <h2 className="mt-6 text-4xl font-bold text-teal-400 drop-shadow-[0_0_25px_#14f1d9]">
          Lighting the way for the lost and the brave — 
          <br />
          A beacon of hope in the darkness.
        </h2>
        <p className="mt-6 text-2xl text-red-400 drop-shadow-[0_0_20px_#ef4444]">
          Automation • Innovation • Hustle
        </p>
      </section>

      {/* Services Grid */}
      <section className="grid grid-cols-1 md:grid-cols-4 gap-10 mt-20 px-6 w-full max-w-7xl">
        
        <div className="p-8 border-4 border-pink-500 rounded-xl bg-black/70 hover:bg-black/90 transition shadow-[0_0_30px_#ec4899]">
          <h2 className="text-3xl font-bold text-pink-400">MIA</h2>
          <p className="mt-4 text-pink-300 text-lg">
            Core AI automation assistant — medical + mission critical.
          </p>
        </div>

        <div className="p-8 border-4 border-teal-500 rounded-xl bg-black/70 hover:bg-black/90 transition shadow-[0_0_30px_#14f1d9]">
          <h2 className="text-3xl font-bold text-teal-400">LIRA</h2>
          <p className="mt-4 text-teal-300 text-lg">
            Finance & analytics bot — tracking growth and scale.
          </p>
        </div>

        <div className="p-8 border-4 border-red-500 rounded-xl bg-black/70 hover:bg-black/90 transition shadow-[0_0_30px_#ef4444]">
          <h2 className="text-3xl font-bold text-red-400">REAPER</h2>
          <p className="mt-4 text-red-300 text-lg">
            Ops & field bot — security, scraping, tactical deployment.
          </p>
        </div>

        <div className="p-8 border-4 border-sky-500 rounded-xl bg-black/70 hover:bg-black/90 transition shadow-[0_0_30px_#38bdf8]">
          <h2 className="text-3xl font-bold text-sky-400">FELIX</h2>
          <p className="mt-4 text-sky-300 text-lg">
            Security Chief • Automation Architect • Overwatch AI.
          </p>
        </div>

      </section>

      {/* Footer with glowing stretched logo */}
      <footer className="mt-20 mb-10 flex flex-col items-center space-y-6">
        <Image
          src="/assets/logos/logo.png"
          alt="Stackin Technologies Logo"
          width={280}
          height={280}
          className="drop-shadow-[0_0_50px_#facc15]"
        />
        <p className="text-lg text-purple-300 drop-shadow-[0_0_15px_#a855f7]">
          © {new Date().getFullYear()} Stackin Technologies AO LLC — 
          Powered by OpenAI • Built with Next.js • Hustle never sleeps
        </p>
      </footer>
    </main>
  )
}
