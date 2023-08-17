import { useTranslations } from 'next-intl';

import { ThemeOption } from '@/types/ThemeOption';
import { LangSwitch } from './LangSwitch';
import ThemeSwitch from './ThemeSwitch';

export default function PageControls() {
  const text = useTranslations('UI');
  const currentFlag = text('Flag');

  const themeOptions: ThemeOption[] = [
    { value: 'light', title: text('LightMode') },
    { value: 'dark', title: text('DarkMode') },
    { value: 'system', title: text('SystemMode') },
  ];

  const langOptions = [
    { value: 'en', title: text('EnLang') },
    { value: 'ua', title: text('UaLang') },
  ];

  return (
    <div className="hidden items-center gap-2 lg:flex">
      <ThemeSwitch options={themeOptions} />
      <LangSwitch flag={currentFlag} options={langOptions} />
    </div>
  );
}
