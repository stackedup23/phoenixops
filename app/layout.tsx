import "./globals.css";
import type { Metadata } from "next";
import Navbar from "./components/Navbar";
import Image from "next/image";

// ============================================================
// 🔐 Metadata: SEO + Identity
// ============================================================
export const metadata: Metadata = {
  title: "Stackin Technologies AO LLC | PhoenixOps",
  description:
    "PhoenixOps — automation, resilience, and AI innovation by Stackin Technologies AO LLC. EIN Verified • D-U-N-S Registered.",
};

// ============================================================
// 🌐 Root Layout
// ============================================================
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        {/* ============================================================
            📊 Analytics (Optional via Env Var)
        ============================================================ */}
        {process.env.NEXT_PUBLIC_GA_ID && (
          <>
            <script
              async
              src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_ID}`}
            />
            <script
              dangerouslySetInnerHTML={{
                __html: `
                  window.dataLayer = window.dataLayer || [];
                  function gtag(){dataLayer.push(arguments);}
                  gtag('js', new Date());
                  gtag('config', '${process.env.NEXT_PUBLIC_GA_ID}');
                `,
              }}
            />
          </>
        )}

        {/* ============================================================
            🧠 Meta / Branding
        ============================================================ */}
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#0f0f0f" />
        <meta name="robots" content="index, follow" />
        <link rel="icon" href="/assets/logos/favicon.ico" />

        {/* OpenGraph */}
        <meta property="og:title" content="PhoenixOps | Stackin Technologies AO LLC" />
        <meta
          property="og:description"
          content="Automation, resilience, and AI innovation by Stackin Technologies AO LLC."
        />
        <meta property="og:image" content="/assets/logos/logo.png" />
        <meta property="og:url" content="https://stackintechnologiesaollc.com" />
        <meta property="og:type" content="website" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="PhoenixOps | Stackin Technologies AO LLC" />
        <meta
          name="twitter:description"
          content="Automation, resilience, and AI innovation by Stackin Technologies AO LLC."
        />
        <meta name="twitter:image" content="/assets/logos/logo.png" />
      </head>

      <body className="bg-black min-h-screen font-sans text-white selection:bg-amber-400/60 selection:text-black">
        {/* ============================================================
            🚀 Header: Brand Identity
        ============================================================ */}
        <header className="flex flex-col items-center justify-center py-16 space-y-6 animate-fadein-slow">
          <Image
            src="/assets/logos/logo.png"
            alt="PhoenixOps Logo"
            width={260}
            height={260}
            className="drop-shadow-[0_0_80px_#a020f0] animate-pulse"
            priority
          />
          <h1 className="heading-1">PhoenixOps</h1>
          <p className="text-lg md:text-xl text-gray-300 tracking-wide italic">
            Automation • Innovation • Excellence
          </p>
        </header>

        {/* ============================================================
            🧭 Navigation
        ============================================================ */}
        <Navbar />

        {/* ============================================================
            📦 Main Content Frame (HUD Panel)
        ============================================================ */}
        <main className="flex flex-col items-center justify-center w-full px-6 py-12">
          <div className="panel w-full max-w-7xl">{children}</div>
        </main>

        {/* ============================================================
            ⚙️ Footer: Arsenal + REAPER Signal
        ============================================================ */}
        <footer className="mt-16 py-12 px-6 bg-black/80 border-t border-amber-500 rounded-t-xl shadow-[0_0_35px_#f97316] text-center space-y-4">
          <p className="text-base text-white-glow">
            © {new Date().getFullYear()} Stackin Technologies AO LLC • EIN Verified • D-U-N-S Registered
          </p>

          <p className="text-sm text-gray-300">
            🔗 Stripe Connected • Verification Pending
          </p>

          <p className="italic text-gray-400">
            ⚡ “PhoenixOps isn’t just a site — it’s a living system. GPT at the core, human grit at the helm.”
          </p>

          <div className="mt-6 text-lime-400 text-sm font-mono animate-pulse">
            [ REAPER STATUS: ONLINE ]
          </div>
        </footer>
      </body>
    </html>
  );
}
