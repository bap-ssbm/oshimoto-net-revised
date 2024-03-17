'use client'
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import Image from 'next/image'
import { useRef } from 'react';

const content = {

}

interface Props extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>  {
    width: number,
    height: number,
    alt: string,
    src: string 
}
function Header({width, height, alt, src,  ...props}: Props) {
    const navRef = useRef<HTMLDivElement>(null)
    
    
    gsap.registerPlugin(ScrollTrigger as gsap.GSAPConfig)


  return (
  <div {...props}>
    <Image className='pointer-events-none w-auto h-full max-w-full' 
        src={src}
        width={width}
        height={height}
        alt={alt} />
  </div>
  );
}

export default Header;
