// global.d.ts
interface Window {
  dataLayer: any[];
  gtag: (...args: any[]) => void;
}

declare var window: Window;
