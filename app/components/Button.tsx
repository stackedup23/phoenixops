"use client";

import React from "react";

interface ButtonProps {
  label: string;
  onClick?: () => void;
  variant?: "lime" | "purple" | "gradient";
}

export default function Button({ label, onClick, variant = "lime" }: ButtonProps) {
  let classes = "btn-base";

  if (variant === "lime") {
    classes += " bg-lime-500 text-black shadow-[0_0_12px_#9333ea] hover:shadow-[0_0_25px_#9333ea]";
  } else if (variant === "purple") {
    classes += " bg-purple-600 text-white shadow-[0_0_12px_#22c55e] hover:shadow-[0_0_25px_#22c55e]";
  } else if (variant === "gradient") {
    classes += " bg-gradient-to-r from-lime-500 to-purple-600 text-black font-bold shadow-[0_0_15px_#22c55e,0_0_25px_#9333ea] hover:shadow-[0_0_35px_#22c55e,0_0_45px_#9333ea]";
  }

  return (
    <button onClick={onClick} className={`${classes}`}>
      {label}
    </button>
  );
}
