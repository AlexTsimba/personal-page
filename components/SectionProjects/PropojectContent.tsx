/* eslint-disable @typescript-eslint/naming-convention */
'use client';

import Links from './Links';
import Bages from './Badges';
import Features from './Features';
import ThemedImageWithBlur from '../ImageThemed';
import Description from './Description';
import Project from '@/types/Project';

interface ProjectContentProps {
  project: Project;
}

export default function ProjectContent({ project }: ProjectContentProps) {
  const { heroImage, toolsBadges, links, translations } = project;
  const {
    linksTitle,
    descriptionTitle,
    descriptionText,
    toolsBadgesTitle,
    featuresTitle,
    featuresList,
  } = translations[0];

  return (
    <div className="relative overflow-hidden rounded-xl bg-routine text-base font-normal text-foreground dark:bg-routine-foreground">
      <ThemedImageWithBlur image={heroImage} />
      <div className="flex flex-col gap-4 p-clamp-sm">
        <div className="flex flex-col items-start justify-between gap-4 lg:flex-row lg:gap-8">
          <Description title={descriptionTitle} text={descriptionText} />
          <Features title={featuresTitle} list={featuresList} />
        </div>
        <Bages title={toolsBadgesTitle} list={toolsBadges} />
        <Links title={linksTitle} list={links} />
      </div>
    </div>
  );
}
