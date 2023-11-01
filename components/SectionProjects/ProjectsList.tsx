'use client';

import { shallow } from 'zustand/shallow';

import { useUiStore } from '@/store/store';

import Project from '@/types/Project';
import ProjectCard from './ProjectCard';
import Gallery from './Gallery';
import Dictionary from '@/types/Dictionary';

interface ProjectsListProps {
  projects: Project[];
  dict: Dictionary['projects']['project'];
}
export default function ProjectsList({ projects, dict }: ProjectsListProps) {
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
    <div className="w-full">
      {projects.map((project, index) => {
        return (
          <ProjectCard
            dict={dict}
            project={project}
            onHover={setGallery}
            index={index}
            key={project.id}
          />
        );
      })}
      {<Gallery status={gallery} projects={projects} />}
    </div>
  );
}
