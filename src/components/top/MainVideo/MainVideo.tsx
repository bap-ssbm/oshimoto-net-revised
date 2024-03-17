'use client'
import React, { useEffect, useRef } from 'react';

import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import SeperateText from '@/components/common/SeperateText';
import './MainVideo.scss';

const texts = {

}


function MainVideo() {
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
    <div className='mainVideo pc:w-[40%] w-full'>
       <video id='video' className='object-cover w-full right-0 opacity-70 ' autoPlay playsInline muted loop preload='auto'>
            <source src="/videos/video-hero.mp4" type="video/mp4" />
            Your browser does not support the video tag.
        </video>
    </div>
  );
}

export default MainVideo;
