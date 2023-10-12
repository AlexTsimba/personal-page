import {getRequestConfig} from 'next-intl/server';

export const locales = ['en', 'uk']
 
export default getRequestConfig(async ({locale}) => ({
  messages: (await import(`./dictionary/${locale}.json`)).default
}));