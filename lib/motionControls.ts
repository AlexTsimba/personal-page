import { cubicBezier } from 'framer-motion';

const durations = { xs: 0.1, sm: 0.2, md: 0.35, lg: 0.45, xl: 0.6, xxl: 1 };

// custom transitions
const easeOutCirc = cubicBezier(0, 0.55, 0.45, 1);
const easeInOutQuart = cubicBezier(0.76, 0, 0.24, 1);
// const easeInExpo = cubicBezier(0.7, 0, 0.84, 0);
const easeOutQuart = cubicBezier(0.25, 1, 0.5, 1);

export const motionControls = {
  sidebar: {
    initial: { x: '-100%', opacity: 0.5 },
    animate: { x: 0, opacity: 1 },
    exit: { x: '-100%', opacity: 0.8 },
    transition: { ease: easeOutCirc, duration: durations.lg },
  },
  closeArea: {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    exit: { opacity: 0 },
    transition: { type: 'spring', bounce: 0, duration: durations.sm },
  },
  sidebarPointer: {
    transition: { ease: easeOutQuart, duration: durations.xl },
  },
  sidebarArrowPointer: {
    transition: { ease: easeOutQuart, duration: 1 },
  },
  header: {
    variants: { hidden: { y: '-100%' } },
    transition: { ease: easeInOutQuart, duration: durations.md },
  },
  burger: {
    transition: { ease: 'linear', duration: durations.md },
  },
  scrollTo: {
    easing: easeOutQuart,
    duration: durations.xxl,
  },
  sidebarLinkTitle: {
    variants: {
      initial: { x: -40, opacity: 0 },
      animate: (index: number) => ({
        x: 0,
        opacity: 1,
        transition: {
          delay: durations.xs + index * durations.xs,
          duration: durations.lg,
          ease: easeOutCirc,
        },
      }),
    },
    initial: 'initial',
    whileInView: 'animate',
  },
};