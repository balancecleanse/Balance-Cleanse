import { Metadata } from 'next';
import { Providers } from "./providers";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Suspense } from 'react';
import Loading from './loading';
import "@/styles/globals.css";

export const metadata: Metadata = {
  title: 'Balance Cleanse - Natural Wellness Products',
  description: 'Transform your wellness journey with our premium cleansing products. Natural, effective, and carefully crafted for your body\'s needs.',
  viewport: 'width=device-width, initial-scale=1',
  icons: {
    icon: '/favicon.ico',
  },
  openGraph: {
    title: 'Balance Cleanse - Natural Wellness Products',
    description: 'Transform your wellness journey with our premium cleansing products.',
    images: ['/og-image.jpg'],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="light">
      <body className="antialiased">
        <Providers>
          <div className="min-h-screen flex flex-col">
            <Navbar />
            <Suspense fallback={<Loading />}>
              <main className="flex-grow animate-fade-in">{children}</main>
            </Suspense>
            <Footer />
          </div>
        </Providers>
      </body>
    </html>
  );
}
