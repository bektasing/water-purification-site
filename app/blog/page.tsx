import TopBar from '../components/TopBar';
import Navbar from '../components/Navbar';
import BlogCard from '../components/BlogCard';
import FloatingWhatsApp from '../components/FloatingWhatsApp';

const posts = [
  {
    title: 'Daire Girişi Su Arıtma Sistemi Nedir?',
    excerpt: 'Arıtma sistemlerine bakılacak olursa hepsi aynı amaç için tasarlanmış teknolojinin sunduğu avantajları kullanıcıların hayatına taşıyor.',
    date: '21 EKİ',
    slug: 'daire-girisi-su-aritma',
  },
  {
    title: 'Su Arıtma Cihazı Tankında Nelere Dikkat Edilmelidir?',
    excerpt: 'Su arıtma cihazı tercihlerinde tanklı modelleri seçenler, tankın hangi özelliklere sahip olması gerektiğini bilmelidir.',
    date: '18 EKİ',
    slug: 'su-aritma-cihazi-tankinda-nelere-dikkat-edilmelidir',
  },
  {
    title: 'Su Arıtma Cihazı Pompası Nedir, Nerelerde Kullanılır?',
    excerpt: 'Su arıtma cihazı pompası nedir, nerelerde kullanılır? Su arıtma cihazlarında pompanın önemi gün geçtikçe artıyor.',
    date: '12 EKİ',
    slug: 'su-aritma-cihazi-pompasi-nedir-nerelerde-kullanilir',
  },
];

export default function BlogPage() {
  return (
    <main className="min-h-screen bg-slate-50">
      <TopBar />
      <Navbar />

      <section className="bg-gradient-to-br from-sky-600 via-cyan-600 to-blue-700 px-6 py-20 text-white sm:px-8 lg:px-12">
        <div className="mx-auto max-w-7xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.32em] text-cyan-100">Blog</p>
          <h1 className="mt-4 text-4xl font-semibold tracking-tight sm:text-5xl">Blog</h1>
          <p className="mx-auto mt-4 text-lg text-cyan-50">ANASAYFA / BLOG</p>
        </div>
      </section>

      <section className="px-6 py-16 sm:px-8 lg:px-12">
        <div className="mx-auto grid max-w-7xl gap-8 md:grid-cols-2 xl:grid-cols-3">
          {posts.map((post) => (
            <BlogCard key={post.title} title={post.title} excerpt={post.excerpt} date={post.date} slug={post.slug} />
          ))}
        </div>
      </section>

      <FloatingWhatsApp />
    </main>
  );
}
