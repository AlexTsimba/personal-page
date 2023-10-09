import Dictionary from '@/types/Dictionary';

import Container from './Container';
import Navigation from './Navigation';
import Burger from './Burger';

interface HeaderProps {
  dict: Pick<Dictionary, 'theme' | 'language' | 'navLinks'>;
}

export default function Header({ dict }: HeaderProps) {
  return (
    <header className="fixed top-0 z-10 w-full bg-background/70 backdrop-blur-lg">
      <Container className=" flex flex-row items-center justify-between py-2 md:flex-row-reverse">
        <Navigation dict={dict} />
        <Burger />
      </Container>
    </header>
  );
}
