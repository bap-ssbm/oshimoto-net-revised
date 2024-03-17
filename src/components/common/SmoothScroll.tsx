'use client'
import ReactLenis from '@studio-freight/react-lenis';
import { useEffect, useState } from 'react';
// import Cursor from '../common/Cursor/Cursor';

interface Props extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    children: React.ReactNode;
}

function SectionLayout({children,  ...props}: Props) {
    const [windowWidth, setWindowWidth] = useState(0);

    useEffect(() => {
        setWindowWidth(window.innerWidth);

      function handleResize() {
        setWindowWidth(window.innerWidth);
      }
  
      window.addEventListener('resize', handleResize);
      return () => window.removeEventListener('resize', handleResize);
    }, []);
  
   
  return (
    <>
    {(windowWidth>768)?
      (<ReactLenis root >
        {/* <Cursor/> */}
        {children}
        </ReactLenis>):
      ( <div>
            {children}
        </div>)}
    </>
  );
}

export default SectionLayout;
