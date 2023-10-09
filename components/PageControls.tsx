import LangSwitch from './LangSwitch';
import ThemeSwitch from './ThemeSwitch';
import classNames from 'classnames';
import { THEMES, LANGS } from '@/constants/constants';
import Dictionary from '@/types/Dictionary';

interface PageControlsProps {
  dict: Pick<Dictionary, 'theme' | 'language'>;
  isSidebarOpen: boolean;
}

export default function PageControls({
  isSidebarOpen,
  dict,
}: PageControlsProps) {
  const { lightMode, darkMode, systemMode } = dict.theme;
  const { en, uk } = dict.language;

  const themeVariants = [
    { value: THEMES.light, title: lightMode },
    { value: THEMES.dark, title: darkMode },
    { value: THEMES.system, title: systemMode },
  ];

  const langVariants = [
    { value: LANGS.english, title: en },
    { value: LANGS.ukrainian, title: uk },
  ];

  return (
    <div className="flex gap-4">
      <div
        className={classNames('hidden md:block', { hidden: !isSidebarOpen })}
      >
        <ThemeSwitch variants={themeVariants} />
      </div>
      <LangSwitch variants={langVariants} />
    </div>
  );
}
