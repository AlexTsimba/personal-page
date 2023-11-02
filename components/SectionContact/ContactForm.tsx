'use client';

import * as z from 'zod';
import { useParams } from 'next/navigation';
import { useContactFormStore } from '@/store/store';
import { useLocalizedContactForm } from '@/lib/hooks/useContactForm';

import classNames from 'classnames';
import { shallow } from 'zustand/shallow';
import { resolveLocale } from '@/lib/utils';

import Dictionary from '@/types/Dictionary';
import ContactFormSchema from '@/types/ContactFormSchema';

import { User, Mail, Users, MessageCircle } from 'react-feather';
import { Form } from '../shadcn/form';
import { Button } from '../shadcn/button';
import InputField from './InputField';
import TextareaField from './TextareaField';

interface ContactFormProps {
  dict: Dictionary['contact']['form'];
}

export default function ContactForm({ dict }: ContactFormProps) {
  const params = useParams();
  const locale = resolveLocale(params.locale);

  const { form } = useLocalizedContactForm(locale);
  const { isValid, isDirty } = form.formState;

  const { setIsPending, setIsFlipped, setIsSuccess, isFlipped } =
    useContactFormStore(
      (state) => ({
        isFlipped: state.isFlipped,
        setIsPending: state.setIsPending,
        setIsFlipped: state.setIsFlipped,
        setIsSuccess: state.setIsSuccess,
      }),
      shallow
    );

  async function sendToTelegram(formData: z.infer<ContactFormSchema>) {
    setIsPending(true);
    setIsFlipped(true);

    const response = await fetch('api/contact', {
      method: 'POST',
      body: JSON.stringify(formData),
    });

    const success = response.ok;

    setIsSuccess(success);
    if (success) form.reset();

    setIsPending(false);
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(sendToTelegram)}
        className={classNames(
          'flex h-full w-full flex-col gap-10 rounded-2xl bg-routine px-6 py-14 shadow-md  md:px-10',
          { 'pointer-events-none': isFlipped }
        )}
      >
        <InputField
          name="name"
          control={form.control}
          placeholder={dict.fieldName}
          PlaceholderIcon={User}
          tabIndex={isFlipped ? -1 : 0}
        />

        <InputField
          name="company"
          control={form.control}
          placeholder={dict.fieldCompany}
          PlaceholderIcon={Users}
          tabIndex={isFlipped ? -1 : 0}
        />

        <InputField
          name="email"
          control={form.control}
          placeholder={dict.fieldEmail}
          PlaceholderIcon={Mail}
          tabIndex={isFlipped ? -1 : 0}
        />

        <TextareaField
          name="message"
          control={form.control}
          placeholder={dict.fieldMessage}
          PlaceholderIcon={MessageCircle}
          tabIndex={isFlipped ? -1 : 0}
        />

        <div className="flex w-full items-baseline justify-end gap-4">
          <Button
            disabled={isDirty && isValid}
            variant="link"
            type="reset"
            onClick={() => form.reset()}
          >
            {dict.clear}
          </Button>

          <Button
            disabled={isDirty && !isValid}
            variant="secondary"
            type="submit"
            className="w-1/2"
          >
            {dict.submit}
          </Button>
        </div>
      </form>
    </Form>
  );
}
