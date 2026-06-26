'use client';

import { motion } from 'framer-motion';

export default function Navbar() {
  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className="sticky top-0 z-40 border-b border-white/70 bg-white/80 backdrop-blur-xl"
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <a href="#" className="flex items-center gap-3 text-slate-900">
          <span className="relative inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-sky-100 via-cyan-100 to-white shadow-soft">
            <svg viewBox="0 0 64 64" className="h-8 w-8" aria-hidden="true">
              <defs>
                <linearGradient id="logoGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#0ea5e9" />
                  <stop offset="100%" stopColor="#38bdf8" />
                </linearGradient>
              </defs>
              <path d="M22 20c0-4.4 3.6-8 8-8s8 3.6 8 8c0 1.3-.3 2.5-.9 3.6L32 44l-7.1-20.4c-.6-1.1-.9-2.3-.9-3.6Z" fill="url(#logoGrad)" />
            </svg>
          </span>
          <div className="space-y-0.5 text-left">
            <div className="flex items-center gap-2 text-lg font-semibold tracking-tight sm:text-xl">
              <span>Akyıl</span>
              <span className="text-brand-red">LG</span>
            </div>
            <p className="text-xs uppercase tracking-[0.24em] text-slate-500">Su Arıtma</p>
          </div>
        </a>

        <nav className="hidden items-center gap-8 text-sm font-medium text-slate-700 md:flex">
          <a href="/#neden-biz" className="hover:text-slate-900">Neden Biz?</a>
          <a href="/#urunler" className="hover:text-slate-900">Ürünler</a>
          <a href="/#yorumlar" className="hover:text-slate-900">Yorumlar</a>
          <a href="/kurumsal" className="hover:text-slate-900">Kurumsal</a>
          <a href="/hizmetlerimiz" className="hover:text-slate-900">Hizmetler</a>
          <a href="/blog" className="hover:text-slate-900">Blog</a>
        </nav>

        <a
          href="#randevu"
          className="inline-flex items-center justify-center rounded-full bg-brand-red px-5 py-2.5 text-sm font-semibold text-white shadow-soft transition hover:bg-[#8b002a] focus:outline-none focus:ring-2 focus:ring-brand-red/40"
        >
          Randevu Al
        </a>
      </div>
    </motion.header>
  );
}
