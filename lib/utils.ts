import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';
import { SPECIAL_CHARACTERS } from '@/constants/constants';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function escapeSpecialCharacters(str: string) {
  return str.replace(SPECIAL_CHARACTERS, '\\$&');
}
