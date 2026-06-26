'use client';

import { motion } from 'framer-motion';

const testimonials = [
  'Çok memnunuz, servis çok hızlıydı.',
  'Su hayattır, hayat LG Su Arıtma sistemleri ile güzelleşti, damacanaya para vermiyorum, lezzetli suyumu içiyorum. Teşekkür ederim. Her şey ile çok güzel ilgilendiğiniz için.',
  'Diyarbakır sıcağında buz gibi temiz su içmek harika. Akyıl LG ekibine teşekkürler.',
  'Kurulumu aynı gün yaptılar, cihaz çok sessiz çalışıyor.',
  'LG kalitesi kendini belli ediyor, tadı inanılmaz değişti suyun.',
  'Filtre değişimi için hatırlatma yapmaları çok profesyonelce.',
  'Damacana taşıma derdinden kurtuldum, kesinlikle tavsiye ederim.',
  'Sularımız çok kireçliydi, şimdi çayımın tadı bile güzelleşti.',
  "Uygun fiyat ve güler yüzlü hizmet. Akyıl Su Arıtma'ya teşekkürler.",
];

export default function TestimonialMarquee() {
  return (
    <section id="yorumlar" className="overflow-hidden rounded-[2rem] border border-slate-200 bg-gradient-to-br from-slate-50 via-cyan-50 to-sky-50 px-5 py-8 shadow-soft sm:px-7 lg:px-10">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.28em] text-brand-red">Müşteri Yorumları</p>
          <h2 className="mt-3 text-3xl font-semibold text-slate-950 sm:text-4xl">
            Akyıl LG kullanıcıları ne diyor?
          </h2>
        </div>
        <p className="max-w-2xl text-sm leading-6 text-slate-600 sm:text-base">
          Yerelden servis ve temiz su memnuniyetiyle Diyarbakır'da hızla tercih ediliyoruz.
        </p>
      </div>

      <div className="relative mt-8 overflow-hidden rounded-3xl border border-slate-200 bg-white/90 p-5">
        <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-white to-white/0" />
        <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-white to-white/0" />

        <motion.div
          className="flex min-w-full gap-4"
          animate={{ x: ['0%', '-100%'] }}
          transition={{ repeat: Infinity, duration: 28, ease: 'linear' }}
        >
          {testimonials.concat(testimonials).map((text, index) => (
            <div key={`${text}-${index}`} className="min-w-[22rem] flex-shrink-0 rounded-3xl border border-slate-200 bg-slate-50 p-6 text-sm text-slate-700 shadow-sm">
              <p className="text-slate-900">{text}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
