import React from "react";
import { motion } from "framer-motion";
import { Gift } from "./giftsData";

interface GiftNodeProps {
  gift: Gift;
  index: number;
  currentStep: number;
  isRevealed: boolean;
  onClick: () => void;
}

export default function GiftNode({
  gift,
  index,
  currentStep,
  isRevealed,
  onClick,
}: GiftNodeProps) {
  const isUnlocked = index <= currentStep;

  return (
    <motion.button
      key={gift.id}
      layout
      disabled={!isUnlocked}
      onClick={onClick}
      className={`absolute -translate-x-1/2 -translate-y-1/2 transition-all ${
        !isUnlocked ? "opacity-30 pointer-events-none" : ""
      }`}
      style={{ left: `${gift.x}%`, top: `${gift.y}%` }}
      aria-label={gift.title}
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
            {isRevealed ? gift.icon : <span className="text-3xl">?</span>}
          </div>
        </div>
        <span className="text-xs font-medium text-gray-700">
          {isRevealed ? gift.title : "???"}
        </span>
      </motion.div>
    </motion.button>
  );
}

