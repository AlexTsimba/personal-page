export const TG_BOT_ID = process.env.NEXT_PUBLIC_TG_BOT_ID;
export const TG_CHAT_ID = process.env.NEXT_PUBLIC_TG_CHAT_ID;
export const TG_URI_API = `https://api.telegram.org/bot${TG_BOT_ID}/sendMessage`;

export const SPECIAL_CHARACTERS = /[_[\]()~>`*#+-=|{}.!]/g;
export const NAME_CHARACTERS = /^[a-zA-Z\ЁёІіЇїЄєА-я\ʼ'-.\s]*$/

export const IMAGES_DEVICE_PREVIEWS = 'personal-page/device-previews/'
