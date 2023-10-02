import { motionControls } from '@/lib/motionControls';
import { motion } from 'framer-motion';

export default function MotionBubble() {
  return (
    <motion.span
      layoutId="navBarBubblePointer"
      className="absolute inset-0 z-10 bg-white mix-blend-exclusion"
      style={{ borderRadius: '12px' }}
      {...motionControls.navBarBubblePointer}
    />
  );
}
