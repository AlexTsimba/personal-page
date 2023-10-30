import Project from '@/types/Project';

import ProjectContent from './PropojectContent';

interface ProjectDetailsProps {
  index: number;
  project: Project;
  onHover: ({ active, index }: { active: boolean; index: number }) => void;
}

export default function ProjectCard({
  project,
  onHover,
  index,
}: ProjectDetailsProps) {
  const { title } = project.translations[0];

  return (
    <div>
      <div
        className="block w-full cursor-pointer px-clamp py-8 text-start"
        onMouseEnter={() => { onHover({ active: true, index }) }}
        onMouseLeave={() => { onHover({ active: false, index }) }}
      >
        <h3
          id={title}
          className="text-clamp-lg transition-transform duration-300 group-hover:-translate-x-6 group-hover:text-accent group-data-[state=open]:text-accent md:group-data-[state=open]:-translate-x-6"
        >
          {title}
        </h3>
      </div>
      <ProjectContent project={project} />
    </div>
  );
}
