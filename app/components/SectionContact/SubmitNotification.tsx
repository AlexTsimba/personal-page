import { useState } from 'react';
import { useContactFormStore } from '@/store/store';
import { shallow } from 'zustand/shallow';

import { motion } from 'framer-motion';
import { motionControls } from '@/lib/motionControls';

import { Button } from '../shadcn/button';
import Dictionary from '@/types/Dictionary';
import dynamic from 'next/dynamic';

interface SubmitNotificationProps {
  dict: Dictionary['contactFormFeedback'];
}

export default function SubmitNotification({ dict }: SubmitNotificationProps) {
  const [animationComplete, setAnimationComplete] = useState<boolean>(false);

  const { setIsFlipped, isSucces, isPending, isFlipped } = useContactFormStore(
    (state) => ({
      isFlipped: state.isFlipped,
      setIsFlipped: state.setIsFlipped,
      isSucces: state.isSuccess,
      isPending: state.isPending,
    }),
    shallow
  );

  const DynamicMessageStatusAnimation = dynamic(
    () => import('./MessageStatusAnimation'),
    {
      ssr: false,
      // loading: () => <Skeleton className="m-auto h-full w-full rounded-xl" />,
    }
  );

  const onFlipBack = () => {
    setIsFlipped(false);
    setAnimationComplete(false);
  };

  const headingText = dict[isSucces ? 'titleSuccess' : 'titleFailed'];
  const bodyText = dict[isSucces ? 'bodySuccess' : 'bodyFailed'];
  const buttonText = dict[isSucces ? 'buttonSuccess' : 'buttonFailed'];

  return (
    <div className="flex h-full w-full  flex-col items-center justify-center rounded-2xl bg-white p-6 shadow-md dark:bg-accent1-foreground">
      {isFlipped && (
        <div>
          <div className="h-1/3 w-full">
            {!isPending && (
              <DynamicMessageStatusAnimation
                complete={animationComplete}
                setComplete={setAnimationComplete}
                isSuccess={isSucces}
              />
            )}
          </div>
          {animationComplete && (
            <motion.div
              className="flex flex-col items-center justify-center gap-20"
              {...motionControls.contact.submitNotification}
            >
              <div className="flex flex-col items-center justify-center gap-4">
                <h2 className="text-2xl font-semibold">{headingText}</h2>
                <p className="text-sm font-normal md:text-lg ">{bodyText}</p>
              </div>

              <Button
                disabled={!isFlipped}
                className="w-full px-12 font-semibold"
                variant="secondary"
                type="button"
                onClick={onFlipBack}
              >
                {buttonText}
              </Button>
            </motion.div>
          )}
        </div>
      )}
    </div>
  );
}
