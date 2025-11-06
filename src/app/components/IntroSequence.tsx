"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import BirthdayMap from "./BirthdayMap";

export default function IntroSequence() {
  const [step, setStep] = useState(0);
  const [showMap, setShowMap] = useState(false);
  const [transitioning, setTransitioning] = useState(false);

  const handleClick = () => {
    if (transitioning) return;
    if (step < 3) {
      setStep(step + 1);
    } else if (step === 3) {
      // start epic transition
      setTransitioning(true);
      setTimeout(() => setShowMap(true), 3000); // wait until animation finishes
    }
  };

  // 🌫️ Niebla en movimiento
  const FogLayer = ({ reverse = false }: { reverse?: boolean }) => (
    <motion.div
      className="absolute w-[300%] h-[300%] bg-[radial-gradient(circle_at_center,_rgba(180,0,255,0.2)_0%,_transparent_60%)] blur-3xl opacity-60"
      animate={{
        x: reverse ? ["25%", "-25%", "25%"] : ["-25%", "25%", "-25%"],
        y: reverse ? ["15%", "-15%", "15%"] : ["-15%", "15%", "-15%"],
      }}
      transition={{ duration: 45, repeat: Infinity, ease: "easeInOut" }}
    />
  );

  // 💫 Transición épica (niebla se separa + brillo)
  const EpicTransition = () => (
    <motion.div
      className="absolute inset-0 flex items-center justify-center bg-gradient-to-b from-[#100021] via-[#20003a] to-[#36005a] overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      {/* Left cloud */}
      <motion.div
        className="absolute left-0 top-0 w-1/2 h-full bg-[radial-gradient(circle_at_right,_rgba(168,85,247,0.5)_0%,_transparent_70%)] blur-3xl"
        initial={{ x: 0, opacity: 1 }}
        animate={{ x: "-100%", opacity: 0 }}
        transition={{ duration: 2.5, ease: "easeInOut" }}
      />
      {/* Right cloud */}
      <motion.div
        className="absolute right-0 top-0 w-1/2 h-full bg-[radial-gradient(circle_at_left,_rgba(168,85,247,0.5)_0%,_transparent_70%)] blur-3xl"
        initial={{ x: 0, opacity: 1 }}
        animate={{ x: "100%", opacity: 0 }}
        transition={{ duration: 2.5, ease: "easeInOut" }}
      />
      {/* Center glow */}
      <motion.div
        className="absolute w-96 h-96 bg-[radial-gradient(circle,_rgba(255,255,255,0.8)_0%,_transparent_70%)] blur-2xl rounded-full"
        initial={{ scale: 0.5, opacity: 0 }}
        animate={{ scale: 3, opacity: 0 }}
        transition={{ duration: 3, ease: "easeOut" }}
      />
      <motion.h1
        className="text-5xl font-extrabold text-white z-10 drop-shadow-[0_0_30px_rgba(255,255,255,0.8)]"
        initial={{ opacity: 0 }}
        animate={{ opacity: [0, 1, 0] }}
        transition={{ duration: 2.5 }}
      >
        ✨ Let’s Begin ✨
      </motion.h1>
    </motion.div>
  );

  if (showMap)
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.9, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        <BirthdayMap />
      </motion.div>
    );

  return (
    <div
      onClick={handleClick}
      className="relative flex flex-col items-center justify-center min-h-screen overflow-hidden cursor-pointer select-none bg-gradient-to-b from-[#0f001a] via-[#210035] to-[#360057]"
    >
      {!transitioning && (
        <>
          <FogLayer />
          <FogLayer reverse />
        </>
      )}

      <AnimatePresence mode="wait">
        {step === 0 && (
          <motion.div
            key="step1"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -40 }}
            transition={{ duration: 1 }}
            className="text-center max-w-3xl"
          >
            <h1 className="text-4xl font-bold text-violet-200 drop-shadow-lg">
              Well well well, if it isn’t the most beautiful girl in my life
              (just because I haven’t met Sydney Sweeney... shut up)
            </h1>
            <p className="mt-4 text-violet-400 text-sm opacity-80">
              (click to continue)
            </p>
          </motion.div>
        )}

        {step === 1 && (
          <motion.div
            key="step2"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -40 }}
            transition={{ duration: 1 }}
            className="text-center max-w-3xl"
          >
            <h1 className="text-4xl font-bold text-violet-200 drop-shadow-lg">
              I know it’s your birthday, so I wanted to give you a little trip —
              a trip about the things I’ve learned about you.
            </h1>
            <p className="mt-4 text-violet-300 text-sm opacity-80">
              (click to continue)
            </p>
          </motion.div>
        )}

        {step === 2 && (
          <motion.div
            key="step3"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -40 }}
            transition={{ duration: 1 }}
            className="text-center max-w-3xl"
          >
            <h1 className="text-4xl font-bold text-violet-200 drop-shadow-lg">
              Things that you like, love, enjoy...  
              <br />
              and that I love, enjoy, and adore giving to you, my love.
            </h1>
            <p className="mt-4 text-violet-300 text-sm opacity-80">
              (click to continue)
            </p>
          </motion.div>
        )}

        {step === 3 && !transitioning && (
          <motion.div
            key="step4"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: [1, 1.05, 1], opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{
              duration: 1.2,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "easeInOut",
            }}
            className="text-center max-w-5xl"
          >
            <motion.h1
              animate={{
                textShadow: [
                  "0 0 10px #a855f7",
                  "0 0 20px #9333ea",
                  "0 0 40px #7e22ce",
                  "0 0 20px #9333ea",
                ],
                scale: [1, 1.05, 1],
              }}
              transition={{ repeat: Infinity, duration: 2 }}
              className="text-6xl font-extrabold text-violet-100 drop-shadow-[0_0_30px_rgba(168,85,247,0.8)]"
            >
              SOME EPIC SHIT PRESENTATION
              WELCOME TO HAPPY ROAD
            </motion.h1>
            <p className="mt-6 text-violet-300 text-lg opacity-90">
              (click to start your journey)
            </p>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Show epic transition when triggered */}
      {transitioning && <EpicTransition />}
    </div>
  );
}

