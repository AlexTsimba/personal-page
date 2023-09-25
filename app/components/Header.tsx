import Dictionary from '@/types/Dictionary';

import Container from './Container';
import Navigation from './Navigation';
import Burger from './Burger';
import PageVariants from '@/types/PageVariants';

interface HeaderProps {
  dict: Pick<Dictionary, 'theme' | 'language' | 'navLinks'>;
}

export default function Header({ dict }: HeaderProps) {
  const navigationDict = dict.navLinks;

  const pageVariants: PageVariants = {
    themeVariants: [
      { value: 'light', title: dict.theme.lightMode },
      { value: 'dark', title: dict.theme.darkMode },
      { value: 'system', title: dict.theme.systemMode },
    ],
    langVariants: [
      { value: 'en', title: dict.language.en },
      { value: 'ua', title: dict.language.ua },
    ],
  };

  return (
    <header className="fixed top-0 w-full bg-background/70 backdrop-blur-lg z-10">
      <Container className=" flex flex-row items-center justify-between py-2 md:flex-row-reverse">
        <Navigation
          navigationDict={navigationDict}
          pageVariants={pageVariants}
        />
        <Burger />
      </Container>
    </header>
  );
}
