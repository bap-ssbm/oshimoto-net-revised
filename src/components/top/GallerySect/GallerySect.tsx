'use client'
import React, { useEffect, useRef } from 'react';
import Photo from '@/components/common/Photo/Photo'
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import SeperateText from '@/components/common/SeperateText';
import './GallerySect.scss';

const texts = {

}


function GallerySect() {
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
    <div className='flex justify-center w-screen'>
       {/* <Photo className='pc:w-[500px] w-full' width={500} height={200} alt='' src='/images/top/img-gallery-01.jpg'/> */}
    </div>
  );
}

export default GallerySect;
