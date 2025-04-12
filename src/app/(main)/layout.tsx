import type { Metadata } from "next";
import "../globals.css";

import { Nunito } from 'next/font/google'

const nunito = Nunito({
  subsets: ['latin'],
  weight: ['400', '600', '700'], // adjust as needed
  variable: '--font-nunito',
})

export const metadata: Metadata = {
  title: 'LocalNet',
  description: 'Hyperlocal community platform',
  icons: {
    icon: '/logo.png'
  }
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={nunito.variable}>
      <body>
        {children}
      </body>
    </html>
  );
}
