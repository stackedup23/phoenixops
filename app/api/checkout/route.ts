import { NextResponse } from "next/server";
import Stripe from "stripe";

// ✅ Initialize Stripe without hardcoded apiVersion
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!);

// ✅ Use public domain from ENV or fallback localhost
const SITE_URL = process.env.NEXT_PUBLIC_DOMAIN || "http://localhost:3000";

// ✅ Hard-map products to Stripe Price IDs
const PRODUCTS: Record<string, { priceId: string; name: string }> = {
  mia:     { priceId: "price_1S7sHXEUbB0I5okD1fN5MGz1", name: "MIA — AI Mental Health & Wellness" },
  lyra:    { priceId: "price_1S7sFdEUbB0I5okD5JNsH9JD", name: "LYRA — Finance & Analytics Bot" },
  reaper:  { priceId: "price_1S7sGqEUbB0I5okDGUmDueI8", name: "REAPER — Ops & Field Bot" },
  felix:   { priceId: "price_1S7sH8EUbB0I5okDg2wtTgIN", name: "FELIX — Security Chief / Architect" },
  lockdown:{ priceId: "price_1RX2CpEUbB0I5okDsQk5XOvZ", name: "LOCKDOWN — Sentinel Bot" },
  micro:   { priceId: "price_1S7sIMEUbB0I5okDwBfi0Jwz", name: "PhoenixOps Micro-Support Subscription" },
};

export async function POST(req: Request) {
  try {
    const body = await req.json().catch(() => ({}));
    const key = String(body.key || "").toLowerCase(); // "mia", "lyra", etc.
    const item = PRODUCTS[key];

    if (!item) {
      return NextResponse.json({ error: "Unknown product key." }, { status: 400 });
    }

    const session = await stripe.checkout.sessions.create({
      mode: "payment",
      allow_promotion_codes: true,
      billing_address_collection: "auto",
      line_items: [
        {
          quantity: 1,
          price: item.priceId,
        },
      ],
      success_url: `${SITE_URL}/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${SITE_URL}/cancel`,
    });

    return NextResponse.json({ url: session.url });
  } catch (err) {
    console.error("Stripe session error:", err);
    return NextResponse.json({ error: "Checkout failed" }, { status: 500 });
  }
}
