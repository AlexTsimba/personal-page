'use client';

import React from 'react';
import HeroImage from './HeroImage';
import Project from '@/types/Project';
import Link from 'next/link';

interface Props {
  heroImage: Project['heroImage'];
}

export default function ProjectContent({ heroImage }: Props) {
  return (
    <div className="relative overflow-hidden rounded-xl bg-routine text-base font-normal text-foreground">
      <HeroImage image={heroImage} />

      <div className="absolute right-0 top-0 flex">
        <Link
          href="#"
          className="rounded-none rounded-bl-xl rounded-tr-xl bg-foreground px-2 py-1 text-clamp-sm font-medium text-background after:content-['_↗'] hover:bg-accent"
        >
          live demo
        </Link>
      </div>

      <div className="p-clamp-sm">
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
