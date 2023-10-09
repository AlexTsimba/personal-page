import Lenis from '@studio-freight/lenis';
import MotionBubble from './MotionBubble';
import { Button } from '../shadcn/button';

interface NavItemProps {
  href: string;
  title: string;
  isActive: boolean;
  scroller: Lenis;
}

export default function NavItem({
  href,
  title,
  isActive,
  scroller,
}: NavItemProps) {
  const handleScrollTo = (anchor: string) => {
    scroller.scrollTo(anchor);
  };

  return (
    <Button
      variant="sideBarItem"
      size="navBarItem"
      key={href}
      onClick={() => handleScrollTo(href)}
      className="relative w-full"
      style={{ WebkitTapHighlightColor: 'transparent' }}
    >
      {isActive && <MotionBubble />}

      {title}
    </Button>
  );
}
