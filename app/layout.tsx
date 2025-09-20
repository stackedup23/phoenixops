import "./globals.css";
import type { Metadata } from "next";
import Navbar from "@/components/Navbar";

// === Metadata =========================================================
export const metadata: Metadata = {
  title: "Stackin Technologies | PhoenixOps",
  description:
    "PhoenixOps — automation, resilience, and AI innovation by Stackin Technologies AO LLC. EIN Verified • D-U-N-S Registered • Minority-Owned.",
};

// === Root Layout ======================================================
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        {/* === Google Analytics ======================================= */}
        {process.env.NEXT_PUBLIC_GA_ID && (
          <>
            <script
              async
              src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_ID}`}
            ></script>
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

        {/* === Twitter Pixel (X Ads Tracking) ======================== */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              !function(e,t,n,s,u,a){e.twq||(s=e.twq=function(){
                s.exe?s.exe.apply(s,arguments):s.queue.push(arguments);
              },s.version='1.1',s.queue=[],u=t.createElement(n),u.async=!0,
              u.src='https://static.ads-twitter.com/uwt.js',
              a=t.getElementsByTagName(n)[0],
              a.parentNode.insertBefore(u,a))}(window,document,'script');
              twq('config','qikbd'); // ⚡ replace 'qikbd' with your actual Twitter Pixel ID
            `,
          }}
        />
        {/* End Twitter Pixel */}
      </head>

      <body className="bg-black min-h-screen text-center font-sans text-lg">
        {/* === Logo Banner ============================================ */}
        <header className="flex flex-col items-center justify-center py-6">
          <img
            src="/assets/logos/logo.png"
            alt="PhoenixOps Logo"
            className="w-40 h-40 drop-shadow-[0_0_40px_#f97316] animate-pulse"
          />
          <h1 className="mt-4 text-5xl font-extrabold text-white-glow animate-glowLoop">
            PhoenixOps
          </h1>
          <p className="tagline mt-2">
            Automation • Innovation • Excellence
          </p>
        </header>

        {/* === Navigation Bar ========================================== */}
        <Navbar />

        {/* === Main Content Wrapper ==================================== */}
        <main className="flex flex-col items-center justify-center w-full px-6">
          <div className="box-glow w-full max-w-5xl">{children}</div>
        </main>

        {/* === Footer ================================================== */}
        <footer className="mt-12 py-8 px-6 bg-black/70 border-t border-orange-500 rounded-t-xl shadow-[0_0_25px_#f97316]">
          <p className="text-base text-white-glow">
            © {new Date().getFullYear()} Stackin Technologies AO LLC • EIN Verified • D-U-N-S Registered
          </p>
          <p className="mt-3 italic text-white-glow drop-shadow-[0_0_15px_#f97316]">
            ⚡ “PhoenixOps isn’t just a site — it’s a living system. GPT at the core, human grit at the helm.”
          </p>
        </footer>
      </body>
    </html>
  );
}
