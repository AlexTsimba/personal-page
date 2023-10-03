import React, { Dispatch, SetStateAction } from 'react';
import {
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from '@/components/shadcn/accordion';
import ProjectTest from './ProjectTest';
import Lenis from '@studio-freight/lenis';

interface ProjectDetailsProps {
  index: number;
  color: string;
  src: string;
  title: string;
  scroller: Lenis;
  onHover: Dispatch<SetStateAction<{ active: boolean; index: number }>>;
}

export default function ProjectDetails({
  scroller,
  src,
  title,
  onHover,
  index,
}: ProjectDetailsProps) {
  
  // This function handles scrolling to the target section when it expands.
  // It checks the state of the AccordionItem and, if closed, scrolls to the target with an offset of -200 pixels.
  // A timeout of 400 milliseconds is set to allow the AccordionItem to fully expand before scrolling.
  const handleExpandScroll = () => {
    const target = document.getElementById(title);
    const AccordionItemState = document
      .getElementById(`accordion-${index}`)
      ?.getAttribute('data-state');

    if (AccordionItemState === 'closed') {
      setTimeout(() => {
        scroller.scrollTo(target, { offset: -200 });
      }, 400);
    }
  };

  return (
    <AccordionItem
      id={`accordion-${index}`}
      value={src}
      className="border-t-2 border-foreground/50 p-0 first:border-none"
      onClick={handleExpandScroll}
    >
      <AccordionTrigger className="m-0 p-0">
        <div
          className=" block w-full cursor-pointer px-10 py-8 text-start  lg:px-10"
          onMouseEnter={() => {
            onHover({ active: true, index });
          }}
          onMouseLeave={() => {
            onHover({ active: false, index });
          }}
        >
          <h3
            id={title}
            className="text-lg transition-transform duration-300 group-hover:-translate-x-6 group-hover:text-accent group-data-[state=open]:-translate-x-6 group-data-[state=open]:text-accent md:text-2xl"
          >
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
