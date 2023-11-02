import classNames from 'classnames';

import Dictionary from '@/types/Dictionary';
import { THEMES, LANGS } from '@/lib/constants/constants';

import ThemeSwitch from './ThemeSwitch';
import LangSwitch from './LangSwitch';

interface PageControlsProps {
  dict: Dictionary['header']['language'] & Dictionary['header']['theme'];
  isSidebarOpen: boolean;
}

export default function PageControls({
  isSidebarOpen,
  dict,
}: PageControlsProps) {
  const { lightMode, darkMode, systemMode } = dict;
  const { en, uk } = dict;

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
