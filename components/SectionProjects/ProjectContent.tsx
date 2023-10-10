'use client';

import React from 'react';
import HeroImage from './HeroImage';
import Project from '@/types/Project';
import ExternalLInk from '../ExternalLInk';
import classNames from 'classnames';

interface ProjectContentProps {
  content: Project;
}

export default function ProjectContent({ content }: ProjectContentProps) {
  const { demo, heroImage } = content;
  return (
    <div className="relative overflow-hidden rounded-xl bg-routine text-base font-normal text-foreground">
      <HeroImage image={heroImage} />

      {demo && (
        <ExternalLInk
          href={demo}
          title="live demo"
          className={classNames(
            'absolute right-0 top-0',
            'rounded-bl-xl bg-foreground px-2 py-1 hover:bg-accent',
            ' text-background'
          )}
        />
      )}

      <div className="p-clamp-sm">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae
        doloribus reprehenderit omnis libero debitis harum quisquam eveniet
        labore, incidunt repellat nam corporis doloremque earum quia aperiam
        nihil quibusdam esse. Mollitia ullam, obcaecati beatae quae nulla est
        quod temporibus iste, maiores dignissimos fugiat rerum officiis vitae
        nam harum possimus eos reprehenderit?s
      </div>
    </div>
  );
}
