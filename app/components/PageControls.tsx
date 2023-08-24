import PageVariants from '@/types/PageVariants';
import LangSwitch from './LangSwitch';
import ThemeSwitch from './ThemeSwitch';

interface PageControlsProps {
  variants: PageVariants;
}

export default function PageControls({ variants }: PageControlsProps) {
  const { themeVariants, langVariants } = variants;

  return (
    <div  className="flex gap-4">
      <ThemeSwitch options={themeVariants} />
      <LangSwitch options={langVariants} />
    </div>
  );
}