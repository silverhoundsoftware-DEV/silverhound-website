"use client";

import { motion, AnimatePresence } from "framer-motion";

interface LoaderProps {
  isLoading: boolean;
}

export default function Loader({ isLoading }: LoaderProps) {
  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
          className="fixed inset-0 z-[99999] flex items-center justify-center bg-black"
        >
          <div className="flex flex-col items-center">
            <motion.img
              src="/silverhound_logo_updated2.png"
              alt="SilverHound"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.2 }}
              className="h-24 w-auto object-contain"
            />

            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.4 }}
              className="mt-6 text-[10px] uppercase tracking-[0.5em] text-white/50"
            >
              SilverHound Enterprises
            </motion.p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}