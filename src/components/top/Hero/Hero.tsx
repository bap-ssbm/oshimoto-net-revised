'use client'

import React, { useEffect, useRef } from 'react';

import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import SeperateText from '@/components/common/SeperateText';
import './Hero.scss';
import MainVideo from '../MainVideo/MainVideo';

const texts = {
    title: '',
    firstName: 'RYUICHI',
    lastName: 'OSHIMOTO',
    nameja: '隆一押本'
}


function Hero() {
    gsap.registerPlugin(ScrollTrigger as gsap.GSAPConfig)
    const nameEn = useRef<HTMLDivElement>(null);
    const heroWrap = useRef<HTMLDivElement>(null);
    const flowerRef = useRef<HTMLDivElement>(null);

    useGSAP(() => {
        
        
    })
    useEffect(()=> {
          if (document.readyState === "complete") {
            document.querySelector('.hero')?.classList.add('is-animate');
          } else {
            document.querySelector('.hero')?.classList.add('is-animate');
          }
    }, [])

   
  return (
    <div className='hero flex pc:flex-row flex-col justify-center items-center text-white h-screen pc:gap-[60px] px-10'>
        <p className=' pc:mb-0 mb-10 pc:text-7xl leading-none text-[calc(50/375*100vw)]'>
            <span className='opacity-70'>40 Years</span><br/>of Photography
        </p>
        <MainVideo/>
    </div>
  );
}

export default Hero;
