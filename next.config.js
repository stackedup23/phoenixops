/** @type {import('next').NextConfig} */

// ==============================================================================
//   PhoenixOps - next.config.js
//   Security Config + Crawler Setup
//   Architect: Reaper | Operator: J-Mac
// ==============================================================================

const nextConfig = {
  reactStrictMode: true,

  // ================= HEADERS =================
  async headers() {
    return [
      // --------------------------------------------------------
      // 🔐 Universal Security Headers - Applied to ALL routes
      // --------------------------------------------------------
      {
        source: "/(.*)",
        headers: [
          {
            key: "Strict-Transport-Security",
            value: "max-age=63072000; includeSubDomains; preload", // ✅ GOOD — KEEP
          },
          {
            key: "Content-Security-Policy",
            value: `
              default-src 'self';
              script-src 'self';
              style-src 'self' https:;
              img-src 'self' data: https:;
              font-src 'self' https:;
              object-src 'none';
              base-uri 'self';
              form-action 'self';
              frame-ancestors 'none';
            `.replace(/\s{2,}/g, " ").trim(), // 🔒 HARDENED — Removed unsafe-inline/eval
          },
          { key: "X-Frame-Options", value: "SAMEORIGIN" }, // ✅ KEEP
          { key: "X-Content-Type-Options", value: "nosniff" }, // ✅ KEEP
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" }, // ✅ KEEP
          { key: "X-XSS-Protection", value: "1; mode=block" }, // ✅ KEEP

          // --------------------------------------------------------
          // 🔰 NEW HEADERS - Modern Hardening
          // --------------------------------------------------------
          { key: "Cross-Origin-Opener-Policy", value: "same-origin" },
          { key: "Cross-Origin-Embedder-Policy", value: "require-corp" },
          { key: "Cross-Origin-Resource-Policy", value: "same-origin" },
          {
            key: "Permissions-Policy",
            value: "geolocation=(), microphone=(), camera=(), payment=(), fullscreen=self"
          }
        ],
      },

      // --------------------------------------------------------
      // 🗺️ Sitemap & Robots — Ensure crawlers can access
      // --------------------------------------------------------
      {
        source: "/robots.txt",
        headers: [
          { key: "Content-Type", value: "text/plain" },
          { key: "Cache-Control", value: "public, max-age=3600" },
        ],
      },
      {
        source: "/sitemap.xml",
        headers: [
          { key: "Content-Type", value: "application/xml" },
          { key: "Cache-Control", value: "public, max-age=3600" },
        ],
      },
    ];
  },
};

module.exports = nextConfig;
