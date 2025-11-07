import React from "react";
import { motion, AnimatePresence } from "framer-motion";

interface WelcomeModalProps {
  show: boolean;
  onClose: () => void;
}

export default function WelcomeModal({ show, onClose }: WelcomeModalProps) {
  return (
    <AnimatePresence>
      {show && (
        <motion.div
          key="welcome"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="absolute inset-0 flex items-center justify-center bg-white/70 backdrop-blur-md z-[200]"
        >
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -20, opacity: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-center p-8 rounded-2xl shadow-2xl bg-gradient-to-b from-violet-100 via-white to-violet-50 border border-violet-200 max-w-xl"
          >
            <h2 className="text-3xl font-bold text-violet-700 mb-4">
              WELCOME TO HAPPY ROAD
            </h2>
            <p className="text-gray-700 mb-6">
              A map where you can find tons of interesting shit you like.
              <br />
              You just need to help Gaby 
              <br />
              (some pretty girl I happen to knowquite well)
              <br />
              find all the gifts her <strong>handsome boyfriend</strong>{" "}
              (ahem *clears throat*)
              <br />
              gathered for her. Every gift comes with a very bad joke, survive
              <br />
              <br />
              What are you waiting for?
              <br />
              <br />
              Let's start by clicking the first item, shall we?
            </p>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={onClose}
              className="px-6 py-3 bg-violet-500 text-white rounded-full shadow-lg hover:bg-violet-600 transition"
            >
              Continue
            </motion.button>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

