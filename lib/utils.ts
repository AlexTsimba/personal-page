import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';
import { SPECIAL_CHARACTERS } from '@/constants/constants';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function escapeSpecialCharacters(str: string) {
  return str.replace(SPECIAL_CHARACTERS, '\\$&');
}

export async function loadFeedbackAnimation(
  isSuccess: boolean,
  theme: string,
  setAnimation: (data: any) => void
) {
  const status = isSuccess ? 'success' : 'failed';
  const animationPath = `email-${status}-${theme}`;
  const animation = await import(`@/public/lotties/${animationPath}`);
  setAnimation(animation.default);
}

export function getImagePath(folder: string, name: string, theme?: string) {
  if (theme) {
    return `${folder}${name}-${theme}`;
  } else {
    return `${folder}${name}`;
  }
}
