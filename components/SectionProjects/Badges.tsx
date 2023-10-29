import Project from '@/types/Project';
import ImageWithBlur from '../Image';

interface BagesProps {
  tools: Project['toolsBages'];
}

export default function Badges({ tools }: BagesProps) {
  const { title, list } = tools;

  return (
    <>
      <h4 className="text-clamp-lg font-semibold">{title}</h4>
      <ul className="flex flex-wrap gap-2">
        {list.map((tool) => (
          <li key={tool.alt}>
            <ImageWithBlur image={tool} type="badge" />
          </li>
        ))}
      </ul>
    </>
  );
}
