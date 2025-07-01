'use client';
import React, { useEffect, useRef } from 'react';
import ParallaxPhoto from '@/components/common/ParallaxPhoto/ParallaxPhoto';

import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

const texts = {};

function PortraitSect() {
  gsap.registerPlugin(ScrollTrigger as gsap.GSAPConfig);
  gsap.registerPlugin(useGSAP);
  const internalRef = useRef(null);
  useGSAP(() => {});
  useEffect(() => {
    if (internalRef.current) {
      const $sectionElm = internalRef.current as HTMLDivElement;
    }
  }, []);

  return (
    <div ref={internalRef} className="portraitSect h-auto pc:max-w-400 sp:max-w-300">
      <ParallaxPhoto photo={{ width: 500, height: 200, alt: '', src: '/images/top/img-gallery-01.jpg' }} />
    </div>
  );
}

export default PortraitSect;
