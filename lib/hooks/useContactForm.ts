import { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { getLocalizedContactFormSchema } from '../getContactFormSchema';

import { Locale } from '@/types/PageVariants';
import ContactFormSchema from '@/types/ContactFormSchema'

export function useLocalizedContactForm(locale: Locale) {
  const [contactFormSchema, setContactFormSchema] = useState<ContactFormSchema>();

  useEffect(() => {
    const setSchema = async () => {
      const schema = await getLocalizedContactFormSchema(locale);
      setContactFormSchema(schema);
    };

    setSchema();
  }, [locale]);

  const form = useForm({
    mode: 'onTouched',
    resolver: contactFormSchema ? zodResolver(contactFormSchema) : undefined,
    defaultValues: { name: '', email: '', company: '', message: '' },
  });

  return { form };
}
