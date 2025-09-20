"use client";

// =============================================================
// Demo Banner (Enhanced)
// =============================================================
// ✅ Purpose: Shows funders/payors that checkout is disabled *by design*
// ✅ Protects legal safety — "demo mode" = compliant & intentional
// ✅ Positions PhoenixOps as *ready for scaling* once clearance is finalized
// =============================================================

export default function DemoBanner() {
  return (
    <div className="w-full bg-yellow-950/90 border-b border-yellow-400 py-4 text-center text-yellow-300 text-sm font-semibold shadow-[0_0_25px_#facc15] animate-pulse">
      ⚠️ <span className="font-bold text-yellow-200">Demo Mode Active</span> — 
      Payments are <b className="text-yellow-100">temporarily disabled</b> 
      pending Stripe + legal clearance. <br />
      <span className="italic text-yellow-400">
        PhoenixOps is verified (EIN • D-U-N-S) and live for funding review.
      </span>
    </div>
  );
}
