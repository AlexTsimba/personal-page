'use client';

import Project from '@/types/Project';

import Links from './Links';
import Bages from './Badges';
import Features from './Features';
import ThemedImageWithBlur from '../ImageThemed';
import Description from './Description';

interface ProjectContentProps {
  content: Project;
}

export default function ProjectContent({ content }: ProjectContentProps) {
  const { images, links, description, toolsBages, features } = content;

  return (
    <div className="relative overflow-hidden rounded-xl bg-routine text-base font-normal text-foreground dark:bg-routine-foreground">
      <ThemedImageWithBlur image={images.hero} />
      <div className="flex flex-col gap-4 p-clamp-sm">
        <div className="flex flex-col items-start justify-between gap-4 lg:flex-row lg:gap-8">
          <Description description={description} />
          <Features features={features} />
        </div>
        <Bages tools={toolsBages} />
        <Links links={links} />
      </div>
    </div>
  );
}
