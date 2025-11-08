import { motion, AnimatePresence } from "framer-motion";
import { Gift } from "./giftsData";
import { Heart } from "./GiftIcons";

interface GiftModalProps {
  active: Gift | null;
  isAutoMoving: boolean;
  currentStep: number;
  totalGifts: number;
  onClose: () => void;
  onAdvanceStep: () => void;
}

export default function GiftModal({
  active,
  isAutoMoving,
  currentStep,
  totalGifts,
  onClose,
  onAdvanceStep,
}: GiftModalProps) {
  const handleClose = () => {
    onClose();
    if (isAutoMoving && currentStep < totalGifts) {
      onAdvanceStep();
    }
  };

  const handleConfetti = () => {
    const container = document.createElement("div");
    container.style.position = "fixed";
    container.style.left = "50%";
    container.style.top = "20%";
    container.style.transform = "translateX(-50%)";
    container.style.pointerEvents = "none";
    document.body.appendChild(container);
    for (let i = 0; i < 20; i++) {
      const el = document.createElement("div");
      el.innerText = i % 2 === 0 ? "🖤" : "💜";
      el.style.position = "absolute";
      el.style.left = `${-120 + i * 20}px`;
      el.style.top = `0px`;
      el.style.opacity = "0";
      el.style.transform = `translateY(0px) rotate(${Math.random() * 360}deg)`;
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
    setTimeout(() => document.body.removeChild(container), 1400);
  };

  return (
    <AnimatePresence>
      {active && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 bg-black/20 pointer-events-auto z-[60]"
            onClick={handleClose}
          />
          {/* Modal content */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 flex items-center justify-center p-6 pointer-events-none z-[70]"
          >
            <motion.div
              initial={{ scale: 0.85, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.85, y: 20 }}
              transition={{ type: "spring", stiffness: 300, damping: 25 }}
              className="w-full max-w-2xl bg-white rounded-2xl shadow-2xl border border-white/30 p-6 relative pointer-events-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={handleClose}
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
                      onClick={handleConfetti}
                    >
                      Press if you love it
                    </motion.button>
                  </div>
                </div>
              </div>

              {/* Decorative animation */}
              <motion.div
                animate={{
                  rotate: [0, 360, 0, 360, 0],
                  scale: [1, 1.2, 1, 1.2, 1],
                }}
                transition={{
                  repeat: Infinity,
                  duration: 6,
                  ease: "easeInOut",
                }}
                className="absolute right-6 bottom-6 opacity-80"
              >
                <Heart className="w-12 h-12 text-violet-700" />
              </motion.div>
            </motion.div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}

