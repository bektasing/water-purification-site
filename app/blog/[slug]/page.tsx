import Link from 'next/link';
import TopBar from '../../components/TopBar';
import Navbar from '../../components/Navbar';
import FloatingWhatsApp from '../../components/FloatingWhatsApp';

const posts = [
  {
    slug: 'daire-girisi-su-aritma',
    title: 'Daire Girişi Su Arıtma Sistemi Nedir?',
    content: [
      'Daire girişinde kullanılan su arıtma sistemleri, özellikle şehir merkezlerinde ve kentsel yaşam alanlarında kullanıcıların suyun tadı, temizliği ve güvenliği konusunda daha bilinçli tercih yapmasını sağlar. Bu sistemler, suyun içeriğindeki kireç, tortu ve istenmeyen kimyasalların azaltılmasına yardımcı olur; böylece hem günlük kullanımda hem de içme suyunda daha konforlu bir deneyim sunar.',
      'Akyıl LG olarak geliştirdiğimiz sistemler, düzenli bakım ve doğru filtre yönetimiyle uzun ömürlü bir kullanım sunar. Farklı daire tiplerine uygun boyut seçenekleriyle sunulan bu teknolojiler, mutfak ve banyoda yer kaplamadan verimli bir şekilde çalışır. Kullanıcıların yaşam alanını bozmadan, suyu daha temiz ve daha güvenli hale getiren pratik çözümler üretmeyi hedefliyoruz.',
      'Modern dairelerde içme suyu kalitesi ve güvenliği her zamankinden daha fazla önem taşımaktadır. Bu nedenle su arıtma sistemlerini yalnızca bir cihaz olarak değil, aynı zamanda sağlığın ve yaşam kalitesinin bir parçası olarak değerlendirmek gerekir. Kurulum sonrası düzenli bakım ile sistemin performansı korunur ve suyun kalitesi uzun süre stabil kalır.',
    ],
  },
  {
    slug: 'su-aritma-cihazi-tankinda-nelere-dikkat-edilmelidir',
    title: 'Su Arıtma Cihazı Tankında Nelere Dikkat Edilmelidir?',
    content: [
      'Tanklı su arıtma cihazları, özellikle yoğun kullanım gerektiren aileler için tercih edilen modeller arasında yer alır. Tankın malzemesi, kapasitesi ve temizlik kolaylığı, cihazın uzun vadeli verimliliğini doğrudan etkiler. Bu nedenle ilk tercihte yalnızca marka değil, aynı zamanda tankın tasarımı ve kullanım ömrü de değerlendirilmelidir.',
      'Ayrıca tankın iç mekan yapısı, mikroorganizma oluşumunu engelleyecek düzeyde güvenli bir tasarıma sahip olmalıdır. Su kalitesini koruyan sistemler, tankın düzenli temizlenmesi ve filtre değişim takvimiyle daha uzun süre verimli çalışır. Kullanıcı deneyimini artıran bu detaylar, arıtma sisteminin günlük hayat üzerindeki etkisini belirler.',
      'Su arıtma cihazı seçiminde tank kapasitesi de oldukça önemlidir. Aile sayısı, kullanım sıklığı ve alan koşulları göz önünde bulundurularak doğru modelin seçilmesi, hem ekonomik hem de pratik bir çözüm sunar. Uzun vadede bütçe dostu ve sürdürülebilir bir tercih için bu unsurlar önemle değerlendirilmelidir.',
    ],
  },
  {
    slug: 'su-aritma-cihazi-pompasi-nedir-nerelerde-kullanilir',
    title: 'Su Arıtma Cihazı Pompası Nedir, Nerelerde Kullanılır?',
    content: [
      'Su arıtma cihazı pompası, akışkanın sistem içinde dengeli ve kontrollü bir şekilde taşınmasını sağlayan önemli bir parçadır. Özellikle yüksek verimlilik gerektiren sistemlerde pompa, filtreleme ve basınç kontrolü süreçlerini destekleyerek genel performansın dengelenmesini sağlar. Bu nedenle cihazın kalbinde yer alan parçalar arasında kritik bir konuma sahiptir.',
      'Pompa seçimi yapılırken akış hızı, basınç değeri ve cihazın genel kapasitesi birlikte değerlendirilmelidir. Bazı sistemlerde pompa, içme suyu akışını artırırken bazı modellerde daha sessiz ve enerji verimli çalışacak şekilde tasarlanır. Böylece hem kullanıcı konforu korunur hem de cihazın ömrü uzatılır.',
      'Günlük hayatta su arıtma cihazı pompası, ev, ofis ve küçük ölçekli endüstriyel alanlarda kullanılabilir. Özellikle su basıncının değişken olduğu bölgelerde doğru pompa seçimi, sistemin daha kararlı çalışmasını sağlar. Bu sayede kullanıcılar, düzenli bakım ve doğru kurulumla uzun süre sorunsuz bir kullanım deneyimi yaşayabilir.',
    ],
  },
];

export function generateStaticParams() {
  return posts.map((post) => ({ slug: post.slug }));
}

export default function BlogDetailPage({ params }: { params: { slug: string } }) {
  const post = posts.find((item) => item.slug === params.slug);

  if (!post) {
    return (
      <main className="min-h-screen bg-slate-50">
        <TopBar />
        <Navbar />
        <section className="px-6 py-20 sm:px-8 lg:px-12">
          <div className="mx-auto max-w-4xl rounded-[2rem] bg-white p-8 text-center shadow-soft">
            <h1 className="text-3xl font-semibold text-slate-950">Blog bulunamadı.</h1>
            <p className="mt-4 text-slate-600">İstenen yazı mevcut değil.</p>
            <Link href="/blog" className="mt-8 inline-flex rounded-full bg-blue-600 px-6 py-3 text-sm font-semibold text-white">
              Bloglara Dön
            </Link>
          </div>
        </section>
        <FloatingWhatsApp />
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-slate-50">
      <TopBar />
      <Navbar />

      <section className="bg-gradient-to-br from-sky-600 via-cyan-600 to-blue-700 px-6 py-20 text-white sm:px-8 lg:px-12">
        <div className="mx-auto max-w-4xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.32em] text-cyan-100">Blog Detayı</p>
          <h1 className="mt-4 text-3xl font-semibold leading-tight sm:text-4xl">{post.title}</h1>
        </div>
      </section>

      <section className="px-6 py-16 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-4xl rounded-[2rem] bg-white p-8 shadow-soft sm:p-10">
          <div className="space-y-6 text-lg leading-8 text-slate-700">
            {post.content.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>

          <div className="mt-10 flex justify-center">
            <Link href="/blog" className="inline-flex rounded-full bg-blue-600 px-6 py-3 text-sm font-semibold text-white transition hover:bg-blue-700">
              Bloglara Dön
            </Link>
          </div>
        </div>
      </section>

      <FloatingWhatsApp />
    </main>
  );
}
