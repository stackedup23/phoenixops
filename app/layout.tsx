import "./globals.css";
import type { Metadata } from "next";
import Navbar from "./components/Navbar";

export const metadata: Metadata = {
  title: "Stackin Technologies | PhoenixOps",
  description: "Automation, Hustle, and Light in the Dark",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        {/* Google Tag Manager */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
              'https://www.googletagmanager.com/gtm.js?id=${process.env.NEXT_PUBLIC_GTM_ID || "GTM-NMNXFH65"}'+dl;f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','${process.env.NEXT_PUBLIC_GTM_ID || "GTM-NMNXFH65"}');
            `,
          }}
        />

        {/* Google Analytics */}
        <script
          async
          src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_ID || "G-13JMJK4TEJ"}`}
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${process.env.NEXT_PUBLIC_GA_ID || "G-13JMJK4TEJ"}');
            `,
          }}
        />
      </head>
      <body className="bg-black min-h-screen text-center">
        {/* GTM NoScript Fallback */}
        <noscript>
          <iframe
            src={`https://www.googletagmanager.com/ns.html?id=${process.env.NEXT_PUBLIC_GTM_ID || "GTM-NMNXFH65"}`}
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          ></iframe>
        </noscript>

        {/* Logo + Banner */}
        <div className="flex flex-col items-center justify-center py-8">
          <img
            src="/assets/Logos/logo.png"
            alt="Stackin Technologies Logo"
            className="w-48 h-48 drop-shadow-[0_0_25px_rgba(255,215,0,0.8)] animate-pulse"
          />
          <h1 className="mt-4 text-3xl font-extrabold text-yellow-400 drop-shadow-[0_0_20px_#facc15]">
            Stackin Technologies AO LLC
          </h1>
          <p className="text-md text-gray-300 italic">
            Bringers of Light • Builders of Hustle • AI for the Underdog
          </p>
        </div>

        {/* Navigation */}
        <Navbar />

        {/* Main Content */}
        <main className="flex flex-col items-center justify-center w-full px-6">
          {children}
        </main>

        {/* Footer */}
        <footer className="mt-12 py-6 text-gray-400 text-sm">
          © {new Date().getFullYear()} Stackin Technologies AO LLC • EIN Verified •
          D-U-N-S Registered • Minority/Female Co-Owner Advantage
        </footer>
      </body>
    </html>
  );
}
