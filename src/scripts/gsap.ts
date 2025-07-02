import { gsap } from 'gsap';
import { Observer } from 'gsap/dist/Observer';
import { ScrollToPlugin } from 'gsap/dist/ScrollToPlugin';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin, Observer);

export * from 'gsap';
export { ScrollTrigger, Observer };
