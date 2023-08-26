import Container from './Container';
import Navigation from './Navigation';
import Burger from './Burger';
import PageVariants from '@/types/PageVariants';

export default function Header() {
  const pageVariants: PageVariants = {
    themeVariants: [
      { value: 'light', title: 'lightMode' },
      { value: 'dark', title: 'darkMode' },
      { value: 'system', title: 'systemMode' },
    ],
    langVariants: [
      { value: 'en', title: 'en' },
      { value: 'ua', title: 'ua' },
    ],
  };

  return (
    <header className="fixed top-0 w-full bg-background/90 shadow-xl backdrop-blur-sm">
      <Container className=" flex h-[5rem] flex-row items-center justify-between md:flex-row-reverse">
        <Navigation pageVariants={pageVariants} />
        <Burger />
      </Container>
    </header>
  );
}
