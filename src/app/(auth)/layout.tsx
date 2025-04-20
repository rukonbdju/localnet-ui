import type { Metadata } from "next";
import "../globals.css";

import { Nunito } from 'next/font/google'
import StoreProvider from "@/lib/StoreProvider";

const nunito = Nunito({
  subsets: ['latin'],
  weight: ['400', '600', '700'], // adjust as needed
  variable: '--font-nunito',
})

export const metadata: Metadata = {
  title: 'LocalNet',
  description: 'Hyperlocal community platform',
  icons: {
    icon: '/logo.png',
  }
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={nunito.variable}>
        <main>
          <StoreProvider>
            {children}
          </StoreProvider>
        </main>
      </body>
    </html>
  );
}
