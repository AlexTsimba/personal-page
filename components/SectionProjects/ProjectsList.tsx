'use client';

import { Accordion } from '@radix-ui/react-accordion';
import { shallow } from 'zustand/shallow';

import { useUiStore } from '@/store/store';
import Project from '@/types/Project';

import Gallery from './Gallery';
import ProjectCard from './ProjectCard';

interface ProjectsListProps {
  projects: Project[] | null;
}
export default function ProjectsList({ projects }: ProjectsListProps) {
  const { currentSection, gallery, setGallery } = useUiStore(
    (state) => ({
      currentSection: state.currentSection,
      gallery: state.gallery,
      setGallery: state.setGallery,
    }),
    shallow
  );

  const isActive = currentSection === 'projects';

  return (
    <Accordion type="single" collapsible className="w-full">
      {projects?.map((project, index) => {
        return (
          <ProjectCard
            project={project}
            onHover={setGallery}
            index={index}
            key={project.title}
          />
        );
      })}
      {isActive && <Gallery status={gallery} projects={projects} />}
    </Accordion>
  );
}
