export default function TopBar() {
  return (
    <div className="bg-slate-950 py-1 text-slate-100/90 text-[10px] sm:py-2 sm:text-sm sm:text-base">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-1 px-3 text-center sm:flex-row sm:px-6 lg:px-8">
        <p className="leading-tight">Diyarbakır'ın En İyi Su Arıtma Sistemleri</p>
        <a href="tel:+905XXXXXXXXX" className="font-semibold text-white hover:text-cyan-200">
          +90 5XX XXX XX XX
        </a>
      </div>
    </div>
  );
}
