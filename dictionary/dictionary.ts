import Dictionary from '@/types/Dictionary';

const dictionaries: Record<string, () => Promise<Dictionary>> = {
  en: () => import('./en.json').then((module) => module.default),
  ua: () => import('./ua.json').then((module) => module.default),
};

export const getDictionary = async (locale: string) => dictionaries[locale]();
