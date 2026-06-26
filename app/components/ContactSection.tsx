export default function ContactSection() {
  return (
    <section id="randevu" className="rounded-[2rem] border border-slate-200 bg-gradient-to-br from-white via-cyan-50 to-sky-50 px-6 py-12 shadow-soft sm:px-10">
      <div className="mx-auto max-w-6xl text-center">
        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-brand-red">İletişime Geçin</p>
        <h2 className="mt-4 text-3xl font-semibold text-slate-950 sm:text-4xl">
          Randevu almak veya teklif istemek için hazırız
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-slate-600">
          Ücretsiz keşif ve yerinde teklif için kolayca WhatsApp üzerinden yazın ya da telefonla arayın. Diyarbakır merkezli hizmetimizle hızlı destek sağlıyoruz.
        </p>
        <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:justify-center">
          <a
            href="https://wa.me/905XXXXXXXXX"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center rounded-full bg-emerald-500 px-6 py-3 text-sm font-semibold text-white shadow-soft transition hover:bg-emerald-600"
          >
            WhatsApp ile Hemen Yaz
          </a>
          <a
            href="tel:+905XXXXXXXXX"
            className="inline-flex items-center justify-center rounded-full border border-slate-200 bg-white px-6 py-3 text-sm font-semibold text-slate-900 shadow-sm transition hover:border-slate-300"
          >
            Bizi Ara
          </a>
        </div>
      </div>
    </section>
  );
}
