import type { Metadata } from 'next';
import { EB_Garamond } from 'next/font/google';
import './globals.scss';
import SmoothScroll from '@/components/common/SmoothScroll';
import Header from '@/components/common/Header/Header';
import Loading from '@/components/common/Loading/Loading';
const enGaramond = EB_Garamond({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Ryuichi Oshimoto | Photography',
  description: 'Photographer Ryuichi Oshimoto website',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html lang="en">
      <body className={enGaramond.className}>
        <Loading/>
        <SmoothScroll>
          <Header/>
          {children}
        </SmoothScroll>
      </body>
    </html>
  );
}
