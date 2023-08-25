import { motionControls } from '@/lib/motionControls';
import { ChevronRightIcon } from '@heroicons/react/24/solid';
import { motion } from 'framer-motion';

export default function MotionArrowPointer() {
  return (
    <motion.span
    layoutId="sidebarArrowPointer"
    // do not rewrite on transform translate, it causes flickering on animate downwards
    className=" absolute left-[15px] top-[5px] z-0 h-5 w-5"
    {...motionControls.sidebarArrowPointer}
  >
    <ChevronRightIcon className="h-10 w-10  text-foreground" />
  </motion.span>
  )
}
