'use client';

import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

export default function HeroSection() {
  return (
    <div className="relative overflow-hidden rounded-[2rem] bg-gradient-to-br from-slate-50 via-cyan-100 to-sky-50 px-6 py-16 shadow-soft sm:px-10 lg:px-14">
      <div className="absolute inset-0 opacity-30 blur-3xl">
        <div className="absolute left-1/2 top-0 h-80 w-80 -translate-x-1/2 rounded-full bg-cyan-200/70" />
        <div className="absolute right-8 top-20 h-64 w-64 rounded-full bg-sky-200/60" />
      </div>
      <div className="relative mx-auto max-w-6xl lg:grid lg:grid-cols-[1.2fr_0.8fr] lg:items-center lg:gap-10">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          className="space-y-8"
        >
          <div className="inline-flex items-center gap-2 rounded-full bg-brand-red/10 px-4 py-2 text-sm font-semibold text-brand-red shadow-sm">
            Diyarbakır için özel su arıtma çözümleri
          </div>
          <div className="space-y-5">
            <h1 className="max-w-3xl text-4xl font-semibold tracking-tight text-slate-950 sm:text-5xl">
              Temiz su, güçlü sağlık ve konfor. <span className="text-brand-red">Akyıl LG</span> ile tanışın.
            </h1>
            <p className="max-w-2xl text-lg leading-8 text-slate-600 sm:text-xl">
              Diyarbakır'ın zorlu su koşullarına uygun, sessiz ve güvenilir su arıtma sistemleri. Cihazlarımızı inceleyin, teklif isteyin ve uzman ekibimizle hemen iletişime geçin.
            </p>
          </div>

          <div className="flex flex-col gap-4 sm:flex-row">
            <a
              href="#randevu"
              className="inline-flex items-center justify-center rounded-full bg-brand-red px-6 py-3 text-sm font-semibold text-white shadow-soft transition hover:bg-[#8b002a]"
            >
              Randevu Al
              <ArrowRight className="ml-3 h-4 w-4" />
            </a>
            <a
              href="#neden-biz"
              className="inline-flex items-center justify-center rounded-full border border-slate-200 bg-white px-6 py-3 text-sm font-semibold text-slate-900 shadow-sm transition hover:border-slate-300"
            >
              Neden Biz?
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ scale: 0.92, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="mt-12 grid gap-5 sm:grid-cols-2 lg:mt-0"
        >
          <div className="rounded-[1.75rem] border border-white/70 bg-white/80 p-6 shadow-soft backdrop-blur-xl">
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-slate-500">Su kalitesi</p>
            <h2 className="mt-3 text-2xl font-semibold text-slate-950">Saf su, dilersen sıcak</h2>
            <p className="mt-3 text-sm leading-6 text-slate-600">
              Gelişmiş filtrasyon teknolojisi ile kireç ve tortuya karşı tam koruma.
            </p>
          </div>
          <div className="rounded-[1.75rem] border border-white/70 bg-gradient-to-br from-cyan-50 to-sky-100 p-6 shadow-soft backdrop-blur-xl">
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-slate-500">Diyarbakır uzmanlığı</p>
            <h2 className="mt-3 text-2xl font-semibold text-slate-950">Hızlı kurulum</h2>
            <p className="mt-3 text-sm leading-6 text-slate-600">
              Yerinde keşif, proje ve kurulum süreçlerini hızla tamamlıyoruz.
            </p>
          </div>
        </motion.div>
      </div>

      <div id="neden-biz" className="mt-16 rounded-3xl border border-slate-200 bg-white/90 p-8 shadow-soft sm:p-10">
        <div className="grid gap-8 lg:grid-cols-3">
          <div>
            <span className="inline-flex rounded-full bg-sky-100 px-3 py-1 text-sm font-semibold text-sky-700">
              1
            </span>
            <h3 className="mt-4 text-xl font-semibold text-slate-950">Yerelden destek</h3>
            <p className="mt-3 text-sm leading-6 text-slate-600">
              Diyarbakır ve çevresine özel servis ağı ile hızlı ulaşım ve bakım garantisi.
            </p>
          </div>
          <div>
            <span className="inline-flex rounded-full bg-sky-100 px-3 py-1 text-sm font-semibold text-sky-700">
              2
            </span>
            <h3 className="mt-4 text-xl font-semibold text-slate-950">LG teknolojisi</h3>
            <p className="mt-3 text-sm leading-6 text-slate-600">
              Dünyaca tanınan LG kalitesiyle popüler su arıtma teknolojileri.
            </p>
          </div>
          <div>
            <span className="inline-flex rounded-full bg-sky-100 px-3 py-1 text-sm font-semibold text-sky-700">
              3
            </span>
            <h3 className="mt-4 text-xl font-semibold text-slate-950">Memnuniyet odaklı</h3>
            <p className="mt-3 text-sm leading-6 text-slate-600">
              Kurulum sonrası filtre değişimi hatırlatması ve servis takibi sunuyoruz.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
