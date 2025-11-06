// BirthdayMap.tsx
// - `npm install framer-motion`
// - Tailwind must be configured in the project.

import React, { useState, useMemo, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import mikaImage from "../img/mika1-removebg-preview.png";
import cannelliniImage from "../img/cannelloni.png";
import meImage from "../img/fixed_me.png";
import painting from "../img/painting.png";
import gabyImage from "../img/fixed_gaby.png";

type Gift = {
  id: string;
  title: string;
  subtitle?: string;
  description: string;
  x: number; // percentage position on map
  y: number; // percentage position on map
  icon: React.ReactNode;
};

const Heart = ({ className = "w-12 h-12" }: { className?: string }) => (
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

const EarringIcon = () => (
  <svg
    viewBox="0 0 200 120"
    className="w-64 h-48" // tamaño visible mucho mayor
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

const CollarIcon = () => (
  <svg
    viewBox="0 0 120 100"
    className="w-20 h-20"
    xmlns="http://www.w3.org/2000/svg"
  >
    {/* Collar de perlas */}
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

    {/* Cadenita inferior */}
    <path
      d="M20 60 Q60 90 100 60"
      stroke="#E2C799"
      strokeWidth="1.5"
      fill="none"
    />

    {/* Strawberry Necklace, move the whole necklace */}
    <g transform="translate(60,70)">
      {/* Green leaf, adjust this to move it around */}
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

const VinylIcon = () => (
  <svg viewBox="0 0 64 64" className="w-16 h-16">
    <circle cx="32" cy="32" r="30" fill="#111827" />
    <circle cx="32" cy="32" r="10" fill="#FF7f22" />
    <circle cx="32" cy="32" r="3" fill="#FDE68A" />
  </svg>
);

const CatKeychainIcon = () => (
  <img
    src={mikaImage.src}
    alt="Cat keychain"
    className="w-20 h-20"
    style={{ borderRadius: "14px", objectFit: "contain" }}
  />
);

const CanelonesIcon = () => (
  <img
    src={cannelliniImage.src}
    alt="Sweat and viscous... like semen"
    className="w-20 h-20"
    style={{ borderRadius: "14px", objectFit: "contain" }}
  />
);

const MeIcon = () => (
  <img
    src={meImage.src}
    alt="Cute guy ah?"
    className="w-20 h-20"
    style={{ borderRadius: "14px", objectFit: "contain" }}
  />
);

const PaintingIcon = () => (
  <img
    src={painting.src}
    alt="spooky paiting, makes me laught tho"
    className="w-20 h-20"
    style={{ borderRadius: "14px", objectFit: "contain" }}
  />
);

export default function BirthdayMap() {
  const gifts: Gift[] = useMemo(
    () => [
      {
        id: "earings",
        title: "Butterfly Earings",
        subtitle:
          "You said you liked them when you saw them... well I`ve got you those 🦋",
        x: 10,
        y: 26,
        description:
          "Why did the butterfly won the race? Because she is the `Butter`🧈 at it",
        icon: <EarringIcon />,
      },
      {
        id: "necklace",
        title: "Stawberry Necklace",
        subtitle: "You’re berry 🍓 special to me",
        x: 40,
        y: 29,
        description:
          "This I saw it once in a post and I just knew I had to get it for you, and so I did, is yours now",
        icon: <CollarIcon />,
      },
      {
        id: "vinyl",
        title: "Painted Vinyls",
        subtitle: "I’m spinning for you, like a vinyl💿 on a record player",
        x: 67,
        y: 38,
        description:
          "Well this is an easy choice for a present for you since you love vinyls and you love handicrafts, well now you got a summer vibe vinyl and a spooky one :3",
        icon: <VinylIcon />,
      },
      {
        id: "catkey",
        title: "Key-cat 🍫",
        subtitle: "You’ve cat to be kitten me! I meaw you ฅ⁠^⁠•⁠ﻌ⁠•⁠^⁠ฅ",
        x: 54,
        y: 65,
        description:
          "A keyhold based on the thing you love the most, your beautiful (and nearly morbidly obese) cat (⁠=⁠^⁠･⁠ｪ⁠･⁠^⁠=⁠)",
        icon: <CatKeychainIcon />,
      },
      {
        id: "cannelloni",
        title: "Cannelloni Lasagna",
        subtitle: "I canna🇮🇹-love you, you know?",
        x: 28,
        y: 72,
        description:
          "I wanted to make you your favorite dish for your birthday but you wanted an outside celebration, thats why I wanted to give you this on Sunday insted of today but anyway, you`ll get it I promise ",
        icon: <CanelonesIcon />,
      },
      {
        id: "picture",
        title: "A picture of me & you",
        subtitle: "You make my .png hard 🖼️",
        x: 10,
        y: 60,
        description:
          "You love taking pictures, I`m taking the bullet this time so you neet to give me credit for this <3",
        icon: <PaintingIcon />,
      },
      {
        id: "me",
        title: "Badass Boyfriend",
        subtitle: "The best you could get, trully sorry for you 🤭",
        x: 28,
        y: 43,
        description:
          "Handsome, smart, a strong, clean, nice body, v-lined jaw, all that you are missing by being with me, thank you",
        icon: <MeIcon />,
      },
    ],
    []
  );

  const [active, setActive] = useState<Gift | null>(null);
  const [showIntro, setShowIntro] = useState(true);
  const [currentStep, setCurrentStep] = useState(0);
  const [revealed, setRevealed] = useState<string[]>([]);
  const [gabyPos, setGabyPos] = useState({ x: gifts[0].x, y: gifts[0].y });
  const [isAutoMoving, setIsAutoMoving] = useState(false);

  useEffect(() => {
    if (currentStep < gifts.length) {
      const next = gifts[currentStep];
      setGabyPos({ x: next.x, y: next.y });
    }
  }, [currentStep]);

  // Automatic movement
  useEffect(() => {
    if (!isAutoMoving) return;
    if (currentStep >= gifts.length) {
      setIsAutoMoving(false);
      return;
    }

    const timeout = setTimeout(() => {
      setActive(gifts[currentStep]);
      if (!revealed.includes(gifts[currentStep].id)) {
        setRevealed((r) => [...r, gifts[currentStep].id]);
      }
    }, 2000); // wait between steps (3 seg)

    return () => clearTimeout(timeout);
  }, [currentStep, isAutoMoving]);

  return (
    <div className="min-h-screen bg-gradient-to-b from-pink-50 via-white to-purple-50 flex items-center justify-center p-6">
      {/* Container */}
      <div className="relative w-full max-w-6xl h-[80vh] bg-white/60 backdrop-blur-md rounded-2xl shadow-2xl overflow-hidden border border-white/40">
        {/* Top header */}
        <header className="absolute top-6 left-6 right-6 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-full bg-white/80 shadow">
              <Heart className="w-8 h-8 text-violet-500" />
            </div>
            <div>
              <h1 className="text-2xl font-semibold">
                Welcome to your Birthday Road
              </h1>
              <p className="text-sm text-gray-600">
                You give me TONS of great memories, you deserve everything I can
                give you and more
              </p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <button
              onClick={() => setShowIntro((s) => !s)}
              className="px-4 py-2 bg-violet-500 text-white rounded-full shadow hover:scale-[1.02] transition-transform"
            >
              {/* AÑADIR MUSICA DE MISKY*/} TURN IT UP/OFF
            </button>
          </div>
        </header>
        {/* Gaby´s floting around image */}
        <img
          src={gabyImage.src}
          alt="Gaby"
          className="absolute w-24 h-24 rounded-full border-4 border-pink-300 shadow-xl transition-all duration-1000 ease-in-out z-50"
          style={{
            left: `${gabyPos.x}%`,
            top: `${gabyPos.y}%`,
            transform: "translate(-100%, -50%)",
          }}
        />
        {/* SVG map background */}
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
              d="M5 20 C25 0, 45 40, 60 20 C75 0, 95 40, 95 40"
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

        {gifts.map((g, index) => {
          const isUnlocked = index <= currentStep;
          const isRevealed = revealed.includes(g.id);

          return (
            <motion.button
              key={g.id}
              layout
              disabled={!isUnlocked}
              onClick={() => {
                if (index > currentStep) return; // no se puede abrir aún
                setActive(g);
                if (!revealed.includes(g.id)) {
                  setRevealed([...revealed, g.id]);
                }
              }}
              className={`absolute -translate-x-1/2 -translate-y-1/2 transition-all ${
                !isUnlocked ? "opacity-30 pointer-events-none" : ""
              }`}
              style={{ left: `${g.x}%`, top: `${g.y}%` }}
              aria-label={g.title}
            >
              <motion.div
                initial={{ rotate: -15 }}
                animate={{ rotate: 15 }}
                transition={{
                  repeat: Infinity,
                  repeatType: "reverse",
                  duration: 1.5,
                }}
                className="flex flex-col items-center gap-2"
              >
                <div className="p-2 bg-white/90 rounded-full shadow-md border border-white/60">
                  <div className="w-20 h-20 flex items-center justify-center text-violet-600">
                    {isRevealed ? g.icon : <span className="text-3xl">?</span>}
                  </div>
                </div>
                <span className="text-xs font-medium text-gray-700">
                  {isRevealed ? g.title : "???"}
                </span>
              </motion.div>
            </motion.button>
          );
        })}

        {/* Intro / floating card */}
        <AnimatePresence>
          {showIntro && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="absolute right-6 bottom-6 max-w-xs p-5 bg-white/90 rounded-xl shadow-xl border border-white/40"
            >
              <h2 className="text-lg font-semibold">Happy Birthday Gaby 💜</h2>
              <p className="mt-2 text-sm text-gray-600">
                Lets see where the road takes us :3 ...
              </p>
              <div className="mt-4 flex gap-2">
                <button
                  onClick={() => {
                    setShowIntro(false);
                    setIsAutoMoving(true);
                    // If the first gift was opened, go to the next one
                    if (revealed.includes(gifts[0].id)) {
                      setCurrentStep(1);
                      setActive(gifts[1]);
                      setRevealed((r) =>
                        r.includes(gifts[1].id) ? r : [...r, gifts[1].id]
                      );
                    } else {
                      // If it doesn`t, start from the beguinning
                      setActive(gifts[0]);
                      setRevealed([gifts[0].id]);
                      setCurrentStep(1);
                    }
                  }}
                  className="px-3 py-2 bg-violet-500 text-white rounded-full text-sm"
                >
                  Start the journey
                </button>

                <button
                  onClick={() => {
                    // small fireworks - animate hearts across the screen by toggling a tiny state
                    const body = document.body;
                    for (let i = 0; i < 6; i++) {
                      const el = document.createElement("div");
                      el.innerText = "💜";
                      el.style.position = "fixed";
                      el.style.left = `${10 + Math.random() * 80}%`;
                      el.style.top = `${10 + Math.random() * 80}%`;
                      el.style.fontSize = `${12 + Math.random() * 28}px`;
                      el.style.pointerEvents = "none";
                      el.style.opacity = "0";
                      el.style.transform = `translateY(20px) scale(0.8)`;
                      el.style.transition = "all 1.2s ease-out";
                      body.appendChild(el);
                      requestAnimationFrame(() => {
                        el.style.opacity = "1";
                        el.style.transform = `translateY(-60px) scale(1)`;
                      });
                      setTimeout(() => {
                        el.style.opacity = "0";
                        el.style.transform = `translateY(-120px) scale(0.6)`;
                        setTimeout(() => body.removeChild(el), 1200);
                      }, 700 + Math.random() * 400);
                    }
                  }}
                  className="px-3 py-2 bg-white border rounded-full text-sm"
                >
                  Launch gay hearts 💅🏻
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Active Gift Modal */}
        <AnimatePresence>
          {active && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 flex items-center justify-center p-6 pointer-events-auto z-70"
            >
              <motion.div
                initial={{ scale: 0.85, y: 20 }}
                animate={{ scale: 1, y: 0 }}
                exit={{ scale: 0.85, y: 20 }}
                transition={{ type: "spring", stiffness: 300, damping: 25 }}
                className="w-full max-w-2xl bg-white rounded-2xl shadow-2xl border border-white/30 p-6 relative"
              >
                <button
                  onClick={() => {
                    setActive(null);
                    if (isAutoMoving && currentStep < gifts.length) {
                      setCurrentStep((s) => s + 1);
                    }
                  }}
                  className="absolute -top-3 -right-3 bg-white rounded-full p-3 shadow-md border"
                >
                  ✕
                </button>

                <div className="flex gap-6 items-center">
                  <div className="w-36 h-36 flex items-center justify-center rounded-xl bg-gradient-to-br from-black to-purple-500 border p-4 overflow-hidden">
                    <div className="w-full h-full flex items-center justify-center">
                      {active.icon}
                    </div>
                  </div>

                  <div className="flex-1">
                    <h3 className="text-2xl font-semibold">{active.title}</h3>
                    <p className="text-sm text-gray-550 mt-1">
                      {active.subtitle}
                    </p>
                    <p className="mt-4 text-gray-550">{active.description}</p>

                    <div className="mt-6 flex gap-3">
                      <motion.button
                        whileTap={{ scale: 0.96 }}
                        className="px-4 py-2 rounded-full bg-violet-500 text-white"
                        onClick={() => {
                          // small gift reveal: animate a confetti-like row of emojis
                          const container = document.createElement("div");
                          container.style.position = "fixed";
                          container.style.left = "50%";
                          container.style.top = "20%";
                          container.style.transform = "translateX(-50%)";
                          container.style.pointerEvents = "none";
                          document.body.appendChild(container);
                          for (let i = 0; i < 18; i++) {
                            const el = document.createElement("div");
                            el.innerText = i % 2 === 0 ? "🖤" : "💜";
                            el.style.position = "absolute";
                            el.style.left = `${-150 + i * 16}px`;
                            el.style.top = `0px`;
                            el.style.opacity = "0";
                            el.style.transform = `translateY(0px) rotate(${
                              Math.random() * 360
                            }deg)`;
                            el.style.transition = `all 900ms cubic-bezier(.2,.9,.2,1)`;
                            container.appendChild(el);
                            setTimeout(() => {
                              el.style.opacity = "1";
                              el.style.transform = `translateY(${
                                80 + Math.random() * 120
                              }px) rotate(${Math.random() * 360}deg)`;
                            }, 20 + i * 20);
                            setTimeout(() => {
                              el.style.opacity = "0";
                            }, 900 + i * 30);
                          }
                          setTimeout(
                            () => document.body.removeChild(container),
                            1400
                          );
                        }}
                      >
                        Press if you love it
                      </motion.button>
                    </div>
                  </div>
                </div>

                {/* small decorative animation */}
                <motion.div
                  animate={{
                    rotate: [0, 3, 0, -3, 0],
                    scale: [1, 1.02, 1, 1.02, 1],
                  }}
                  transition={{
                    repeat: Infinity,
                    duration: 6,
                    ease: "easeInOut",
                  }}
                  className="absolute right-6 bottom-6 opacity-80"
                >
                  <svg
                    width="72"
                    height="72"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    {/* Degradado rosado */}
                    <defs>
                      <radialGradient
                        id="pinkGradient"
                        cx="50%"
                        cy="50%"
                        r="50%"
                      >
                        <stop offset="0%" stopColor="#a00fff" />
                        <stop offset="70%" stopColor="#000000" />
                        <stop offset="100%" stopColor="#a00fff" />
                      </radialGradient>
                      <linearGradient
                        id="orangeStroke"
                        x1="0"
                        y1="0"
                        x2="1"
                        y2="1"
                      >
                        <stop offset="0%" stopColor="#cccccc" />
                        <stop offset="100%" stopColor="#ffffff" />
                      </linearGradient>
                    </defs>

                    {/* Círculo exterior con brillo */}
                    <circle
                      cx="12"
                      cy="12"
                      r="9.5"
                      fill="url(#pinkGradient)"
                      stroke="url(#orangeStroke)"
                      strokeWidth="0.8"
                      opacity="0.9"
                    />

                    {/* Detalle interno en forma de onda */}
                    <path
                      d="M6 12 C8 8, 14 8, 18 12 C14 16, 8 16, 6 12 Z"
                      fill="none"
                      stroke="url(#orangeStroke)"
                      strokeWidth="1.1"
                      strokeLinecap="round"
                    />

                    {/* Brillo superior */}
                    <circle cx="9" cy="7" r="0.8" fill="white" opacity="0.8" />
                  </svg>
                </motion.div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Footer / credits */}
        <footer className="absolute left-6 right-6 bottom-6 flex items-center justify-between text-sm text-gray-500">
          <span></span>
          <span></span>
        </footer>
      </div>
    </div>
  );
}
