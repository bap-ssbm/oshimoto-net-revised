'use client';

import React, { useEffect, useRef } from 'react';

import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import SeperateText from '@/components/common/SeperateText';
import './Hero.scss';
import MainVideo from '../MainVideo/MainVideo';
import GallerySect from '../GallerySect/GallerySect';
import PortraitSect from '../PortraitSect/PortraitSect';

const texts = {
  title: '',
  firstName: 'RYUICHI',
  lastName: 'OSHIMOTO',
  nameja: '隆一押本'
};

function Hero() {
  gsap.registerPlugin(ScrollTrigger as gsap.GSAPConfig);

  useGSAP(() => {});
  useEffect(() => {
    if (document.readyState === 'complete') {
      document.querySelector('.hero')?.classList.add('is-animate');
    } else {
      document.querySelector('.hero')?.classList.add('is-animate');
    }
  }, []);

  return (
    <section className="hero flex pc:flex-row sp:flex-col justify-center w-full items-center text-black min-h-screen gap-20 px-10">
      <h2 className="pc:mb-0 mb-10 pc:text-32 leading-none text-20">
        <span className="opacity-70">A Veteran</span>
        <br />
        of Photography
      </h2>
      <div className="shrink-0">
        <MainVideo />
      </div>
    </section>
  );
}

export default Hero;
