import { useEffect } from 'react';

const useOnClickOutside = (
  ref: React.RefObject<HTMLDivElement> | React.RefObject<HTMLBaseElement>,
  handler: () => void
) => {
  useEffect(() => {
    const listener = (event: MouseEvent) => {
      const target = event.target as HTMLElement;

      const isButton = target.tagName === 'BUTTON' || target.closest('button');
      const hasIgnoreAttr = target.getAttribute(
        'data-ignore-clickOutside'
      )?.length;

      if (
        !isButton &&
        ref.current &&
        !ref.current.contains(target) &&
        // do not call handler, if clicked element marked with this data-atribute
        // TO-DO: find a better way to ignore click on radix dropdown-children
        !hasIgnoreAttr
      ) {
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
