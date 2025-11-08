import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Heart } from "./GiftIcons";

interface MapHeaderProps {
  isPlaying: boolean;
  onTogglePlay: () => void;
  audioRef: React.RefObject<HTMLAudioElement | null>;
}

export default function MapHeader({
  isPlaying,
  onTogglePlay,
  audioRef,
}: MapHeaderProps) {
  const [showArrow, setShowArrow] = useState(true);

  const handleTogglePlay = () => {
    onTogglePlay();
    setShowArrow(false); // Oculta la flecha cuando el usuario pulsa el botón
  };

  return (
    <header className="absolute top-6 left-6 right-6 flex items-center justify-between z-[100]">
      {/* 🎵 Audio */}
      <audio
        ref={audioRef}
        src="/mitski.mp3"
        loop
        preload="auto"
        onError={() => console.error("Could not load music file")}
        onPlay={() => console.log("Reproducing audio")}
        onPause={() => console.log("Paused audio")}
      />

      {/* ❤️ Título */}
      <div className="flex items-center gap-3">
        <div className="p-2 rounded-full bg-white/80 shadow">
          <Heart className="w-8 h-8 text-violet-500" />
        </div>
        <div>
          <h1 className="text-2xl font-semibold">
            Welcome to your Birthday Road
          </h1>
          <p className="text-sm text-gray-600">
            You give me <strong>TONS</strong> of great memories, you deserve everything I can
            give you and more
          </p>
        </div>
      </div>

      {/* 🔊 Botón con flecha */}
      <div className="flex items-center gap-3 relative z-[100]">
        <div className="relative">
          {/* Flecha animada (solo aparece antes de pulsar) */}
          <AnimatePresence>
            {showArrow && (
              <motion.div
                key="arrow"
                initial={{ opacity: 0, x: -15, y: 70 }}
                animate={{
                  opacity: 1,
                  x: [-15, 20, -15],
                  y: [70, 80, 70],
                  transition: {
                    duration: 1.6,
                    repeat: Infinity,
                    ease: "easeInOut",
                  },
                }}
                exit={{ opacity: 0, y: -10 }}
                className="absolute -top-8 right-2"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-8 h-8 text-violet-500"
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

          {/* Botón principal */}
          <button
            onClick={handleTogglePlay}
            className="px-4 py-2 bg-violet-500 text-white rounded-full shadow hover:scale-[1.05] transition-transform relative z-[100] pointer-events-auto"
          >
            {isPlaying ? "Turn it OFF" : "Turn it UP"}
          </button>
        </div>
      </div>
    </header>
  );
}
