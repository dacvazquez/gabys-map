import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface IntroCardProps {
  show: boolean;
  onStartJourney: () => void;
  onLaunchHearts: () => void;
  firstGiftRevealed: boolean;
}

export default function IntroCard({
  show,
  onStartJourney,
  onLaunchHearts,
  firstGiftRevealed,
}: IntroCardProps) {
  const [showStartButton, setShowStartButton] = useState(true);
  const [showArrow, setShowArrow] = useState(true);

  const handleStartJourney = () => {
    setShowStartButton(false);
    setShowArrow(false);
    onStartJourney();
  };

  return (
    <AnimatePresence>
      {show && (
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

          <div className="mt-4 flex gap-2 flex-wrap relative">
            {/* Flecha animada — solo si ya se reveló el primer regalo */}
            <AnimatePresence>
              {firstGiftRevealed && showArrow && showStartButton && (
                <motion.div
                  key="arrow"
                  initial={{ opacity: 0, x: -10, y: 0 }}
                  animate={{
                    opacity: [0, 1, 0],
                    x: [-30, 10, -30], // ← movimiento izquierda ↔ derecha
                    transition: {
                      duration: 2.0,
                      repeat: Infinity,
                      ease: "easeInOut",
                    },
                  }}
                  exit={{ opacity: 0 }}
                  className="absolute left-[-50px] top-1/2 -translate-y-9"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-8 h-8 text-violet-500 rotate-90" // ← apunta a la derecha
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 19V5m0 0l-7 7m7-7l7 7"
                    />
                  </svg>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Botón Start the journey */}
            <AnimatePresence>
              {showStartButton && (
                <motion.button
                  key="start-button"
                  initial={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  transition={{ duration: 0.3 }}
                  onClick={handleStartJourney}
                  disabled={!firstGiftRevealed} // Locked if the first gift is not revealed yet
                  className={`px-7 py-2 rounded-full text-sm relative z-[10] transition-all
        ${
          firstGiftRevealed
            ? "bg-violet-500 text-white hover:scale-[1.05]"
            : "bg-gray-300 text-gray-500 cursor-not-allowed"
        }`}
                >
                  Start the journey
                </motion.button>
              )}
            </AnimatePresence>

            {/* Botón Launch hearts */}
            <button
              onClick={onLaunchHearts}
              className="px-3 py-2 bg-white border rounded-full text-sm"
            >
              Launch gay hearts 💅🏻
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export function launchHeartsAnimation() {
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
}
