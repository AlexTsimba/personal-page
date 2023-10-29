import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';
import { SPECIAL_CHARACTERS } from '@/constants/constants';
import Project from '@/types/Project';
import { Locale } from '@/types/PageVariants';

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

export function getImageURL(folder: string, name: string, theme?: string) {
  if (theme) {
    return `${folder}${name}-${theme}`;
  } else {
    return `${folder}${name}`;
  }
}

export async function fetchProjects() {
  const response = await fetch('api/projects', {
    method: 'GET',
    // cache: 'force-cache',
  });
  if (response.ok) {
    const data: Project[] = await response.json();
    return data;
  }
}

export async function wait(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export function resolveLocale(currentLocale: string | string[]) {
  const resolvedLocale = Array.isArray(currentLocale)
    ? currentLocale[0]
    : currentLocale;
  return resolvedLocale as Locale;
}
