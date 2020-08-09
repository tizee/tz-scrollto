import { mapToFunc } from './easings';
enum Easings {
  linear = 'linear',
  easeIn = 'easeIn',
  easeOut = 'easeOut',
  easeInOut = 'easeInOut',
}

interface Config {
  duration: number;
  easing: Easings;
}

const lerp = (a: number, b: number, f: number) => {
  return a + (b - a) * f;
};

function tzScrollTo(el: HTMLElement | number, config?: Config): void {
  const conf: Config = Object.assign(
    {
      duration: 600,
      easing: Easings.easeIn,
    },
    config
  );
  const start = Date.now();
  const startY = window.scrollY;
  const top = el instanceof HTMLElement ? el.getBoundingClientRect().top : el;
  function scroll() {
    const offset = Date.now() - start;
    if (offset > conf.duration) {
      return;
    }
    const progress = mapToFunc[conf.easing](offset / conf.duration);
    window.scrollTo(0, lerp(startY, top, progress));
    requestAnimationFrame(scroll);
  }
  scroll();
}

export default tzScrollTo;
