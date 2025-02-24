import type { Metadata } from 'next';
import { Syne_Mono, Monofett } from 'next/font/google';

import './globals.css';

const syneMono = Syne_Mono({
  variable: '--font-syne-mono',
  subsets: ['latin'],
  weight: ['400'],
});

const monofett = Monofett({
  variable: '--font-monofett',
  subsets: ['latin'],
  weight: ['400'],
});

export const metadata: Metadata = {
  title: 'Dash Mon[k]ey',
  description: 'Monkey see, Monkey do!',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <link rel="icon" href="/circus-monkey.svg" />
      <body
        className={`
          ${syneMono.variable}
          ${monofett.variable}
          antialiased
          font-default
        `}
      >
        {children}
      </body>
    </html>
  );
}
