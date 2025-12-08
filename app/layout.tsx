import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Sesotho Fashioneng - Fashion Rooted in Heritage',
  description: 'A fashion-and-culture movement inspired by Basotho heritage. Combining e-commerce, event promotion, and artist showcases.',
  keywords: 'Basotho fashion, African fashion, cultural clothing, traditional wear, modern fusion',
  openGraph: {
    type: 'website',
    locale: 'en_ZA',
    url: 'https://sesothofashioneng.com',
    title: 'Sesotho Fashioneng',
    description: 'Fashion Rooted in Heritage',
    images: ['/og-image.jpg'],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.className} bg-gray-900 text-white antialiased`}>
        {children}
      </body>
    </html>
  );
}