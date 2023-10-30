import Project from '@/types/Project';
import ExternalLInk from '../ExternalLInk';

interface LinksProps {
  title: string;
  list: Project['links'];
}

export default function Links({ title, list }: LinksProps) {
  return (
    <>
      <h4 className="text-clamp-lg font-semibold">{title}</h4>
      <ul className=" flex flex-col text-clamp-sm md:flex-row md:gap-2">
        {list.map((link) => (
          <li key={link.href}>
            <ExternalLInk title={link.title} href={link.href} />
          </li>
        ))}
      </ul>
    </>
  );
}
