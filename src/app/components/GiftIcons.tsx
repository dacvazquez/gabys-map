import React from "react";
import mikaImage from "../img/mika1-removebg-preview.png";
import cannelliniImage from "../img/cannelloni.png";
import meImage from "../img/fixed_me.png";
import painting from "../img/painting.png";

export const Heart = ({ className = "w-12 h-12" }: { className?: string }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M12 21s-7-4.44-9-7.5C-1 7.5 6 3 12 8c6-5 13 0.5 9 5.5C19 16.56 12 21 12 21z"
      fill="currentColor"
    />
  </svg>
);

export const EarringIcon = () => (
  <svg
    viewBox="0 0 200 120"
    className="w-64 h-48"
    xmlns="http://www.w3.org/2000/svg"
  >
    {/* Arete izquierdo */}
    <g transform="translate(40,15) scale(1.8)">
      {/* Gancho */}
      <circle cx="10" cy="10" r="4" fill="#000000" />
      <line
        x1="10"
        y1="14"
        x2="10"
        y2="32"
        stroke="#000000"
        strokeWidth="2.5"
        strokeLinecap="round"
      />

      {/* Ala izquierda */}
      <g transform="translate(10,32)">
        <path
          d="M0 0 C-16 -16, -20 12, -3 14 C-12 16, -10 32, 0 26 Z"
          fill="#E9B022"
          stroke="#000"
          strokeWidth="2"
        />
        {/* Detalles negros */}
        <circle cx="-8" cy="6" r="2" fill="#000" />
        <circle cx="-10" cy="14" r="1.4" fill="#000" />
        <circle cx="-6" cy="22" r="1.6" fill="#000" />
      </g>
    </g>

    {/* Arete derecho */}
    <g transform="translate(120,15) scale(1.8)">
      {/* Gancho */}
      <circle cx="10" cy="10" r="4" fill="#000000" />
      <line
        x1="10"
        y1="14"
        x2="10"
        y2="32"
        stroke="#000000"
        strokeWidth="2.5"
        strokeLinecap="round"
      />

      {/* Ala derecha */}
      <g transform="translate(10,32)">
        <path
          d="M0 0 C16 -16, 20 12, 3 14 C12 16, 10 32, 0 26 Z"
          fill="#E9B022"
          stroke="#000"
          strokeWidth="2"
        />
        {/* Detalles negros */}
        <circle cx="8" cy="6" r="2" fill="#000" />
        <circle cx="10" cy="14" r="1.4" fill="#000" />
        <circle cx="6" cy="22" r="1.6" fill="#000" />
      </g>
    </g>
  </svg>
);

export const CollarIcon = () => (
  <svg
    viewBox="0 0 120 100"
    className="w-20 h-20"
    xmlns="http://www.w3.org/2000/svg"
  >
    {/* Necklace */}
    <g transform="translate(10,10)">
      {Array.from({ length: 11 }).map((_, i) => {
        const angle = Math.PI * (i / 10);
        const x = 50 + Math.cos(angle) * 40;
        const y = 50 + Math.sin(angle) * 40;
        return (
          <circle
            key={i}
            cx={x}
            cy={y}
            r="4.5"
            fill="#F5E6CC"
            stroke="#E2C799"
            strokeWidth="1"
          />
        );
      })}
    </g>

    {/* Inferior chain */}
    <path
      d="M20 60 Q60 90 100 60"
      stroke="#E2C799"
      strokeWidth="1.5"
      fill="none"
    />

    {/* Strawberry Necklace */}
    <g transform="translate(60,70)">
      <g transform="translate(0,5)">
        {/* Left leaf */}
        <path
          d="M-4 -2 C0 -6, 4 -6, 4 -2 Q0 -4, -4 -2 Z"
          fill="#16A34A"
          stroke="#166534"
          strokeWidth="0.8"
          transform="translate(-5, 0) scale(4)"
        />
        {/* Right leaf */}
        <path
          d="M-4 -2 C0 -6, 4 -6, 4 -2 Q0 -4, -4 -2 Z"
          fill="#16A34A"
          stroke="#166534"
          strokeWidth="0.8"
          transform="translate(5, 0) scale(-4, 4)"
        />
      </g>

      {/* Strawberry */}
      <path
        d="M0 0 C-6 12, 6 12, 0 0 Z"
        fill="#DC2626"
        stroke="#991B1B"
        strokeWidth="1.2"
        transform="scale(4)"
      />

      {/* Seeds */}
      <circle cx="-2" cy="5" r="0.8" fill="#FDE68A" />
      <circle cx="0" cy="8" r="0.8" fill="#FDE68A" />
      <circle cx="2" cy="5" r="0.8" fill="#FDE68A" />

      {/* Join */}
      <line x1="0" y1="-2" x2="0" y2="-6" stroke="#E2C799" strokeWidth="1.2" />
    </g>
  </svg>
);

export const VinylIcon = () => (
  <svg viewBox="0 0 64 64" className="w-16 h-16">
    <circle cx="32" cy="32" r="30" fill="#111827" />
    <circle cx="32" cy="32" r="10" fill="#FF7f22" />
    <circle cx="32" cy="32" r="3" fill="#FDE68A" />
  </svg>
);

export const CatKeychainIcon = () => (
  <img
    src={mikaImage.src}
    alt="Cat keychain"
    className="w-20 h-20"
    style={{ borderRadius: "14px", objectFit: "contain" }}
  />
);

export const CanelonesIcon = () => (
  <img
    src={cannelliniImage.src}
    alt="Sweat and viscous... like semen"
    className="w-20 h-20"
    style={{ borderRadius: "14px", objectFit: "contain" }}
  />
);

export const MeIcon = () => (
  <img
    src={meImage.src}
    alt="Cute guy ah?"
    className="w-20 h-20"
    style={{ borderRadius: "14px", objectFit: "contain" }}
  />
);

export const PaintingIcon = () => (
  <img
    src={painting.src}
    alt="spooky paiting, makes me laught tho"
    className="w-20 h-20"
    style={{ borderRadius: "14px", objectFit: "contain" }}
  />
);

