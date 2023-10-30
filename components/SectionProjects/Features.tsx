interface FeaturesProps {
  title: string;
  list: string[];
}

export default function Features({ title, list }: FeaturesProps) {
  return (
    <div className="flex w-full flex-col gap-4 lg:w-fit">
      <h4 className="text-clamp-lg font-semibold">{title}</h4>
      <ul className="list-inside list-[square] text-clamp-sm">
        {list.map((feature) => {
          return (
            <li className="" key={feature}>
              {feature}
            </li>
          );
        })}
      </ul>
    </div>
  );
}
