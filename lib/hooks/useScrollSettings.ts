// 'use client';

// import { useEffect, useState } from 'react';
// import gsap from 'gsap';
// import '../../app/globals.css';
// import ScrollTrigger from 'gsap/ScrollTrigger';

// export interface Scroller {
//   on: (s: string, t: any) => void;
//   scrollTo: (target: string, options: {}) => void;
// }

// const useScrollSettings = (start: boolean) => {
//   const [scroller, setScroller] = useState<LocomotiveScroll>();

//   useEffect(() => {
//     if (!start) return;

//     gsap.registerPlugin(ScrollTrigger);

//     import('locomotive-scroll').then(({ default: LocomotiveScroll }) => {
//       if (typeof window !== 'undefined') {
//         let scrollEl =
//           document.querySelector<HTMLElement>('[data-scroll-container]') ||
//           undefined;

//         const locoScroll = new LocomotiveScroll({
//           el: scrollEl,
//           smooth: true,
//           multiplier: 1,
//           class: 'is-reveal',
//         });

//         setScroller(locoScroll);

//         locoScroll.on('scroll', () => {
//           ScrollTrigger.update();
//         });

//         const lsUpdate = () => {
//           if (locoScroll) {
//             locoScroll.update();
//           }
//         };

//         locoScroll.update();

//         ScrollTrigger.refresh();

//         return () => {
//           if (locoScroll) {
//             ScrollTrigger.removeEventListener('refresh', lsUpdate);
//             locoScroll.destroy();
//           }
//         };
//       }
//     });
//   }, [start]);

//   return scroller;
// };

// export default useScrollSettings;
'use client';

import { useEffect, useState } from 'react';
import gsap from 'gsap';
import '../../app/globals.css';
import ScrollTrigger from 'gsap/ScrollTrigger';

export interface Scroller {
  on: (s: string, t: any) => void;
  scrollTo: (target: string, options: {}) => void;
}

const useScrollSettings = (start: boolean) => {
  const [scroller, setScroller] = useState<LocomotiveScroll>();

  useEffect(() => {
    if (!start) return;

    try {
      gsap.registerPlugin(ScrollTrigger);

      import('locomotive-scroll').then(({ default: LocomotiveScroll }) => {
        if (typeof window !== 'undefined') {
          let scrollEl =
            document.querySelector<HTMLElement>('[data-scroll-container]') ||
            undefined;

          const locoScroll = new LocomotiveScroll({
            el: scrollEl,
            smooth: true,
            multiplier: 1,
            class: 'is-reveal',
          });

          setScroller(locoScroll);

          if (!locoScroll) {
            console.warn(
              'locomotive-scroll: [data-scroll-container] dataset was not found. you likely forgot to add it which will prevent locomotive scroll to work.'
            );
          }

          locoScroll.on('scroll', () => {
            ScrollTrigger.update();
          });

          const lsUpdate = () => {
            if (locoScroll) {
              locoScroll.update();
            }
          };

          locoScroll.update();

          ScrollTrigger.refresh();

          return () => {
            if (locoScroll) {
              ScrollTrigger.removeEventListener('refresh', lsUpdate);
              locoScroll.destroy();
            }
          };
        }
      });
    } catch (err) {
      console.warn(` LocomotiveScroll: ${err}`);
    }
  }, [start]);

  return scroller;
};

export default useScrollSettings;
