// import classNames from 'classnames';
// import Link from 'next/link';
// import { ExternalLink } from 'react-feather';

// interface ExternalLInkProps {
//   title: string;
//   href: string;
//   className?: string;
// }

// export default function ExternalLInk({
//   title,
//   href,
//   className,
//   ...props
// }: ExternalLInkProps) {
//   return (
//     <Link
//       target="_blank"
//       href={href}
//       className={classNames(
//         'text-clamp-sm flex items-center justify-normal font-medium text-accent hover:underline',
//         className
//       )}
//       {...props}
//     >
//       <span className="leading-none">{title}</span>
//       <ExternalLink  className='pb-1' />
//     </Link>
//   );
// }
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
    <div className="inline-flex items-center justify-start gap-0.5 text-accent">
      <Link
        target="_blank"
        href={href}
        className={classNames(
          'text-md font-medium hover:underline leading-relaxed',
          className
        )}
        {...props}
      >
        {title}
      </Link>
      <ExternalLink className='pb-[2px]' size={16} />
    </div>
  );
}
