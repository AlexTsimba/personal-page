import Container from './Container';
import Navigation from './Navigation';
import NavBar from './NavBar';
import PageControls from './PageControls';

export default function Header() {
  return (
    <header className="fixed top-0 w-full bg-background/90 shadow-xl backdrop-blur-sm">
      <Container className="flex h-[5rem] flex-row-reverse items-center justify-between lg:flex-row">
        <Navigation>
          <NavBar />
        </Navigation>
        <PageControls className="flex" />
      </Container>
    </header>
  );
}
