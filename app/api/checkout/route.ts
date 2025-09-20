import { NextResponse } from "next/server";

// =============================================================
// PhoenixOps Checkout Handler (Demo Mode)
// =============================================================
// ✅ Purpose: Keep products visible + clickable for funders
// ✅ Disables Stripe API until legal clearance + Stripe approval
// ✅ Redirects all checkouts to success page with demo flag
// ✅ Protects against errors ("No such price") + legal risk
// =============================================================

export async function POST(req: Request) {
  try {
    const { bot } = await req.json();

    // log attempt (shows bots are active + monitored)
    console.log(`⚠️ Demo checkout triggered for bot: ${bot}`);

    return NextResponse.json({
      url: "/contact/success",
      demo: true,
      message:
        "Checkout flow simulated. Payments disabled until PhoenixOps completes legal + Stripe certification.",
    });
  } catch (err: any) {
    console.error("❌ Demo checkout error:", err.message || err);
    return NextResponse.json(
      { error: "Demo checkout failed", details: err.message },
      { status: 500 }
    );
  }
}
