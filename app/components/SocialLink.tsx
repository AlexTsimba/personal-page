import classNames from 'classnames';
import Link from 'next/link';

interface SocialProfilesProps {
  href: string;
  title: string;
  children: React.ReactNode;
}

export default function SocialProfiles({
  children,
  href,
}: SocialProfilesProps) {
  return (
    <Link
      className={classNames(
        'rounded-lg p-2 transition-transform duration-200 hover:scale-125 ',
        'ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-foreground focus-visible:ring-offset-2'
      )}
      target="_blank"
      href={href}
    >
      {children}
    </Link>
  );
}