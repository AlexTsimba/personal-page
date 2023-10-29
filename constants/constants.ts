import { Locales, Themes } from '@/types/PageVariants';

export const TG_BOT_ID = process.env.NEXT_PUBLIC_TG_BOT_ID;
export const TG_CHAT_ID = process.env.NEXT_PUBLIC_TG_CHAT_ID;
export const TG_URI_API = `https://api.telegram.org/bot${TG_BOT_ID}/sendMessage`;

export const SPECIAL_CHARACTERS = /[_[\]()~>`*#+-=|{}.!]/g;
export const NAME_CHARACTERS = /^[a-zA-Z\ЁёІіЇїЄєА-я\ʼ'-.\s]*$/;

export const BLURHASH_RESOLUTION_SMALL = { x: 32, y: 32 };
export const BLURHASH_RESOLUTION_LARGE = { x: 64, y: 64 };
export const BLURHASH_DEFAULT_BLUR = 'LBRMb$oz?bt7xaj]ayf6_Nj?9FWC';
export const BLURHASH_PUNCH = 1;

export const LANGS: Locales = { english: 'en', ukrainian: 'uk' };
export const THEMES: Themes = { dark: 'dark', light: 'light', system: 'system' };

