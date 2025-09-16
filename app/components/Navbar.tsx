"use client";

import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  return (
    <nav className="bg-black border-b border-gray-800 shadow-[0_0_25px_#14f1d9]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo + Site Name */}
          <div className="flex-shrink-0 flex items-center space-x-3">
            <Link href="/">
              <Image
                src="/logo.png" // make sure logo.png is inside /public
                alt="Stackin Technologies Logo"
                width={40}
                height={40}
                className="drop-shadow-lg"
              />
            </Link>
            <Link href="/">
              <span className="text-2xl font-extrabold text-purple-400 drop-shadow-lg">
                Stackin Technologies AO LLC
              </span>
            </Link>
          </div>

          {/* Navigation Links */}
          <div className="flex space-x-6">
            <Link href="/" className="hover:text-yellow-400 text-teal-400 transition">
              Home
            </Link>
            <Link href="/about" className="hover:text-yellow-400 text-teal-400 transition">
              About
            </Link>
            <Link href="/contact" className="hover:text-yellow-400 text-teal-400 transition">
              Contact
            </Link>
            <Link href="/turning-point" className="hover:text-yellow-400 text-teal-400 transition">
              Turning Point
            </Link>
            <Link href="/certifications" className="hover:text-yellow-400 text-teal-400 transition">
              Certifications
            </Link>
            <Link href="/revenue" className="hover:text-yellow-400 text-teal-400 transition">
              Revenue
            </Link>
            <Link href="/policies" className="hover:text-yellow-400 text-teal-400 transition">
              Policies
            </Link>
            <Link href="/readme" className="hover:text-yellow-400 text-teal-400 transition">
              ReadMe
            </Link>
            <Link href="/store" className="hover:text-yellow-400 text-teal-400 transition">
              Store
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
