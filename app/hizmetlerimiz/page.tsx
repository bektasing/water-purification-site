import TopBar from '../components/TopBar';
import Navbar from '../components/Navbar';
import ServicesGrid from '../components/ServicesGrid';
import FloatingWhatsApp from '../components/FloatingWhatsApp';

export default function HizmetlerimizPage() {
  return (
    <main className="min-h-screen bg-slate-50">
      <TopBar />
      <Navbar />

      <section className="bg-gradient-to-br from-sky-600 via-cyan-600 to-blue-700 px-6 py-20 text-white sm:px-8 lg:px-12">
        <div className="mx-auto max-w-7xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.32em] text-cyan-100">Hizmetlerimiz</p>
          <h1 className="mt-4 text-4xl font-semibold tracking-tight sm:text-5xl">Hizmetlerimiz</h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-cyan-50">
            Kurulum, bakım, filtre ve teknik servis alanlarında modern çözümler sunuyoruz.
          </p>
        </div>
      </section>

      <section className="px-6 py-16 sm:px-8 lg:px-12">
        <ServicesGrid />
      </section>

      <FloatingWhatsApp />
    </main>
  );
}
