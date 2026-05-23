import type { Metadata } from 'next';
import { EB_Garamond, Inter } from 'next/font/google';
import { ContactBand } from '@/components/layout/contact-band';
import { MobileTabNav } from '@/components/layout/mobile-tab-nav';
import { SiteFooter } from '@/components/layout/site-footer';
import { SiteHeader } from '@/components/layout/site-header';
import { siteConfig } from '@/lib/site-config';
import './globals.css';

const inter = Inter({
  variable: '--font-sans',
  subsets: ['latin'],
  weight: ['400', '500', '600'],
});

const ebGaramond = EB_Garamond({
  variable: '--font-display',
  subsets: ['latin'],
  weight: 'variable',
});

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  manifest: '/site.webmanifest',
  // Favicon: src/app/favicon.ico + src/app/icon.png (Next.js file conventions).
  // PNG sizes in public/ for browsers that prefer explicit dimensions.
  icons: {
    icon: [
      { url: '/favicon-32.png', sizes: '32x32', type: 'image/png' },
      { url: '/favicon-48.png', sizes: '48x48', type: 'image/png' },
    ],
    apple: [{ url: '/apple-icon.png', sizes: '180x180', type: 'image/png' }],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${ebGaramond.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col">
        <SiteHeader />
        <main className="flex-1">{children}</main>
        <ContactBand />
        <SiteFooter />
        <MobileTabNav />
      </body>
    </html>
  );
}
