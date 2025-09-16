"use client";

export default function CancelPage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-purple-900 via-purple-800 to-purple-950 text-white p-8">
      <h1 className="text-5xl font-bold text-red-400 drop-shadow-lg mb-6">
        ❌ Payment Cancelled
      </h1>
      <p className="text-lg text-white/90 mb-8">
        Your checkout session was cancelled.  
        If this was a mistake, you can return and complete your order.
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
