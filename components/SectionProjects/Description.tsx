interface DescriptionProps {
  title: string;
  text: string;
}

export default function Description({ title, text }: DescriptionProps) {
  return (
    <div className="flex h-min w-full flex-col gap-4 lg:w-1/2">
      <h4 className="text-clamp-lg font-semibold">{title}</h4>
      <div
        className="text-clamp-sm"
        dangerouslySetInnerHTML={{ __html: text }}
      />
    </div>
  );
}
