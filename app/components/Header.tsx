import Container from './Container';
import Navigation from './Navigation';
import NavBar from './NavBar';
import PageControls from './PageControls';

export default function Header() {
  return (
    <header className="fixed top-0 w-full bg-background/90 shadow-xl backdrop-blur-sm">
      <Container className="flex h-[4rem] items-center justify-between">
        <h1>{'<AT/>'}</h1>
        <Navigation>
          <NavBar />
        </Navigation>
        <PageControls />
      </Container>
    </header>
  );
}
