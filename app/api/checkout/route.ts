import { NextResponse } from "next/server";
import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!);

// Public domain or localhost
const SITE_URL = process.env.NEXT_PUBLIC_DOMAIN || "http://localhost:3000";

export async function POST(req: Request) {
  try {
    const body = await req.json().catch(() => ({}));
    const priceId = body.priceId;

    if (!priceId) {
      return NextResponse.json({ error: "Missing priceId" }, { status: 400 });
    }

    const session = await stripe.checkout.sessions.create({
      mode: "subscription", // if recurring, or "payment" if one-time
      allow_promotion_codes: true,
      billing_address_collection: "auto",
      line_items: [
        {
          quantity: 1,
          price: priceId,
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
