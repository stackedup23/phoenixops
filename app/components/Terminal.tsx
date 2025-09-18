"use client";

import React from "react";

export default function Terminal() {
  return (
    <div className="terminal-box box-glow max-w-4xl mx-auto my-6">
      <pre className="ascii-art text-xl leading-tight">
{String.raw`
 _____  _             _
|  __ \| |           (_)
| |__) | |__  ___ ___ _  ___
|  ___/| '_ \/ __/ __| |/ _ \
| |    | | | \__ \__ \ | (_) |
|_|    |_| |_|___/___/_|\___/
        PhoenixOps ⚡
`}
      </pre>
      <p className="mt-4 text-white-glow text-lg font-semibold italic">
        ⚡ Terminal online — PhoenixOps is alive.
      </p>
    </div>
  );
}
