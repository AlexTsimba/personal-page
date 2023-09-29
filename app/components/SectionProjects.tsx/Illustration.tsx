import { useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import gsap from 'gsap';
import Project from '@/types/Project';
import { motionControls } from '@/lib/motionControls';

interface IllustrationProps {
  status: { active: boolean; index: number };
  projects: Project[];
}

export default function Illustration({ status, projects }: IllustrationProps) {
  const { active, index } = status;
  const showHideAnimation = motionControls.projects.illustration;
  const illustrationRef = useRef(null);

  useEffect(() => {
    let xMoveContainer = gsap.quickTo(illustrationRef.current, 'left', {
      duration: 0.8,
      ease: 'power3',
    });
    let yMoveContainer = gsap.quickTo(illustrationRef.current, 'top', {
      duration: 0.8,
      ease: 'power3',
    });

    window.addEventListener('mousemove', (e) => {
      const { pageX, pageY } = e;
      xMoveContainer(pageX);
      yMoveContainer(pageY);
    });
  }, []);

  return (
    <motion.div
      ref={illustrationRef}
      variants={showHideAnimation}
      animate={active ? 'enter' : 'closed'}
      className="pointer-events-none absolute hidden items-center justify-center overflow-hidden md:flex"
      style={{ height: '400px', width: '350px' }}
    >
      <div
        style={{ top: index * -100 + '%', transition: 'top 0.5s' }}
        className="absolute h-full w-full transition-transform "
      >
        {projects.map((project, i) => {
          const { src, color } = project;
          return (
            <div
              className="flex h-full w-full items-center justify-center"
              style={{ backgroundColor: color }}
              key={`modal_${i}`}
            >
              <Image
                src={`/images/${src}`}
                width={300}
                height={300}
                alt="image"
              />
            </div>
          );
        })}
      </div>
    </motion.div>
  );
}
