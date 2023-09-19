import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';
import { SPECIAL_CHARACTERS } from '@/constants/constants';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function escapeSpecialCharacters(str: string) {
  return str.replace(SPECIAL_CHARACTERS, '\\$&');
}

export async function loadMessageAnimation(
  isSuccess: boolean,
  theme: string,
  setAnimation: (data: any) => void,
) {
  const status = isSuccess ? 'success' : 'failed';
  const animationPath = `email-${status}-${theme}`;
  const animation = await import(`@/public/lotties/${animationPath}`);
  setAnimation(animation.default);
}
