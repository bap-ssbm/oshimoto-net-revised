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
    <div className='hero flex pc:flex-row flex-col justify-center items-center text-white h-screen pc:gap-[calc(50/1440*100vw)] px-10'>
        <p className='text-3xl pc:mb-0 mb-10 font-extralight'>
            <span className='text-5xl font-bold'>Ryuichi</span><br/><span className='opacity-70'>is a </span>Japanese photographer<br/>
            <span className='opacity-70'>with</span> <span className=''>40+</span><span className='opacity-70'> years of experience</span>
        </p>
       
        <MainVideo/>
    </div>
  );
}

export default Hero;
