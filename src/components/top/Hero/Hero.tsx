'use client'

import React, { useEffect, useRef } from 'react';

import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import SeperateText from '@/components/common/SeperateText';
import './Hero.scss';

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
    <div className='hero flex justify-center items-center text-white h-screen'>
        <SeperateText text={texts.firstName}/>
    </div>
  );
}

export default Hero;
