import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Gift } from "./giftsData";
import { Heart } from "./GiftIcons";

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
}: IntroCardProps) {
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
          <div className="mt-4 flex gap-2">
            <button
              onClick={onStartJourney}
              className="px-3 py-2 bg-violet-500 text-white rounded-full text-sm"
            >
              Start the journey
            </button>

            <button onClick={onLaunchHearts} className="px-3 py-2 bg-white border rounded-full text-sm">
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

