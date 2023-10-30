'use client';

import { shallow } from 'zustand/shallow';

import { useUiStore } from '@/store/store';

import Project from '@/types/Project';
import ProjectCard from './ProjectCard';
import Gallery from './Gallery';

interface ProjectsListProps {
  projects: Project[] | null;
}
export default function ProjectsList({ projects }: ProjectsListProps) {
  const { setGallery, gallery } = useUiStore(
    (state) => ({
      currentSection: state.currentSection,
      gallery: state.gallery,
      setGallery: state.setGallery,
    }),
    shallow
  );

  // const isActive = currentSection === 'projects';

  return (
    <div>
      {projects?.map((project, index) => {
        return (
          <ProjectCard
            project={project}
            onHover={setGallery}
            index={index}
            key={project.id}
          />
        );
      })}
      { <Gallery status={gallery} projects={projects} />}
    </div>
  );
}
