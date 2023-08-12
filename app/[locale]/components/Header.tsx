

import { useTranslations } from 'next-intl';
import { Cog8ToothIcon, MoonIcon, SunIcon } from '@heroicons/react/24/solid';
import { ThemeOption } from '@/types/ThemeOptions';

import ThemeSwitch from './ui/ThemeSwitch';
import { LangSwitch } from './ui/LangSwitch';

export default function Header() {
  const text = useTranslations('UI');
  const currentFlag = text('Flag');

  const themeOptions: ThemeOption[] = [
    {
      key: 'light',
      name: text('LightMode'),
      icon: <SunIcon className="h-[1.1rem] mr-3" />,
    },
    {
      key: 'dark',
      name: text('DarkMode'),
      icon: <MoonIcon className="h-[1.1rem] mr-3" />,
    },
    {
      key: 'system',
      name: text('SystemMode'),
      icon: <Cog8ToothIcon className="h-[1.1rem] mr-3" />,
    },
  ];

  return (
    <header className="m-2 flex justify-center gap-2">
      <ThemeSwitch options={themeOptions} />
      <LangSwitch flag={currentFlag} />
    </header>
  );
}
