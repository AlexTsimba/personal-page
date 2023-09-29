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
import Project from './Project';
import Illustration from './Illustration';

interface ProjectsProps {
  dict: Dictionary['projects'];
}

export default function Projects({ dict }: ProjectsProps) {
  const [illustration, setIllustration] = useState({ active: false, index: 0 });

  return (
    <Container className="flex flex-col items-center justify-center">
      <PageTitle title={dict.pageTitle} />
      <div className="flex w-full flex-col items-center justify-center  rounded-lg py-[5vh] md:my-[5vh] md:px-12">
        {projects.map((project, index) => {
          return (
            <Project
              index={index}
              project={project}
              onHover={setIllustration}
              key={project.tools}
            />
          );
        })}
        <Illustration status={illustration} projects={projects} />
      </div>
    </Container>
  );
}