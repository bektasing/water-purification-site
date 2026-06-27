'use client';

import { AnimatePresence, motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { MouseEvent, useState } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  const router = useRouter();
  const appointmentHref = pathname === '/' ? '#randevu' : '/#randevu';

  const handleAppointmentClick = (event?: MouseEvent<HTMLAnchorElement>) => {
    event?.preventDefault();

    if (pathname === '/') {
      document.getElementById('randevu')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    } else {
      router.push(appointmentHref);
    }

    setIsOpen(false);
  };

  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className="sticky top-0 z-40 border-b border-white/70 bg-white/80 backdrop-blur-xl"
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-3 py-3 sm:px-6 lg:px-8">
        <div className="flex items-center gap-2 sm:gap-3">
          <button
            type="button"
            aria-label="Mobil menü"
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-700 shadow-sm md:hidden"
            onClick={() => setIsOpen((prev) => !prev)}
          >
            {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>

          <a href="#" className="flex items-center gap-2 text-slate-900 sm:gap-3">
            <span className="relative inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-gradient-to-br from-sky-100 via-cyan-100 to-white shadow-soft sm:h-11 sm:w-11">
              <svg viewBox="0 0 64 64" className="h-7 w-7 sm:h-8 sm:w-8" aria-hidden="true">
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
              <div className="flex items-center gap-2 text-base font-semibold tracking-tight sm:text-xl">
                <span>Akyıl</span>
                <span className="text-brand-red">LG</span>
              </div>
              <p className="text-[10px] uppercase tracking-[0.24em] text-slate-500 sm:text-xs">Su Arıtma</p>
            </div>
          </a>
        </div>

        <nav className="hidden items-center gap-8 text-sm font-medium text-slate-700 md:flex">
          <a href="/#neden-biz" className="hover:text-slate-900">Neden Biz?</a>
          <a href="/#urunler" className="hover:text-slate-900">Ürünler</a>
          <a href="/#yorumlar" className="hover:text-slate-900">Yorumlar</a>
          <a href="/kurumsal" className="hover:text-slate-900">Kurumsal</a>
          <a href="/hizmetlerimiz" className="hover:text-slate-900">Hizmetler</a>
          <a href="/blog" className="hover:text-slate-900">Blog</a>
        </nav>

        <a
          href={appointmentHref}
          className="inline-flex items-center justify-center rounded-full bg-brand-red px-3 py-1.5 text-sm font-semibold text-white shadow-soft transition hover:bg-[#8b002a] focus:outline-none focus:ring-2 focus:ring-brand-red/40 sm:px-5 sm:py-2.5"
          onClick={(event) => handleAppointmentClick(event)}
        >
          Randevu Al
        </a>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="fixed inset-x-0 top-[64px] z-50 border-t border-slate-200 bg-gradient-to-br from-sky-600 via-cyan-600 to-blue-700 px-4 py-6 shadow-2xl md:hidden"
          >
            <div className="mx-auto flex max-w-7xl flex-col gap-3">
              <Link href="/" className="rounded-2xl px-4 py-3 text-lg font-semibold text-white transition hover:bg-white/15" onClick={() => setIsOpen(false)}>
                Anasayfa
              </Link>
              <Link href="/kurumsal" className="rounded-2xl px-4 py-3 text-lg font-semibold text-white transition hover:bg-white/15" onClick={() => setIsOpen(false)}>
                Kurumsal
              </Link>
              <Link href="/hizmetlerimiz" className="rounded-2xl px-4 py-3 text-lg font-semibold text-white transition hover:bg-white/15" onClick={() => setIsOpen(false)}>
                Hizmetlerimiz
              </Link>
              <Link href="/#randevu" className="rounded-2xl px-4 py-3 text-lg font-semibold text-white transition hover:bg-white/15" onClick={() => setIsOpen(false)}>
                İletişim
              </Link>
              <a
                href={appointmentHref}
                onClick={(event) => handleAppointmentClick(event)}
                className="inline-flex items-center justify-center rounded-lg bg-white px-4 py-3 text-center text-base font-bold text-blue-700 shadow-sm"
              >
                Randevu Al
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
