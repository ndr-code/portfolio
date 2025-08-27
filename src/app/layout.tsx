import { clsx } from 'clsx';
import type { Metadata } from 'next';
import { Anton, Montserrat, Bonheur_Royale } from 'next/font/google';
import './globals.css';

const anton = Anton({
  variable: '--font-anton',
  weight: ['400'],
  subsets: ['latin'],
});

const montserrat = Montserrat({
  variable: '--font-montserrat',
  subsets: ['latin'],
  weight: ['500', '600', '700', '800'],
  style: ['normal'],
});

const bonheur = Bonheur_Royale({
  variable: '--font-bonheur',
  subsets: ['latin'],
  weight: ['400'],
  style: ['normal'],
});

export const metadata: Metadata = {
  title: 'Tri Aji',
  description: 'Personal Portfolio',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body
        className={clsx(
          montserrat.variable,
          anton.variable,
          bonheur.variable,
          'antialiased'
        )}
      >
        {children}
      </body>
    </html>
  );
}
