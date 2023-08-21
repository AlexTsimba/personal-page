import Container from './Container';
import NavBar from './NavBar';
import PageControls from './PageControls';
import Burger from './BurgerButton';

interface HeaderProps {
  scroller: LocomotiveScroll;
}

export default function Header({ scroller }: HeaderProps) {
  return (
    <header className="fixed top-0 z-10 w-full bg-background/90 shadow-xl backdrop-blur-sm">
      <Container className="flex h-[5rem] flex-row-reverse items-center justify-between lg:flex-row">
        <NavBar scroller={scroller} />
        <Burger />
        <PageControls className="flex" />
      </Container>
    </header>
  );
}
