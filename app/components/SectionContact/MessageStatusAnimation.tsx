import React, { useEffect, useRef, useState } from 'react';
import Lottie, { LottieRefCurrentProps } from 'lottie-react';
import { useTheme } from 'next-themes';

import { loadMessageAnimation } from '@/lib/utils';

interface ResultProps {
  complete: boolean;
  isSuccess: boolean;
  setComplete: (value: boolean) => void;
}
export default function MessageStatusAnimation({
  complete,
  setComplete,
  isSuccess,
}: ResultProps) {
  const theme = useTheme().resolvedTheme || 'system';
  const [animationData, setAnimationData] = useState();
  const lottieRef = useRef<LottieRefCurrentProps | null>(null);

  const onAnimationComplete = () => {
    lottieRef.current?.destroy();
    setComplete(true);
  };

  useEffect(() => {
    loadMessageAnimation(isSuccess, theme, setAnimationData);
  }, [isSuccess, theme]);

  console.log('anim loaded');

  return (
    <div className="flex h-36 items-center justify-center">
      {!complete && (
        <Lottie
          lottieRef={lottieRef}
          animationData={animationData}
          autoplay={true}
          loop={false}
          onComplete={onAnimationComplete}
        />
      )}
    </div>
  );
}
