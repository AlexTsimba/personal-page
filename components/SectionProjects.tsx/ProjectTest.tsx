'use client';

import React from 'react';
import HeroImage from './HeroImage';
import Project from '@/types/Project';

interface Props {
  heroImage: Project['heroImage'];
}

export default function ProjectTest({ heroImage }: Props) {
  return (
    <div className="overflow-hidden rounded-xl bg-routine text-base font-normal text-foreground">
      <HeroImage image={heroImage} />
      <div>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae
        doloribus reprehenderit omnis libero debitis harum quisquam eveniet
        labore, incidunt repellat nam corporis doloremque earum quia aperiam
        nihil quibusdam esse. Mollitia ullam, obcaecati beatae quae nulla est
        quod temporibus iste, maiores dignissimos fugiat rerum officiis vitae
        nam harum possimus eos reprehenderit?
      </div>
    </div>
  );
}
