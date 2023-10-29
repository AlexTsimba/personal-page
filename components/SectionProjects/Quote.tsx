interface QuoteHeadingProps {
  title: string;
  author: string;
}

export default function Quote({ title, author }: QuoteHeadingProps) {
  return (
    <blockquote className="flex flex-col items-start gap-2 self-start border-l-2 border-foreground/50 pl-4 font-medium">
      <p
        className={`text-clamp-lg font-bold text-accent before:content-['"'] after:content-['"']`}
      >
        {title}
      </p>
      <cite className="font-semibold text-foreground/70 before:content-['—_']">
        {author}
      </cite>
    </blockquote>
  );
}
