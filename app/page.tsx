import TopBar from './components/TopBar';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import ProductPlaceholderGrid from './components/ProductPlaceholderGrid';
import TestimonialMarquee from './components/TestimonialMarquee';
import ContactSection from './components/ContactSection';
import FloatingWhatsApp from './components/FloatingWhatsApp';

export default function HomePage() {
  return (
    <main className="relative overflow-hidden">
      <TopBar />
      <Navbar />
      <section className="relative isolate overflow-hidden px-6 pb-16 pt-6 sm:px-8 lg:px-12">
        <HeroSection />
      </section>

      <section className="px-6 pb-16 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-7xl space-y-10">
          <ProductPlaceholderGrid />
          <TestimonialMarquee />
          <ContactSection />
        </div>
      </section>

      <FloatingWhatsApp />
    </main>
  );
}
