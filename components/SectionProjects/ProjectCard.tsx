'use client'

import { useEffect, useState } from 'react';

import Project from '@/types/Project';
import Dictionary from '@/types/Dictionary';
import { preventPageScroll } from '@/lib/utils';

import {
  Dialog,
  DialogContent,
  DialogTrigger,
} from '@/components/shadcn/dialog';
import ProjectContent from './PropojectContent';

interface ProjectDetailsProps {
  index: number;
  project: Project;
  dict: Dictionary['projects']['project'];
  onHover: ({ active, index }: { active: boolean; index: number }) => void;
}

export default function ProjectCard({
  project,
  onHover,
  index,
  dict,
}: ProjectDetailsProps) {
  const { title } = project.translations[0];
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const handleOpenChange = () => setIsOpen((prevOpen) => !prevOpen);
  const handleProjectClose = () => setIsOpen(false);
  const handleGalleryHover = (isHovered: boolean) => onHover({ active: isHovered, index });

  // body scrolling is not allowed, if dialog is open
  useEffect(() => {
    preventPageScroll(isOpen);
  }, [isOpen]);

  return (
    <Dialog open={isOpen} onOpenChange={handleOpenChange}>
      <div
        className="flex w-full items-center justify-between border-t-[1px] border-foreground/50 first:border-none"
        onMouseEnter={() => handleGalleryHover(true)}
        onMouseLeave={() => handleGalleryHover(false)}
      >
        <DialogTrigger className="group w-full">
          <div className="flex w-full cursor-pointer items-center justify-between px-clamp py-8">
            <h3 className="text-clamp-lg font-semibold transition-transform duration-300 group-hover:-translate-x-6 group-hover:text-accent group-data-[state=open]:text-accent md:group-data-[state=open]:-translate-x-6">
              {title}
            </h3>
          </div>
        </DialogTrigger>
      </div>
      <DialogContent onCloseAutoFocus={(event) => event.preventDefault()}>
        <ProjectContent
          project={project}
          onClose={handleProjectClose}
          dict={dict}
        />
      </DialogContent>
    </Dialog>
  );
}
