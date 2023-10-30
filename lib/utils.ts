import { twMerge } from 'tailwind-merge';
import { type ClassValue, clsx } from 'clsx';
import { SPECIAL_CHARACTERS, TRANSFORMATIONS_DEPTH } from '@/constants/constants';
import * as changeKeys from 'change-case/keys';

import db from './supabase/supabase';
import { Locale } from '@/types/PageVariants';
import Project from '@/types/Project';

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

export async function wait(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export function resolveLocale(currentLocale: string | string[]) {
  const resolvedLocale = Array.isArray(currentLocale)
    ? currentLocale[0]
    : currentLocale;
  return resolvedLocale as Locale;
}

export async function getLocalizedProjectData(locale: Locale) {
  const { data, error } = await db
    .from('projects')
    .select(`*, translations(*)`)
    .eq('translations.locale', locale);

  if (error) throw new Error(error.message);

  return data;
}

const camelizeKeys = (data: object[]) => {
  const camelised = data.map((project) => changeKeys.camelCase(project, TRANSFORMATIONS_DEPTH));

  return camelised;
};

export async function getAllProjectsWithLocale(locale: Locale) {
  const projectsData = await getLocalizedProjectData(locale);
  const projects = camelizeKeys(projectsData) as Project[];

  return projects;
}
