'use client';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import Image from 'next/image';
import { useRef } from 'react';
import Photo from '../Photo/Photo';
import type { Props as PhotoProps } from '../Photo/Photo';
import { useGSAP } from '@gsap/react';

const content = {};

export interface Props extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  photo: PhotoProps;
  startY?: string;
  endY?: string;
  className?: string;
}
function ParallaxPhoto({ photo, startY = '-10%', endY = '10%', className = '', ...props }: Props) {
  const parallaxRef = useRef<HTMLDivElement>(null);

  gsap.registerPlugin(ScrollTrigger as gsap.GSAPConfig);



  useGSAP(() => {
    const yStart = parallaxRef.current?.dataset.yStart;
    const yEnd = parallaxRef.current?.dataset.yEnd;
    const parallax_tl = gsap.timeline({
      scrollTrigger: {
        trigger: parallaxRef.current,
        start: 'top bottom',
        end: 'bottom top',
        scrub: 1,
        markers: false,
      }
    });
    parallax_tl.fromTo(parallaxRef.current, {
      y: yStart,
    }, {
      y: yEnd,
    });
  });
  return (
    <div ref={parallaxRef} data-y-start={startY} data-y-end={endY} className={`${className}`}>
      <Photo {...photo} />
    </div>
  );
}

export default ParallaxPhoto;
