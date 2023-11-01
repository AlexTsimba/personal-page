import Project from '@/types/Project';
import ExternalLInk from '../ExternalLInk';

interface LinksProps {
  title: string;
  list: Project['links'];
}

export default function Links({ title, list }: LinksProps) {
  return (
    <div className="flex flex-col gap-4">
      <h4 className="text-clamp-lg font-semibold">{title}</h4>
      <ul className=" flex flex-col gap-2 text-clamp-sm md:flex-row">
        {list.map((link) => (
          <li key={link.title}>
            <ExternalLInk title={link.title} href={link.href} />
          </li>
        ))}
      </ul>
    </div>
  );
}
