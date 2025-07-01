'use client';
import { useEffect, useRef, useState } from 'react';

interface Props extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement> {}

function Loading({ className, ...props }: Props) {
  const internalRef = useRef(null);

  useEffect(() => {
    if (internalRef.current) {
      const $loadElm = internalRef.current as HTMLDivElement;
      if (document.readyState === 'complete') {
        $loadElm.classList.add('opacity-0');
      } else {
        window.addEventListener('load', () => {
          $loadElm.classList.add('opacity-0');
        });
      }
    }
  }, []);

  return (
    <div
      ref={internalRef}
      className="fixed hidden pointer-events-none transition-opacity duration-500 top-0 left-0 justify-center z-[999] bg-black items-center w-screen h-screen"
    >
      <div>
        ロード中<span className="animation-">.</span>
        <span>.</span>
        <span>.</span>
      </div>
    </div>
  );
}

export default Loading;
