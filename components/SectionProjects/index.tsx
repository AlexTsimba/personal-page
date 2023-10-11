import { useState } from 'react';

import Container from '../Container';
import PageTitle from '../PageTitle';
import Dictionary from '@/types/Dictionary';
import Gallery from './Gallery';
import { Accordion } from '@/components/shadcn/accordion';
import ProjectCard from './ProjectCard';
import ExternalLInk from '../ExternalLInk';
import Project from '@/types/Project';

interface ProjectsProps {
  dict: Dictionary['projects'];
  projects: Project[] | null;
}

export default function Projects({ dict, projects }: ProjectsProps) {
  const [illustration, setIllustration] = useState({ active: false, index: 0 });
  const [isActive, setIsActive] = useState<boolean>(false); // to-do: use currentSection from uiStore (after scrolltrigger fix)

  return (
    <Container
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

        {projects && (
          <Accordion type="single" collapsible className="w-full">
            {projects.map((project, index) => {
              return (
                <ProjectCard
                  project={project}
                  onHover={setIllustration}
                  index={index}
                  key={project.title}
                />
              );
            })}
            {isActive && <Gallery status={illustration} projects={projects} />}
          </Accordion>
        )}

        <div className="self-end">
          <span className="text-clamp-md after:content-['_']">
            {dict.invitation}
          </span>
          <ExternalLInk href="https://github.com/" title={dict.ghProfile} />
        </div>
      </div>
    </Container>
  );
}
