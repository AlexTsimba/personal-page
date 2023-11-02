import { z } from 'zod';

import { getDictionary } from '@/dictionary/dictionary';
import { Locale } from '@/types/PageVariants';
import { NAME_CHARACTERS } from '@/lib/constants/constants';

export const getLocalizedContactFormSchema = async (locale: Locale) => {
  const { zodErrors } = await getDictionary(locale);

  const schema = z.object({
    name: z
      .string()
      .trim()
      .nonempty({ message: zodErrors.required })
      .min(2, { message: zodErrors.tooShort })
      .max(50, { message: zodErrors.tooLong50 })
      .refine((value) => NAME_CHARACTERS.test(value), {
        message: zodErrors.specialCharacters,
      }),

    email: z
      .string()
      .trim()
      .nonempty({ message: zodErrors.required })
      .email({ message: zodErrors.invalidEmail }),
    company: z
      .string()
      .trim()
      .nonempty({ message: zodErrors.required })
      .min(2, { message: zodErrors.tooShort })
      .max(50, { message: zodErrors.tooLong50 }),
    message: z
      .string()
      .trim()
      .nonempty({ message: zodErrors.required })
      .min(2, { message: zodErrors.tooShort })
      .max(500, { message: zodErrors.tooLong500 }),
  });

  return schema;
};
