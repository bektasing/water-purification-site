import Link from 'next/link';

interface BlogCardProps {
  title: string;
  excerpt: string;
  date: string;
  slug: string;
  author?: string;
}

export default function BlogCard({ title, excerpt, date, slug, author = 'Akyıl Su Arıtma' }: BlogCardProps) {
  const [day, month] = date.split(' ');

  return (
    <article className="overflow-hidden rounded-[1.75rem] border border-slate-200 bg-white shadow-soft">
      <div className="relative h-56 overflow-hidden bg-gradient-to-br from-sky-500 via-cyan-500 to-blue-700">
        <div className="absolute left-4 top-4 flex flex-col items-center rounded-xl bg-white px-3 py-2 text-center text-sm font-semibold text-slate-900 shadow-lg">
          <span className="text-lg leading-none">{day}</span>
          <span className="mt-1 text-[11px] uppercase tracking-[0.24em]">{month}</span>
        </div>
        <div className="absolute inset-x-0 bottom-5 flex justify-center">
          <span className="rounded-full bg-blue-600 px-4 py-1 text-sm font-semibold uppercase tracking-[0.24em] text-white">
            BLOG
          </span>
        </div>
      </div>

      <div className="space-y-4 px-6 py-6 text-center">
        <h3 className="text-xl font-semibold text-slate-950">{title}</h3>
        <p className="text-sm text-slate-500">Yazar: {author}</p>
        <p className="text-sm leading-7 text-slate-600 line-clamp-2">{excerpt}</p>
        <Link href={`/blog/${slug}`} className="inline-flex items-center justify-center text-sm font-semibold text-blue-600 hover:text-blue-700">
          DEVAMINI OKU
        </Link>
      </div>
    </article>
  );
}
