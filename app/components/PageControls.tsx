import PageVariants from '@/types/PageVariants';
import LangSwitch from './LangSwitch';
import ThemeSwitch from './ThemeSwitch';
import classNames from 'classnames';

interface PageControlsProps {
  variants: PageVariants;
  isSidebarOpen: boolean;
}

export default function PageControls({
  variants,
  isSidebarOpen,
}: PageControlsProps) {
  const { themeVariants, langVariants } = variants;

  return (
    <div className="flex gap-4">
      <div className={classNames('md:block', { hidden: !isSidebarOpen })}>
        <ThemeSwitch variants={themeVariants} />
      </div>
      <LangSwitch variants={langVariants} />
    </div>
  );
}
