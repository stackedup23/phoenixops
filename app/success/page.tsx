"use client";

export default function SuccessPage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-purple-900 via-purple-800 to-purple-950 text-white p-8">
      <h1 className="text-5xl font-bold text-green-400 drop-shadow-lg mb-6">
        ✅ Payment Successful
      </h1>
      <p className="text-lg text-white/90 mb-8">
        Thank you for supporting <span className="text-purple-300">PhoenixOps</span>.  
        Your order is confirmed, and you’ll receive details shortly.
      </p>
      <a
        href="/store"
        className="px-6 py-3 bg-purple-600 text-white rounded-lg shadow-lg hover:bg-purple-700 hover:shadow-purple-400/60 transition-all duration-300 ease-in-out"
      >
        Back to Store
      </a>
    </div>
  );
}
