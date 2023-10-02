import React from 'react';
import { ChevronRight } from 'react-feather';

interface PageTitleProps {
  title: string;
}

export default function PageTitle({ title }: PageTitleProps) {
  return (
    <h2 className="flex items-center gap-2 self-start py-0 text-4xl  font-bold text-foreground md:py-10">
      <ChevronRight className="text-accent" size={36} strokeWidth="3px" />
      <span>{title}</span>
    </h2>
  );
}
