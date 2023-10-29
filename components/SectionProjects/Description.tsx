import Project from '@/types/Project';

interface DescriptionProps {
  description: Project['description'];
}

export default function Description({ description }: DescriptionProps) {
  const { title, text } = description;
  return (
    <div className="flex h-min w-full flex-col lg:w-1/2 gap-4">
      <h4 className="text-clamp-lg font-semibold">{title}</h4>
      <div
        className="text-clamp-sm"
        dangerouslySetInnerHTML={{ __html: text }}
      />
    </div>
  );
}
