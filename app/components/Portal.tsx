import { useEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';

interface PortalProps {
  children: React.ReactNode;
}

export default function Portal({ children }: PortalProps) {
  const ref = useRef<Element | null>(null);
  const [mounted, setMounted] = useState<boolean>(false);

  useEffect(() => {
    ref.current = document.querySelector<HTMLElement>('#portal');
    setMounted(true);
  }, []);

  return mounted && ref.current ? createPortal(children, ref.current) : null;
}
