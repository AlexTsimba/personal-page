'use client';

import { useContactFormStore } from '@/store/store';
import classNames from 'classnames';
import { shallow } from 'zustand/shallow';
import Card from './Card';

interface FlipCardProps {
  FrontElement: React.JSX.Element;
  BackElement: React.JSX.Element;
}

export default function Flipper({ FrontElement, BackElement }: FlipCardProps) {
  const { isFlipped } = useContactFormStore(
    (state) => ({ isFlipped: state.isFlipped }),
    shallow
  );

  return (
    <div className="h-full w-full perspective-1000">
      <div
        className={classNames(
          'relative h-full w-full transition-transform duration-1000 transform-style-preserve-3d',
          { 'rotate-y-180': isFlipped }
        )}
      >
        <Card className="backface-visability-hidden">{FrontElement}</Card>

        <Card
          className={classNames(
            'absolute inset-0 rounded-2xl rotate-y-180 backface-visability-hidden'
          )}
        >
          {BackElement}
        </Card>
      </div>
    </div>
  );
}
