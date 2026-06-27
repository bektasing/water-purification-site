'use client';

import { motion } from 'framer-motion';
import { MessageSquare } from 'lucide-react';

export default function FloatingWhatsApp() {
  return (
    <motion.a
      href="https://wa.me/905XXXXXXXXX"
      target="_blank"
      rel="noreferrer"
      initial={{ scale: 0.95, opacity: 0 }}
      animate={{ scale: [0.96, 1.04, 0.96], opacity: 1 }}
      transition={{ duration: 2.6, repeat: Infinity, ease: 'easeInOut' }}
      className="fixed bottom-4 left-4 z-50 flex items-center gap-3 rounded-full bg-emerald-500 px-3 py-2.5 text-white shadow-soft shadow-emerald-400/30 transition hover:bg-emerald-600 focus:outline-none focus:ring-4 focus:ring-emerald-300/40 sm:bottom-8 sm:left-8 sm:px-4 sm:py-3"
    >
      <span className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-white/15 text-white shadow-lg shadow-emerald-500/20">
        <MessageSquare className="h-5 w-5" />
      </span>
      <div className="hidden flex-col text-left sm:flex">
        <span className="text-sm font-semibold">WhatsApp</span>
        <span className="text-xs text-white/80">Hemen sor</span>
      </div>
    </motion.a>
  );
}
