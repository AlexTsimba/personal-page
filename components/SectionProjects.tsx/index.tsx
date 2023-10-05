import { useState } from 'react';

const projects = [
  {
    title: 'Todo App',
    cover: 'todoApp.webp',
    heroImage: 'todo',
    color: '#000000',
    // tools: 'React, Tailwind, Framer Motion',
  },
  {
    title: 'Personal Page',
    cover: 'personalPage.webp',
    heroImage: 'page',
    color: '#8C8C8C',
    // tools: 'Next 13, Framer Motion, GSAP',
  },
  {
    title: 'Bose Landing Page',
    cover: 'bose.webp',
    heroImage: 'bose',
    color: '#EFE8D3',
    // tools: 'HTML, SCSS, JS',
  },
  {
    title: 'Under Construction',
    cover: 'silencio.png',
    heroImage: 'personal',
    color: '#706D63',
    // tools: 'under constructuion',
  },
];

import Container from '../Container';
import PageTitle from '../PageTitle';
import Dictionary from '@/types/Dictionary';
import Gallery from './Gallery';
import { Accordion } from '@/components/shadcn/accordion';
import ProjectDetails from './ProjectDetails';
import Link from 'next/link';
import Lenis from '@studio-freight/lenis';
import { useLenis } from '@studio-freight/react-lenis';

interface ProjectsProps {
  dict: Dictionary['projects'];
}

export default function Projects({ dict }: ProjectsProps) {
  const [illustration, setIllustration] = useState({ active: false, index: 0 });
  const [isActive, setIsActive] = useState<boolean>(false); // to-do: use currentSection from uiStore (after scrolltrigger fix)
  const scroller: Lenis = useLenis();

  return (
    <Container
      id="35"
      className="flex flex-col items-center justify-center"
      onMouseLeave={() => setIsActive(false)}
    >
      <PageTitle title={dict.pageTitle} />
      <div
        className="flex w-full flex-col items-center justify-center gap-16 rounded-xl px-clamp"
        onMouseEnter={() => setIsActive(true)}
      >
        <blockquote className="flex flex-col items-start gap-2 self-start border-l-2 border-foreground/50 px-6 font-medium">
          <p
            className={`text-clamp-xl font-bold text-accent before:content-['"'] after:content-['"']`}
          >
            {dict.titleQuote}
          </p>
          <cite className="font-semibold text-foreground/70 before:content-['—_']">
            {dict.quoteAuthor}
          </cite>
        </blockquote>

        <Accordion type="single" collapsible className="w-full">
          {projects.map((project, index) => {
            return (
              <ProjectDetails
                key={project.color}
                index={index}
                project={project}
                onHover={setIllustration}
                scroller={scroller}
              />
            );
          })}
          {isActive && <Gallery status={illustration} projects={projects} />}
        </Accordion>

        <div className="self-end">
          <span>{dict.invitation}</span>
          <Link
            target="_blank"
            href="https://github.com/"
            className='left-0 top-0 z-[-1]  text-lg font-medium  text-accent after:absolute after:text-accent after:content-["_↗"] hover:underline hover:after:text-foreground'
          >
            {dict.ghProfile}
          </Link>
        </div>
      </div>
    </Container>
  );
}
