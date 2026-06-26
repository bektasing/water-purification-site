import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Akyıl LG Su Arıtma',
  description: 'Diyarbakır su arıtma sistemlerinde güvenilir çözümler.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="tr">
      <body>{children}</body>
    </html>
  );
}
