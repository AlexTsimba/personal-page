import Project from '@/types/Project';
import React from 'react';

interface ProjectItemProps {
  index: number;
  project: Project;
  onHover: ({ active, index }: { active: boolean; index: number }) => void;
}

export default function ProjectItem({
  index,
  project,
  onHover,
}: ProjectItemProps) {
  return (
    <div
      key={project.color}
      className="group flex w-full cursor-pointer items-center justify-between border-b-[1px] border-foreground/50 px-10 py-10 first:border-t-[1px] lg:px-20"
      onMouseEnter={() => {
        onHover({ active: true, index });
      }}
      onMouseLeave={() => {
        onHover({ active: false, index });
      }}
    >
      <h3 className="text-xl transition-transform duration-200 group-hover:-translate-x-6 group-hover:text-accent md:text-3xl">
        {project.title}
      </h3>
      <p className="text-sm transition-transform duration-200 group-hover:translate-x-6 group-hover:text-accent md:text-base">
        {project.tools}
      </p>
    </div>
  );
}
