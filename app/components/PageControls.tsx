import { ThemeOption } from '@/types/ThemeOption';
import ThemeSwitch from './ThemeSwitch';
import { LangSwitch } from './LangSwitch';
import {  MoonIcon, SunIcon, WrenchScrewdriverIcon } from '@heroicons/react/24/solid';
import { useTranslations } from 'next-intl';


export default function PageControls() {
  const text = useTranslations('UI');
  const currentFlag = text('Flag');

  const themeOptions: ThemeOption[] = [
    {
      key: 'light',
      name: text('LightMode'),
      icon: <SunIcon className="mr-3 h-[1.2rem]" />,
    },
    {
      key: 'dark',
      name: text('DarkMode'),
      icon: <MoonIcon className="mr-3 h-[1.2rem]" />,
    },
    {
      key: 'system',
      name: text('SystemMode'),
      icon: <WrenchScrewdriverIcon className="mr-3 h-[1rem]" />,
    },
  ];

  return (
    <div className='hidden lg:flex gap-2 items-center'>
      <ThemeSwitch options={themeOptions} />
      <LangSwitch flag={currentFlag} />
    </div>
  );
}
