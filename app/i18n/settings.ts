export const fallbackLng = 'en'
export const languages = [fallbackLng, 'ua']
export const defaultNS = 'translation'

export const locales = [fallbackLng, 'ua']
export const fallbackLocale = 'en'

export function getOptions (lng = fallbackLng, ns = defaultNS) {
  return {
    // debug: true,
    supportedLngs: languages,
    fallbackLng,
    lng,
    fallbackNS: defaultNS,
    defaultNS,
    ns
  }
}