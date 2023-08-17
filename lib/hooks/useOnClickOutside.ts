import { useEffect } from 'react';

const useOnClickOutside = (
  ref: React.RefObject<HTMLDivElement> | React.RefObject<HTMLBaseElement>,
  handler: () => void
) => {
  useEffect(() => {
    const listener = (event: MouseEvent) => {
      const target = event.target as HTMLElement;

      const isButton = target.tagName === 'BUTTON' || target.closest('button');

      if (!isButton && ref.current && !ref.current.contains(target)) {
        handler();
      }
    };

    document.addEventListener('mousedown', listener);
    return () => {
      document.removeEventListener('mousedown', listener);
    };
  }, [ref, handler]);
};

export default useOnClickOutside;
