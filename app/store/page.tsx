"use client";

import { useState } from "react";

export default function StorePage() {
  const [loading, setLoading] = useState(false);

  const handleCheckout = async () => {
    setLoading(true);
    try {
      const res = await fetch("/api/checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          lineItems: [
            {
              price_data: {
                currency: "usd",
                product_data: {
                  name: "PhoenixOps Test Item",
                },
                unit_amount: 500, // $5.00
              },
              quantity: 1,
            },
          ],
        }),
      });

      const data = await res.json();
      if (data.url) {
        window.location.href = data.url; // Redirect to Stripe Checkout
      } else {
        console.error("Stripe error:", data);
      }
    } catch (err) {
      console.error("Checkout failed:", err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-purple-900 via-purple-800 to-purple-950 text-white p-8">
      <h1 className="text-5xl font-bold text-purple-400 drop-shadow-lg mb-6">
        PhoenixOps Store
      </h1>
      <p className="text-lg text-white/90 mb-8">
        Secure payments powered by <span className="text-purple-300">Stripe</span>.
      </p>
      <button
        onClick={handleCheckout}
        disabled={loading}
        className="px-8 py-4 bg-purple-600 text-white text-xl font-semibold rounded-lg shadow-lg hover:bg-purple-700 hover:shadow-purple-400/60 transition-all duration-300 ease-in-out"
      >
        {loading ? "Processing..." : "Buy Now – $5"}
      </button>
    </div>
  );
}
