'use client';

import ReactLenis from '@studio-freight/react-lenis';
import { useEffect, useState } from 'react';
import Cursor from './Cursor/Cursor';

interface Props extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  children: React.ReactNode;
}

function SectionLayout({ children, ...props }: Props) {
  const [mounted, setMounted] = useState(false);
  const [windowWidth, setWindowWidth] = useState(0);

  useEffect(() => {
    setMounted(true);
    setWindowWidth(window.innerWidth);

    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  if (!mounted) return null; // Avoid hydration mismatch

  return (
    <>
      {windowWidth > 768 ? (
        <ReactLenis root>
          <Cursor />
          {children}
        </ReactLenis>
      ) : (
        <div>{children}</div>
      )}
    </>
  );
}

export default SectionLayout;
