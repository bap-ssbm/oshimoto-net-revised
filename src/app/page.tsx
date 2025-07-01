import Image from 'next/image';
import Hero from '@/components/top/Hero/Hero';
import GallerySect from '@/components/top/GallerySect/GallerySect';
import PortraitSect from '@/components/top/PortraitSect/PortraitSect';

export default function Home() {
  return (
    <main className="">
      <Hero />
      <PortraitSect />
    </main>
  );
}
