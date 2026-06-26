'use client';

import { motion } from 'framer-motion';
import { Droplets, RefreshCw, Wrench, Factory, Cpu, Waves } from 'lucide-react';

const services = [
  { title: 'Su Arıtma Cihazları', icon: Droplets },
  { title: 'Filtre Değişimi', icon: RefreshCw },
  { title: 'Teknik Servis', icon: Wrench },
  { title: 'Endüstriyel Su Arıtma Cihazları', icon: Factory },
  { title: 'Motor Değişimi', icon: Cpu },
  { title: 'Su Yumuşatma Çözümleri', icon: Waves },
];

export default function ServicesGrid() {
  return (
    <div className="mx-auto grid max-w-7xl gap-8 md:grid-cols-2 xl:grid-cols-3">
      {services.map((service, index) => {
        const Icon = service.icon;

        return (
          <motion.article
            key={service.title}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            whileHover={{ scale: 1.03, y: -4 }}
            transition={{ duration: 0.35 }}
            className="group overflow-hidden rounded-[1.75rem] border border-slate-200 bg-white shadow-soft"
          >
            <div className="relative flex h-56 items-center justify-center overflow-hidden bg-gradient-to-br from-slate-100 via-cyan-100 to-sky-200">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.8),transparent_50%)]" />
              <div className="relative flex h-20 w-20 items-center justify-center rounded-2xl border border-white/70 bg-white/80 text-blue-600 shadow-lg backdrop-blur-sm transition-all duration-300 group-hover:scale-105">
                <Icon className="h-10 w-10" />
              </div>
            </div>
            <div className="rounded-t-[1.5rem] bg-gradient-to-r from-blue-600 to-cyan-600 px-6 py-5 text-center text-white transition-all duration-300 group-hover:from-blue-700 group-hover:to-cyan-700">
              <h3 className="text-lg font-semibold">{service.title}</h3>
              <p className="mt-2 text-sm text-cyan-50">Profesyonel çözüm yaklaşımı</p>
            </div>
          </motion.article>
        );
      })}
    </div>
  );
}
