import { useState } from 'react';

const projects = [
  {
    title: 'Todo App',
    src: 'todoApp.webp',
    color: '#000000',
    tools: 'React, Tailwind, Framer Motion',
  },
  {
    title: 'Personal Page',
    src: 'personalPage.webp',
    color: '#8C8C8C',
    tools: 'Next 13, Framer Motion, GSAP',
  },
  {
    title: 'Bose Landing Page',
    src: 'bose.webp',
    color: '#EFE8D3',
    tools: 'HTML, SCSS, JS',
  },
  {
    title: 'Under Construction',
    src: 'silencio.png',
    color: '#706D63',
    tools: 'under constructuion',
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
        className="flex w-full flex-col items-center justify-center gap-16 rounded-xl py-[5vh] md:my-[5vh] md:bg-routine-foreground md:px-16"
        onMouseEnter={() => setIsActive(true)}
      >
        <blockquote className="flex flex-col items-start gap-2 self-start border-l-2 border-foreground/50 px-6 font-medium">
          <p
            className={`text-2xl font-bold text-accent before:content-['"'] after:content-['"'] md:text-3xl`}
          >
            {dict.titleQuote}
          </p>
          <cite className="text-lg font-semibold text-foreground/70 before:content-['—_'] md:text-xl">
            {dict.quoteAuthor}
          </cite>
        </blockquote>

        <Accordion type="single" collapsible className="w-full">
          {projects.map((project, index) => {
            return (
              <ProjectDetails
                scroller={scroller}
                onHover={setIllustration}
                color={project.color}
                src={project.src}
                title={project.title}
                key={project.color}
                index={index}
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
            className='text-lg font-medium text-accent before:content-["_"] after:content-["_↗"]'
          >
            {dict.ghProfile}
          </Link>
        </div>
      </div>
    </Container>
  );
}
