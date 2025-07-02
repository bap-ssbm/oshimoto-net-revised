import { scrollAnimation } from './sai.ts';
if (typeof window !== 'undefined') {
  scrollAnimation();
}
const smoothScrollTo = (target: string | Event) => {
  let targetElement: HTMLElement | null = null;

  if (typeof target === 'string') {
    // If target is a string (e.g., '#pageTop'), use it directly
    targetElement = document.querySelector(target);
  } else if (target instanceof Event) {
    // If target is an Event object, extract the href attribute
    target.preventDefault();
    const targetId =
      target instanceof Event && target.currentTarget instanceof Element
        ? target.currentTarget.getAttribute('href')
        : null;
    if (targetId) {
      targetElement = document.querySelector(targetId);
    }
  }

  if (targetElement) {
    window.scrollTo({
      top: (targetElement as HTMLElement).offsetTop,
      behavior: 'smooth',
    });
  }
};

export { smoothScrollTo };
