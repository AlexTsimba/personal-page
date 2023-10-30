import { useRef, useEffect } from 'react';
import { m } from 'framer-motion';
import gsap from 'gsap';
import Project from '@/types/Project';
import { motionControls } from '@/lib/motionControls';
import classNames from 'classnames';

import ImageWithBlur from '../Image';

interface GalleryProps {
  status: { active: boolean; index: number };
  projects: Project[] | null;
}

export default function Gallery({ status, projects }: GalleryProps) {
  const { active, index } = status;
  const showHideAnimation = motionControls.projects.illustration;
  const illustrationRef = useRef(null);

  useEffect(() => {
    let xMoveContainer = gsap.quickTo(illustrationRef.current, 'left', {
      duration: 0.4,
      ease: 'power3',
    });
    let yMoveContainer = gsap.quickTo(illustrationRef.current, 'top', {
      duration: 0.4,
      ease: 'power3',
    });

    window.addEventListener('mousemove', (e) => {
      const { pageX, pageY } = e;
      xMoveContainer(pageX);
      yMoveContainer(pageY);
    });
  }, []);

  return (
    <m.div
      ref={illustrationRef}
      variants={showHideAnimation}
      animate={active ? 'enter' : 'closed'}
      className={classNames(
        { 'scale-0 transition-transform duration-75 ': !active },
        'pointer-events-none absolute hidden items-center justify-center overflow-hidden md:flex'
      )}
      style={{ height: '400px', width: '350px' }}
    >
      <div
        style={{ top: index * -100 + '%', transition: 'top 0.3s' }}
        className="absolute h-full w-full transition-transform "
      >
        {projects?.map((project) => {
          const { coverImage } = project;
          const { backgroundColor } = coverImage;
          const { title } = project.translations[0];
          return (
            <div
              key={title}
              className="relative flex h-full w-full items-center justify-center"
              style={{ backgroundColor: backgroundColor }}
            >
              <ImageWithBlur image={coverImage} type="image" />
            </div>
          );
        })}
      </div>
    </m.div>
  );
}
