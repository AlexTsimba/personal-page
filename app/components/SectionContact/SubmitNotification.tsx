import { useState } from 'react';
import { useContactFormStore } from '@/store/store';
import { shallow } from 'zustand/shallow';

import { motion } from 'framer-motion';
import { motionControls } from '@/lib/motionControls';

import { Button } from '../shadcn/button';
import MessageStatusAnimation from './MessageStatusAnimation';
import Dictionary from '@/types/Dictionary';

interface SubmitNotificationProps {
  dict: Dictionary['contactForm'];
}

export default function SubmitNotification({ dict }: SubmitNotificationProps) {
  const [complete, setComplete] = useState<boolean>(false);

  const { setIsFlipped, isSucces, isPending, isFlipped } = useContactFormStore(
    (state) => ({
      isFlipped: state.isFlipped,
      setIsFlipped: state.setIsFlipped,
      isSucces: state.isSuccess,
      isPending: state.isPending,
    }),
    shallow
  );

  const onClick = () => {
    setIsFlipped(false);
    setComplete(false);
  };

  const headingText = dict[isSucces ? 'feedbackHeadingSuccess' : 'feedbackHeadingFailed'];
  const bodyText = dict[isSucces ? 'feedbackBodySuccess' : 'feedbackBodyFailed'];
  const buttonText = dict[isSucces ? 'feedbackButtonSuccess' : 'feedbackButtonFailed'];
  

  return (
    <div className="flex h-full w-full  flex-col items-center justify-center rounded-2xl bg-white p-6 dark:bg-accent1-foreground">
      <div className="h-1/3 w-full">
        {!isPending && isFlipped && (
          <div>
            {complete && (
              <>
                <motion.span
                  className="flex flex-col items-center justify-center gap-4"
                  {...motionControls.contact.submitNotification}
                >
                  <h2 className="text-2xl font-semibold">{headingText}</h2>
                  <p className="text-sm md:text-lg font-normal ">{bodyText}</p>
                </motion.span>
              </>
            )}

            <MessageStatusAnimation
              complete={complete}
              setComplete={setComplete}
              isSuccess={isSucces}
            />
          </div>
        )}
      </div>
      {complete && (
        <motion.div {...motionControls.contact.button}>
          <Button
            disabled={!isFlipped}
            className="w-full px-12 font-semibold"
            variant="secondary"
            type="button"
            onClick={onClick}
          >
            {buttonText}
          </Button>
        </motion.div>
      )}
    </div>
  );
}
