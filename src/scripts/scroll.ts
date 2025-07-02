import Lenis from '@studio-freight/lenis';

let lenis: Lenis | null = null;

function isSafari(): boolean {
  const ua = navigator.userAgent.toLowerCase();
  return ua.indexOf('safari') > -1 && ua.indexOf('chrome') === -1;
}

function nativeSmoothScroll(target: HTMLElement, offset = 0): void {
  const targetPosition = target.getBoundingClientRect().top + window.scrollY + offset;
  window.scrollTo({
    top: targetPosition,
    behavior: 'smooth',
  });
}

function initLenis(): void {
  if (isSafari()) {
    console.log('Safari detected. Using native smooth scroll.');
    return;
  }

  lenis = new Lenis({
    duration: 1.2,
    easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    orientation: 'vertical',
    gestureOrientation: 'vertical',
    smoothWheel: true,
    wheelMultiplier: 1,
    touchMultiplier: 2,
    infinite: false,
  });

  function raf(time: number): void {
    lenis?.raf(time);
    requestAnimationFrame(raf);
  }

  requestAnimationFrame(raf);
}

function setupSmoothAnchors(): void {
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener('click', function (this: HTMLAnchorElement, e: Event) {
      e.preventDefault();
      const href = this.getAttribute('href');
      if (href) {
        const target = document.querySelector(href) as HTMLElement | null;
        if (target) {
          if (isSafari()) {
            nativeSmoothScroll(target, -100);
          } else if (lenis) {
            lenis.scrollTo(target, {
              offset: -100,
              duration: 1.2,
              easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
            });
          }
        }
      }
    });
  });
}

export function setupLenisScroll(): void {
  if (typeof window !== 'undefined') {
    window.addEventListener('load', () => {
      initLenis();
      setupSmoothAnchors();
    });
  }
}

export function smoothScrollTo(
  target: string | HTMLElement,
  options: {
    offset?: number;
    duration?: number;
    easing?: (t: number) => number;
  } = {}
): void {
  const defaultOptions = {
    offset: 0,
    duration: 1.2,
    easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
  };

  const scrollOptions = { ...defaultOptions, ...options };

  let targetElement: HTMLElement | null = null;

  if (typeof target === 'string') {
    targetElement = document.querySelector(target);
  } else if (target instanceof HTMLElement) {
    targetElement = target;
  }

  if (targetElement) {
    if (isSafari()) {
      nativeSmoothScroll(targetElement, scrollOptions.offset);
    } else if (lenis) {
      lenis.scrollTo(targetElement, scrollOptions);
    }
  } else {
    console.warn('Target element not found');
  }
}

export function getLenis(): Lenis | null {
  return lenis;
}
