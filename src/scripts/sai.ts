interface ScrollAnimationOptions {
  offset: number;
  delay: number;
  easing: string;
  duration: number;
  disable: boolean;
  once: boolean;
}

export function scrollAnimation(): void {
  const targets: NodeListOf<Element> = document.querySelectorAll('[data-sai]');

  for (const target of targets) {
    target.classList.add('sai-init');
  }

  window.addEventListener('load', () => {
    const scrollTop: number = window.pageYOffset || document.documentElement.scrollTop;

    for (const target of targets) {
      const rect: DOMRect = target.getBoundingClientRect();
      const targetPosition: number = scrollTop + rect.top;

      if (targetPosition < scrollTop) {
        target.classList.add('sai-animate');
      }
    }
  });

  const options: ScrollAnimationOptions = {
    offset: 150,
    delay: 0,
    easing: 'ease',
    duration: 2000,
    disable: false,
    once: false
  };

  document.body?.setAttribute('data-sai-easing', options.easing);
  document.body?.setAttribute('data-sai-duration', options.duration.toString());
  document.body?.setAttribute('data-sai-delay', options.delay.toString());

  const callback: IntersectionObserverCallback = (entries: IntersectionObserverEntry[]) => {
    for (const entry of entries) {
      if (entry.isIntersecting) {
        (entry.target as Element).classList.add('sai-animate');
      }
    }
  };

  const observerOptions: IntersectionObserverInit = {
    rootMargin: `${-options.offset}px 0px`
  };

  const observer: IntersectionObserver = new IntersectionObserver(callback, observerOptions);

  for (const target of targets) {
    observer.observe(target);
  }
}