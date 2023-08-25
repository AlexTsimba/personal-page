import Link from 'next/link';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from './shadcn/tooltip';

interface SocialLinkProps {
  href: string;
  title: string;
  children: React.ReactNode;
}

export default function SocialLink({ children, href, title }: SocialLinkProps) {
  return (
    <TooltipProvider delayDuration={200}>
      <Tooltip>
        <TooltipTrigger asChild>
          <Link
            className="rounded-lg p-2 transition-transform duration-200 hover:scale-125"
            target="_blank"
            href={href}
          >
            {children}
          </Link>
        </TooltipTrigger>
        <TooltipContent className="mb-4">
          <span>{title}</span>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}
