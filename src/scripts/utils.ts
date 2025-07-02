const TBNum: number = 1024;
const spNum: number = 767;

interface BreakPoint {
  PC: boolean;
  TB: boolean;
  SP: boolean;
}

const _breakP: BreakPoint = ((w: number): BreakPoint => ({
  PC: w > spNum,
  TB: w <= TBNum && w > spNum,
  SP: w <= spNum,
}))(window.innerWidth);

function _smoothScroll() {
  const headerHeight = document.getElementById('gHeader')?.offsetHeight || 0;

  function smoothScrollTo(offsetPosition: number) {
    if ('scrollBehavior' in document.documentElement.style) {
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    } else {
      window.scrollTo(0, offsetPosition);
    }
  }

  const anchors = document.querySelectorAll('a[href^="#"]:not([href="#"])');
  for (const anchor of anchors) {
    anchor.addEventListener('click', function (this: HTMLAnchorElement, e: Event) {
      e.preventDefault();
      const targetId = this.getAttribute('href');
      if (targetId !== null) {
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
          const offsetPosition = targetElement.getBoundingClientRect().top + window.scrollY - headerHeight;
          smoothScrollTo(offsetPosition);
          const gHeader = document.getElementById('gHeader');
          const gNav = document.getElementById('gNav');
          gHeader?.classList.remove('is-open');
          gNav?.classList.remove('is-open');
        }
      }
    });
  }
}

export { _breakP, _smoothScroll };
