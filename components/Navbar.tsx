"use client";

import { useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="w-full bg-black text-purple-400 shadow-md border-b border-purple-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Left: Logo / Title */}
          <div className="flex-shrink-0">
            <Link
              href="/"
              className="text-2xl font-bold hover:text-purple-300 transition"
            >
              PhoenixOps
            </Link>
          </div>

          {/* Right: Nav Links */}
          <div className="flex items-center space-x-6 relative">
            <Link href="/about" className="hover:text-purple-300 transition">
              About
            </Link>
            <Link href="/store" className="hover:text-purple-300 transition">
              Store
            </Link>
            <Link href="/bots" className="hover:text-purple-300 transition">
              Bots
            </Link>
            <Link href="/contact" className="hover:text-purple-300 transition">
              Contact
            </Link>

            {/* Ops Menu Dropdown */}
            <div className="relative">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="hover:text-purple-300 transition flex items-center"
              >
                Ops Menu
                <span className="ml-1">{isOpen ? "▲" : "▼"}</span>
              </button>

              {isOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-black border border-purple-700 rounded-lg shadow-lg animate-fade-in">
                  <ul className="py-2 text-purple-400">
                    <li>
                      <Link
                        href="/certifications"
                        className="block px-4 py-2 hover:bg-purple-900 hover:text-purple-200 transition"
                      >
                        Certifications
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/turning-point"
                        className="block px-4 py-2 hover:bg-purple-900 hover:text-purple-200 transition"
                      >
                        Turning Point
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/revenue"
                        className="block px-4 py-2 hover:bg-purple-900 hover:text-purple-200 transition"
                      >
                        Revenue
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/partners"
                        className="block px-4 py-2 hover:bg-purple-900 hover:text-purple-200 transition"
                      >
                        Partners
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/policies"
                        className="block px-4 py-2 hover:bg-purple-900 hover:text-purple-200 transition"
                      >
                        Policies
                      </Link>
                    </li>
                  </ul>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

