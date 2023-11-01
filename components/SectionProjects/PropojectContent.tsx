/* eslint-disable @typescript-eslint/naming-convention */
'use client';

import Links from './Links';
import Bages from './Badges';
import Features from './Features';
import ThemedImageWithBlur from '../ImageThemed';
import Description from './Description';
import Project from '@/types/Project';
import { Button } from '../shadcn/button';
import Dictionary from '@/types/Dictionary';

interface ProjectContentProps {
  project: Project;
  onClose: () => void;
  dict: Dictionary['projects']['project'];
}

export default function ProjectContent({
  project,
  onClose,
  dict,
}: ProjectContentProps) {
  const { linksTitle, featuresTitle, descriptionTitle, close, toolBoxTitle } = dict;
  const { heroImage, toolsBadges, links, translations } = project;
  const { descriptionText, featuresList } = translations[0];

  return (
    <div className="relative overflow-hidden rounded-xl bg-routine text-base font-normal text-foreground dark:bg-routine-foreground ">
      <ThemedImageWithBlur image={heroImage} />
      <div className="flex flex-col gap-4 px-clamp-xs py-4">
        <div className="flex flex-col items-start justify-between gap-4 lg:flex-row lg:gap-8">
          <Description title={descriptionTitle} text={descriptionText} />
          <Features title={featuresTitle} list={featuresList} />
        </div>
        <Bages title={toolBoxTitle} list={toolsBadges} />
        <div className="flex justify-between">
          <Links title={linksTitle} list={links} />
          <Button
            variant="secondary"
            size="sm"
            className="self-end"
            onClick={() => onClose()}
          >
            {close}
          </Button>
        </div>
      </div>
    </div>
  );
}
