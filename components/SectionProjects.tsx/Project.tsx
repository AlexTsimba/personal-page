import React, { Dispatch, SetStateAction } from 'react';
import {
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from '@/components/shadcn/accordion';
import ProjectTest from './ProjectTest';

interface ProjectDetailsProps {
  index: number;
  color: string;
  src: string;
  title: string;
  onHover: Dispatch<SetStateAction<{ active: boolean; index: number }>>;
}

export default function ProjectDetails({
  color,
  src,
  title,
  onHover,
  index,
}: ProjectDetailsProps) {
  return (
    <AccordionItem
      key={color}
      value={src}
      className="border-t-2 border-foreground/50 p-0 first:border-none last:bg-red-500"
    >
      <AccordionTrigger className="m-0 p-0">
        <div
          className=" block w-full cursor-pointer px-10 py-10 text-start  lg:px-20"
          onMouseEnter={() => {
            onHover({ active: true, index });
          }}
          onMouseLeave={() => {
            onHover({ active: false, index });
          }}
        >
          <h3 className="text-xl transition-transform duration-200 group-hover:-translate-x-6 group-hover:text-accent group-data-[state=open]:-translate-x-6 group-data-[state=open]:text-accent md:text-3xl">
            {title}
          </h3>
        </div>
      </AccordionTrigger>
      <AccordionContent>
        <ProjectTest />
      </AccordionContent>
    </AccordionItem>
  );
}
