import Image from "next/image";
import Hero from "@/components/top/Hero/Hero";
import GallerySect from "@/components/top/GallerySect/GallerySect";

export default function Home() {
  return (
    <main className="">
      <Hero/>
      <GallerySect/>
    </main>
  );
}
