import { motionControls } from '@/lib/motionControls';
import { m } from 'framer-motion';

export default function MotionBubble() {
  return (
    <m.span
      layoutId="navBarBubblePointer"
      className="absolute inset-0 z-10 bg-white mix-blend-exclusion"
      style={{ borderRadius: '12px' }}
      {...motionControls.navBarBubblePointer}
    />
  );
}
