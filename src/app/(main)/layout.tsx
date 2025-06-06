import type { Metadata } from "next";
import "../globals.css";

import { Nunito } from 'next/font/google'
import Navbar from "@/components/navbar";
import StoreProvider from "@/lib/StoreProvider";
import AuthWrapper from "@/components/AuthWrapper/AuthWrapper";

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
      <body suppressHydrationWarning={true}>
        <StoreProvider>
          <AuthWrapper>
            <header className="sticky top-0 z-40 bg-white shadow px-2">
              <Navbar />
            </header>
            <main className="px-2">{children}</main>
          </AuthWrapper>
        </StoreProvider>
      </body>
    </html>
  );
}
