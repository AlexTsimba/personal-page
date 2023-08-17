import { useTranslations } from 'next-intl';

import { ThemeOption } from '@/types/ThemeOption';
import { LangSwitch } from './LangSwitch';
import ThemeSwitch from './ThemeSwitch';
import classNames from 'classnames';

interface PageControlsProps {
  className?: string;
}

export default function PageControls({ className = '' }: PageControlsProps) {
  const text = useTranslations('UI');

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
    <div className={classNames('gap-5', className)}>
      <ThemeSwitch options={themeOptions} />
      <LangSwitch options={langOptions} />
    </div>
  );
}
