import TopBar from '../components/TopBar';
import Navbar from '../components/Navbar';
import AnimatedStats from '../components/AnimatedStats';
import FloatingWhatsApp from '../components/FloatingWhatsApp';

export default function KurumsalPage() {
  return (
    <main className="min-h-screen bg-slate-50">
      <TopBar />
      <Navbar />
      <section className="px-5 py-8 sm:px-8 sm:py-12 lg:px-12 lg:py-16">
        <div className="mx-auto max-w-7xl space-y-10">
          <div className="rounded-[2rem] bg-white p-6 shadow-soft sm:p-8 md:p-10 lg:p-12">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-brand-red">Kurumsal</p>
            <h1 className="mt-4 text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl md:text-5xl">
              Güvenilir su arıtma çözümleriyle kalıcı memnuniyet.
            </h1>
            <div className="mt-6 space-y-4 text-base leading-relaxed text-slate-600 md:space-y-5 md:text-lg md:leading-8">
              <p>
                Akyıl LG Su Arıtma olarak temel gayemiz; üstün kalite anlayışımızdan taviz vermeden, sağlıklı ve temiz suya ulaşımı herkes için güvenilir bir standart haline getirmektir. Su arıtma teknolojilerinde küresel çapta yaşanan yenilikleri yakından izliyor; evsel içme suyundan yüksek saflık gerektiren endüstriyel proseslere kadar geniş bir yelpazede yenilikçi çözümler üretiyoruz.
              </p>
              <p>
                Sektördeki faaliyetlerimizi şeffaflık, mutlak müşteri memnuniyeti ve profesyonel hizmet prensipleriyle sürdürüyor, çağın ötesinde bir hizmet anlayışıyla yolumuza devam ediyoruz.
              </p>
            </div>

            <div className="mt-8 grid gap-6 md:mt-10 md:grid-cols-2 md:gap-8">
              <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5 sm:p-6">
                <h2 className="text-xl font-semibold text-slate-950">Vizyonumuz</h2>
                <p className="mt-4 text-base leading-7 text-slate-600">
                  Sektördeki köklü tecrübemizi ve işimize duyduğumuz samimiyeti ileri teknolojili ürünlerimize yansıtarak, kullanıcılarımızın günlük hayatını kolaylaştıran pratik çözümler sunmak; hizmet kalitemizle beklentileri aşarak bölgemizde su arıtma denildiğinde akla gelen ilk ve en güvenilir referans marka olmaktır.
                </p>
              </div>
              <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5 sm:p-6">
                <h2 className="text-xl font-semibold text-slate-950">Misyonumuz</h2>
                <p className="mt-4 text-base leading-7 text-slate-600">
                  Temiz ve güvenilir içme suyu kaynaklarının her geçen gün daha da kritik bir önem taşıdığı dünyamızda; doğaya saygılı, ideal ve ileri teknoloji arıtma sistemlerimizle müşterilerimize en taze ve sağlıklı suyu sunarak yaşam standartlarını kalıcı olarak yükseltmektir.
                </p>
              </div>
            </div>
          </div>

          <AnimatedStats />
        </div>
      </section>
      <FloatingWhatsApp />
    </main>
  );
}
