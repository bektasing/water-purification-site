'use client';

import { motion } from 'framer-motion';

const products = [
  { title: 'Akıllı Ev Tipi Sistem', price: '14.999 TL' },
  { title: 'Kompakt Mutfak Arıtma', price: '12.750 TL' },
  { title: 'Aile Boyu Filtrasyon', price: '18.200 TL' },
  { title: 'Gelişmiş Ters Ozmoz', price: '22.500 TL' },
];

export default function ProductPlaceholderGrid() {
  return (
    <section id="urunler" className="space-y-8">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.28em] text-brand-red">Katalog</p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">
            En popüler su arıtma sistemlerimiz
          </h2>
        </div>
        <p className="max-w-2xl text-sm leading-6 text-slate-600 sm:text-base">
          Ürün görselleri yakında eklenecek. Fiyatları inceleyin, ardından bize ulaşın ve randevunuzu oluşturun.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
        {products.map((product, index) => (
          <motion.article
            key={product.title}
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.08, duration: 0.55 }}
            className="group overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-soft"
          >
            <div className="flex h-56 items-center justify-center bg-gradient-to-br from-slate-100 via-sky-100 to-cyan-100">
              <div className="text-center">
                <div className="mx-auto flex h-24 w-24 items-center justify-center rounded-full bg-white/90 text-brand-red shadow-soft">
                  <span className="text-sm font-semibold uppercase tracking-[0.3em]">Yakında</span>
                </div>
                <p className="mt-4 text-sm font-semibold uppercase tracking-[0.24em] text-slate-500">Gelecek</p>
              </div>
            </div>
            <div className="space-y-4 px-6 py-6 sm:px-5">
              <h3 className="text-xl font-semibold text-slate-950">{product.title}</h3>
              <p className="text-sm text-slate-500">Tahmini fiyat</p>
              <p className="text-2xl font-semibold text-slate-900">{product.price}</p>
              <p className="text-sm leading-6 text-slate-600">
                Ürün detayı ve görseller çok yakında güncellenecektir.
              </p>
              <a
                href="#randevu"
                className="inline-flex w-full items-center justify-center rounded-full bg-brand-red px-4 py-3 text-sm font-semibold text-white transition hover:bg-[#8b002a]"
              >
                Bilgi Al / Randevu Al
              </a>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
