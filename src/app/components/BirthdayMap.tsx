import React, { useState, useMemo, useEffect } from "react";
import { motion } from "framer-motion";
import { giftsData, Gift } from "./giftsData";
import gabyImage from "../img/fixed_gaby.png";
import WelcomeModal from "./WelcomeModal";
import MapHeader from "./MapHeader";
import MapBackground from "./MapBackground";
import GiftNode from "./GiftNode";
import IntroCard, { launchHeartsAnimation } from "./IntroCard";
import GiftModal from "./GiftModal";

export default function BirthdayMap() {
  const gifts = giftsData;

  const [showWelcome, setShowWelcome] = useState(true);
  const [active, setActive] = useState<Gift | null>(null);
  const [showIntro, setShowIntro] = useState(true);
  const [currentStep, setCurrentStep] = useState(0);
  const [revealed, setRevealed] = useState<string[]>([]);
  const [gabyPos, setGabyPos] = useState({ x: gifts[0].x, y: gifts[0].y });
  const [isAutoMoving, setIsAutoMoving] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = React.useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    document.title = "Happy Birthday Pretty Pussy <3";
    if (currentStep < gifts.length) {
      const next = gifts[currentStep];
      setGabyPos({ x: next.x, y: next.y });
    }
  }, [currentStep, gifts]);

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
    }, 2000);

    return () => clearTimeout(timeout);
  }, [currentStep, isAutoMoving, gifts, revealed]);

  const handleTogglePlay = () => {
    if (!audioRef.current) return;
    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
    } else {
      const playPromise = audioRef.current.play();
      if (playPromise !== undefined) {
        playPromise
          .then(() => setIsPlaying(true))
          .catch((error) => {
            console.error(
              "Error, can`t reproduce the song, check files:",
              error
            );
            alert("Error, can`t reproduce the song");
          });
      }
    }
  };

  const handleStartJourney = () => {
    // Don't hide the intro card, just start the journey
    setIsAutoMoving(true);
    if (revealed.includes(gifts[0].id)) {
      setCurrentStep(1);
      setActive(gifts[1]);
      setRevealed((r) =>
        r.includes(gifts[1].id) ? r : [...r, gifts[1].id]
      );
    } else {
      setActive(gifts[0]);
      setRevealed([gifts[0].id]);
      setCurrentStep(1);
    }
  };

  const handleGiftClick = (gift: Gift, index: number) => {
    if (index > currentStep) return;
    setActive(gift);
    if (!revealed.includes(gift.id)) {
      setRevealed([...revealed, gift.id]);
    }
  };

  const handleCloseModal = () => {
    setActive(null);
  };

  const handleAdvanceStep = () => {
    setTimeout(() => {
      setCurrentStep((s) => s + 1);
    }, 100);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="min-h-screen bg-gradient-to-b from-pink-50 via-white to-purple-50 flex items-center justify-center p-6"
    >
      {/* Container */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 30 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
        className="relative w-full max-w-6xl h-[80vh] bg-white/60 backdrop-blur-md rounded-2xl shadow-2xl overflow-hidden border border-white/40"
      >
        <WelcomeModal show={showWelcome} onClose={() => setShowWelcome(false)} />

        <MapHeader
          isPlaying={isPlaying}
          onTogglePlay={handleTogglePlay}
          audioRef={audioRef}
        />

        {/* Gaby's floating image */}
        <img
          src={gabyImage.src}
          alt="Gaby"
          className="absolute w-24 h-24 rounded-full border-4 border-violet-300 shadow-xl transition-all duration-1000 ease-in-out z-50"
          style={{
            left: `${gabyPos.x}%`,
            top: `${gabyPos.y}%`,
            transform: "translate(-100%, -50%)",
          }}
        />

        <MapBackground />

        {/* Gift Nodes */}
        {gifts.map((gift, index) => (
          <GiftNode
            key={gift.id}
            gift={gift}
            index={index}
            currentStep={currentStep}
            isRevealed={revealed.includes(gift.id)}
            onClick={() => handleGiftClick(gift, index)}
          />
        ))}

        <IntroCard
          show={showIntro}
          onStartJourney={handleStartJourney}
          onLaunchHearts={launchHeartsAnimation}
          firstGiftRevealed={revealed.includes(gifts[0].id)}
        />

        <GiftModal
          active={active}
          isAutoMoving={isAutoMoving}
          currentStep={currentStep}
          totalGifts={gifts.length}
          onClose={handleCloseModal}
          onAdvanceStep={handleAdvanceStep}
        />

        {/* Footer */}
        <footer className="absolute left-6 right-6 bottom-6 flex items-center justify-between text-sm text-gray-500">
          <span></span>
          <span></span>
        </footer>
      </motion.div>
    </motion.div>
  );
}
