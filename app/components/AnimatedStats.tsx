'use client';

import { motion, useInView, useSpring, useTransform } from 'framer-motion';
import { useEffect, useRef } from 'react';

type StatItem = {
  value: number;
  label: string;
};

const stats: StatItem[] = [
  { value: 348, label: 'CİHAZ SATIŞI' },
  { value: 10, label: 'YIL TECRÜBE' },
  { value: 3, label: 'SERTİFİKA' },
];

export default function AnimatedStats() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.35 });

  return (
    <section className="overflow-hidden rounded-[2rem] bg-gradient-to-br from-blue-600 via-cyan-600 to-sky-700 px-6 py-12 text-white shadow-soft sm:px-8 lg:px-12">
      <div ref={ref} className="mx-auto flex max-w-7xl flex-col gap-10 lg:flex-row lg:items-center lg:justify-between">
        <div className="max-w-2xl space-y-5">
          <p className="text-sm font-semibold uppercase tracking-[0.32em] text-cyan-100">
            Kurumsal Güç
          </p>
          <h2 className="text-2xl font-semibold leading-tight sm:text-3xl">
            En iyi cihazları uygun fiyata sağlıyoruz
          </h2>
          <p className="text-lg leading-8 text-cyan-50 sm:text-xl">
            Sertifikalı su arıtma cihazlarımız sayesinde suyunuzu güvenle içebilir, uzun ömürlü teknolojiyi günlük yaşamınıza taşıyabilirsiniz.
          </p>
        </div>

        <div className="grid gap-5 sm:grid-cols-3 lg:min-w-[30rem]">
          {stats.map((stat) => {
            const animatedValue = useSpring(0, { stiffness: 35, damping: 28 });
            const displayValue = useTransform(animatedValue, (latest) => `${Math.round(latest)}`);

            useEffect(() => {
              if (isInView) {
                const timer = window.setTimeout(() => {
                  animatedValue.set(stat.value);
                }, 120);

                return () => window.clearTimeout(timer);
              }
            }, [animatedValue, isInView, stat.value]);

            return (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.8 }}
                className="rounded-2xl border border-white/20 bg-white/10 px-5 py-6 text-center backdrop-blur-sm"
              >
                <motion.div className="text-4xl font-black sm:text-5xl">
                  {displayValue}
                </motion.div>
                <p className="mt-3 text-sm font-medium uppercase tracking-[0.24em] text-cyan-100">
                  {stat.label}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
