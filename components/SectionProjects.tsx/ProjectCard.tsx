import React, { Dispatch, SetStateAction } from 'react';
import {
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from '@/components/shadcn/accordion';
import ProjectContent from './ProjectContent';
import Project from '@/types/Project';

interface ProjectDetailsProps {
  index: number;
  project: Project;
  onHover: Dispatch<SetStateAction<{ active: boolean; index: number }>>;
}

export default function ProjectCard({
  project,
  onHover,
  index,
}: ProjectDetailsProps) {
  const { title, heroImage } = project;

  return (
    <AccordionItem
      id={`accordion-${index}`}
      value={title}
      className="border-t-2 border-foreground/50 p-0 first:border-none"
    >
      <AccordionTrigger className="m-0 p-0">
        <div
          className="block w-full cursor-pointer px-clamp py-8 text-start"
          onMouseEnter={() => {
            onHover({ active: true, index });
          }}
          onMouseLeave={() => {
            onHover({ active: false, index });
          }}
        >
          <h3
            id={title}
            className="text-clamp-lg transition-transform duration-300 group-hover:-translate-x-6 group-hover:text-accent group-data-[state=open]:text-accent md:group-data-[state=open]:-translate-x-6"
          >
            {title}
          </h3>
        </div>
      </AccordionTrigger>
      <AccordionContent>
        <ProjectContent heroImage={heroImage} />
      </AccordionContent>
    </AccordionItem>
  );
}
