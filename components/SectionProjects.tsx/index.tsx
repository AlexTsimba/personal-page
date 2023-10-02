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
import ProjectDetails from './Project';

interface ProjectsProps {
  dict: Dictionary['projects'];
}

export default function Projects({ dict }: ProjectsProps) {
  const [illustration, setIllustration] = useState({ active: false, index: 0 });

  return (
    <Container className="flex flex-col items-center justify-center">
      <PageTitle title={dict.pageTitle} />
      <div className="flex w-full flex-col items-center justify-center gap-10 rounded-xl py-[5vh] md:my-[5vh] md:bg-routine-foreground md:px-12">
        <div className="flex flex-col gap-12 self-start py-10 font-medium">
          <div className="flex flex-col items-start gap-2 border-l-2 border-accent px-6">
            <span className="text-2xl font-bold leading-relaxed text-accent md:text-3xl ">
              Talk is cheap, show me the code
            </span>
            <span className="leading-relaxed text-foreground/70">
              — Linus Torvalds
            </span>
          </div>
        </div>
        <Accordion type="single" collapsible className="w-full">
          {projects.map((project, index) => {
            return (
              <ProjectDetails
                onHover={setIllustration}
                color={project.color}
                src={project.src}
                title={project.title}
                key={project.color}
                index={index}
              />
            );
          })}
          <Gallery status={illustration} projects={projects} />
        </Accordion>
        <p className="self-end">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit.
        </p>
      </div>
    </Container>
  );
}
