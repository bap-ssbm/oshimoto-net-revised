'use client'
import { useEffect, useRef, useState } from 'react';
import './Cursor.scss';



interface Props extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement> {

}

function Cursor({className, ...props} : Props) {
    const cursorRef = useRef<HTMLDivElement>(null);
    const [hovered, setHovered] = useState(false);
    const [outOfScreen, setoutOfScreen] = useState<boolean>(false);
    const [mouseY, setMouseY] = useState(0);
    const [mouseX, setMouseX] = useState(0);
  
    useEffect(() => {
       
        const positionElement = (e: MouseEvent) => {
            setMouseY(e.clientY);
            setMouseX(e.clientX);
        };

        const hoverHandler = (e: MouseEvent) => {
            const target = e.target as HTMLElement;
            const isHoveringOverAnchor = target.closest('a') !== null;
            setHovered(isHoveringOverAnchor);
        };
        
        const unhoverHandler = (e: MouseEvent) => {
            const target = e.target as HTMLElement;
            const isHoveringOverAnchor = target.closest('a') !== null;
            setHovered(isHoveringOverAnchor);
        };

        window.addEventListener('mousemove', positionElement);
        document.body.addEventListener('mouseover', e => hoverHandler(e));
        document.body.addEventListener('mouseout', e => unhoverHandler(e));
        document.documentElement.addEventListener('mouseleave', () => {
           setoutOfScreen(true);
        });
        document.documentElement.addEventListener('mouseenter', () => {
            setoutOfScreen(false);
        });  

        return () => {
            window.removeEventListener('mousemove', positionElement);
            document.body.addEventListener('mouseover', e => hoverHandler(e));
            document.body.addEventListener('mouseout', e => unhoverHandler(e));
        };
    }, [mouseY, mouseX]);
    
   

  return (
    <div className='pointer-events-none w-screen h-svh fixed top-0 left-0 bg-black mix-blend-difference z-[99999]'>
<div ref={cursorRef} style={{ transform: `translate3d(${mouseX}px, ${mouseY}px, 0)`, display: outOfScreen?'none':'inline-block'}} id='cursor' className='cursor pointer-events-none w-3 h-3 mix-blend-difference rounded-full relative z-50 invert pc:inline-blockhidden pc:flex items-center justify-center hidden'>
    <div style={{ transform: `${hovered? 'scale(4)' : ''}` }}  className='curso__inner w-full h-full rounded-full invert opacity-80 bg-back absolute top-0 left-0 border bg-white ease-in-out duration-500 text-sm'>   
    </div>
  </div>
    </div>
  );
}

export default Cursor;
