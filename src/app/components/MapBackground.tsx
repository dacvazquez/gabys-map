import React from "react";

export default function MapBackground() {
  return (
    <div className="absolute inset-0">
      <svg
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
        className="w-full h-full"
      >
        {/* soft decorative waves */}
        <defs>
          <linearGradient id="g1" x1="0" x2="1">
            <stop offset="0%" stopColor="#FEE2E2" stopOpacity="0.6" />
            <stop offset="100%" stopColor="#E9D5FF" stopOpacity="0.3" />
          </linearGradient>
        </defs>

        <path
          d="M5 20 C25 0, 45 40, 60 20 C75 0, 95 40, 95 40 C97 44, 88 70, 70 66"
          fill="none"
          stroke="url(#g1)"
          strokeWidth="0.8"
          strokeLinecap="round"
        />

        {/* map path connecting the points */}
        <path
          d="M10 25 C22 12, 34 18, 38 26 C42 34, 56 28, 62 32 C68 36, 74 48, 66 56 C58 64, 40 70, 26 72 C12 74, 8 68, 10 60 C15 55, 20 50, 25 45"
          fill="none"
          stroke="#c084fc"
          strokeWidth="0.6"
          strokeDasharray="0.5 0.3"
          strokeLinecap="round"
        />
      </svg>
    </div>
  );
}

