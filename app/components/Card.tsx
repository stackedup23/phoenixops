"use client";

import React from "react";

interface CardProps {
  title?: string;
  children: React.ReactNode;
  footer?: React.ReactNode;
}

export default function Card({ title, children, footer }: CardProps) {
  return (
    <div className="box-glow p-6 my-6 max-w-4xl mx-auto text-left rounded-lg">
      {/* === Card Title === */}
      {title && (
        <h2 className="text-white-glow text-3xl font-extrabold mb-4 tracking-wide">
          {title}
        </h2>
      )}

      {/* === Card Content === */}
      <div className="text-lg leading-relaxed text-gray-200">
        {children}
      </div>

      {/* === Card Footer === */}
      {footer && (
        <div className="mt-4 text-sm text-white-glow italic">
          {footer}
        </div>
      )}
    </div>
  );
}
