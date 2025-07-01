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
    const internalRef = useRef(null);

    useEffect(()=> {
      if(internalRef.current) {
        const $elm = internalRef.current as HTMLDivElement,
          $videoElm = $elm.querySelector('#video') as HTMLVideoElement;
        const loadHandler = () => {
          $elm.classList.add('is-load');
            $videoElm.play().then(() => {

            console.log('video played');
          }).catch((e: Error) => {
            console.log(e);
          })
        }
        
        if (document.readyState === "complete") {
                loadHandler()
            } else {
              window.addEventListener('load', () => {
                   loadHandler();
              });
            }
      }
     
    }, [])

   
  return (
    <div ref={internalRef} className='mainVideo overflow-hidden h-auto pc:max-w-400 sp:max-w-300'>
       <video id='video' className='object-cover w-full right-0 opacity-70 ' autoPlay playsInline muted loop preload='auto'>
            <source src="/videos/video-hero.mp4" type="video/mp4" />
            Your browser does not support the video tag.
        </video>
    </div>
  );
}

export default MainVideo;
