import type { Metadata, Viewport } from 'next';
import { Inter, Lora } from 'next/font/google';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  variable: '--font-inter',
  display: 'swap',
});

const lora = Lora({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  variable: '--font-lora',
  display: 'swap',
});

const siteUrl = 'https://subjecttocontract.co.uk';
const title = "Subject To Contract - UK property's weekly intelligence briefing";
const description =
  'The week’s biggest UK property stories, distilled. Sharp takes. Real sources. Free, every Tuesday morning. Read by estate agency owners, lettings directors, and proptech founders.';

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title,
  description,
  applicationName: 'Subject To Contract',
  authors: [{ name: 'Welto Media' }],
  icons: {
    icon: '/logos/stc-favicon.svg',
    shortcut: '/logos/stc-favicon.svg',
    apple: '/logos/stc-favicon.svg',
  },
  openGraph: {
    type: 'website',
    url: siteUrl,
    siteName: 'Subject To Contract',
    title,
    description,
    locale: 'en_GB',
    // TODO: replace with real OG image once supplied
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Subject To Contract - UK property’s weekly intelligence briefing',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title,
    description,
    images: ['/og-image.png'],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  themeColor: '#1B4332',
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en-GB" className={`${inter.variable} ${lora.variable}`}>
      <body>{children}</body>
    </html>
  );
}
