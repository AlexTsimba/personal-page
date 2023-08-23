import Dictionary from '@/types/Dictionary';

import Container from './Container';
import NavBar from './NavBar';
import Burger from './BurgerButton';
import ThemeSwitch from './ThemeSwitch';
import LangSwitch from './LangSwitch';

interface HeaderProps {
  dict: Pick<Dictionary, 'theme' | 'language' | 'navLinks'>;
}

export default function Header({ dict }: HeaderProps) {
  const themeOptions = [
    { value: 'light', title: dict.theme.lightMode },
    { value: 'dark', title: dict.theme.darkMode },
    { value: 'system', title: dict.theme.systemMode },
  ];

  const langOptions: { value: string; title: string }[] = [
    { value: 'en', title: dict.language.en },
    { value: 'ua', title: dict.language.ua },
  ];

  const navigationDict = dict.navLinks;

  return (
    <header className="fixed top-0 w-full bg-background/90 shadow-xl backdrop-blur-sm">
      <Container className="flex h-[5rem] flex-row items-center justify-between md:flex-row-reverse">
        <div className="flex gap-4">
          <ThemeSwitch options={themeOptions} />
          <LangSwitch options={langOptions} />
        </div>
        <NavBar navigationDict={navigationDict} />
        <Burger />
      </Container>
    </header>
  );
}
