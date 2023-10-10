import classNames from 'classnames';
import Link from 'next/link';
import { ExternalLink } from 'react-feather';

interface ExternalLInkProps {
  title: string;
  href: string;
  className?: string;
}

export default function ExternalLInk({
  title,
  href,
  className,
  ...props
}: ExternalLInkProps) {
  return (
    <Link
      target="_blank"
      href={href}
      className={classNames(
        'text-clamp-md inline-flex items-center font-medium text-accent hover:underline',
        className
      )}
      {...props}
    >
      <span className="leading-none">{title}</span>
      <ExternalLink  className='pb-1' />
    </Link>
  );
}
