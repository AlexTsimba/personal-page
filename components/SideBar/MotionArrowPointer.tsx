import { motionControls } from '@/lib/motionControls';
import { ChevronRight } from 'react-feather';
import { m } from 'framer-motion';

export default function MotionArrowPointer() {
  return (
    <m.span
    layoutId="sidebarArrowPointer"
    // do not rewrite on transform translate, it causes flickering on animate downwards
    className=" absolute left-[15px] top-[5px] z-0 h-5 w-5"
    {...motionControls.sideBarArrowPointer}
  >
    <ChevronRight className="h-10 w-10  text-foreground" />
  </m.span>
  )
}
