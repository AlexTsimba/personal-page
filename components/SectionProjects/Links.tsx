import Project from '@/types/Project';
import ExternalLInk from '../ExternalLInk';

interface LinksProps {
  links: Project['links'];
}

export default function Links({ links }: LinksProps) {
  const { title, list } = links;
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
