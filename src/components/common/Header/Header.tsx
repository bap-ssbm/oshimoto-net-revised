'use client';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';

const content = {
  title: 'Ryuichi Oshimoto'
};

type Props = {};
function Header() {
  const navRef = useRef<HTMLDivElement>(null);
  const [scrollTop, setScrollTop] = useState(0);

  gsap.registerPlugin(ScrollTrigger as gsap.GSAPConfig);

  return (
    <nav
      ref={navRef}
      className="nav w-screen z-50 fixed left-0 top-0 pc:h-[70px] h-[50px] pc:pl-5 pl-3 duration-300 mix-blend-difference "
    >
      <Link href="/">
        <h1 className="nav__logo w-160 py-12 text-white flex gap-4 items-center h-full">
          <img className="w-full h-auto" height={80} src="/images/common/icon-logo-white.png" alt="ryu oshimoto" />
        </h1>
      </Link>
    </nav>
  );
}

export default Header;
