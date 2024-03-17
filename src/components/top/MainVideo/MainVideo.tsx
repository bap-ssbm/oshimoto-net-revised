'use client'
import React, { useEffect, useRef } from 'react';

import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import SeperateText from '@/components/common/SeperateText';
import './Hero.scss';

const texts = {

}


function Hero() {
    gsap.registerPlugin(ScrollTrigger as gsap.GSAPConfig)

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
    <div className='MainVideo'>
      
    </div>
  );
}

export default Hero;
