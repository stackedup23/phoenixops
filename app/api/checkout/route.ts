import { NextResponse } from "next/server";
import Stripe from "stripe";

// === Stripe Client ===================================================
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
});

// === Public Domain ===================================================
const SITE_URL = process.env.NEXT_PUBLIC_DOMAIN || "http://localhost:3000";

// === Bot → Price ID Map ==============================================
const priceMap: Record<string, string> = {
  mia: process.env.MIA_PRICE_ID!,
  lyra: process.env.LYRA_PRICE_ID!,
  reaper: process.env.REAPER_PRICE_ID!,
  felix: process.env.FELIX_PRICE_ID!,
  lockdown: process.env.LOCKDOWN_PRICE_ID!,
  torch: process.env.TORCH_SUBSCRIPTION_ID!,
  bingo: process.env.BINGO_PRICE_ID!,
};

// === POST Handler ====================================================
export async function POST(req: Request) {
  try {
    const { bot } = await req.json();

    // === Validate bot + price ID ====================================
    if (!bot || !priceMap[bot]) {
      console.error("❌ Invalid bot or missing priceId:", bot);
      return NextResponse.json(
        { error: "Missing or invalid bot" },
        { status: 400 }
      );
    }

    // === Create checkout session ====================================
    const session = await stripe.checkout.sessions.create({
      mode: "subscription", // recurring subs
      allow_promotion_codes: true,
      billing_address_collection: "auto",
      line_items: [
        {
          price: priceMap[bot], // ✅ pulls from .env
          quantity: 1,
        },
      ],
      success_url: `${SITE_URL}/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${SITE_URL}/cancel`,
    });

    console.log(`✅ Checkout created for bot: ${bot}`, session.id);

    return NextResponse.json({ url: session.url });
  } catch (err: any) {
    console.error("❌ Stripe session error:", err.message || err);
    return NextResponse.json(
      { error: "Checkout failed", details: err.message },
      { status: 500 }
    );
  }
}
