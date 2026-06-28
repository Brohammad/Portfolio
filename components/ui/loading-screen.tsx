"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Terminal } from "lucide-react";

export function LoadingScreen() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const seen = sessionStorage.getItem("portfolio-loaded");
    if (seen) {
      setLoading(false);
      return;
    }
    const timer = setTimeout(() => {
      sessionStorage.setItem("portfolio-loaded", "1");
      setLoading(false);
    }, 900);
    return () => clearTimeout(timer);
  }, []);

  if (!loading) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.35 }}
        className="fixed inset-0 z-[9998] bg-background flex items-center justify-center"
      >
        <div className="flex flex-col items-center gap-6">
          <div className="w-14 h-14 rounded-2xl bg-primary flex items-center justify-center">
            <Terminal className="w-7 h-7 text-primary-foreground" />
          </div>
          <p className="text-sm text-muted-foreground tracking-tight">
            brohammad<span className="text-primary">.tech</span>
          </p>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
