'use client';

import * as z from 'zod';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

import { Form } from '../shadcn/form';
import { Button } from '../shadcn/button';
import InputField from './InputField';
import TextareaField from './TextareaField';

import Dictionary from '@/types/Dictionary';
import { useContactFormStore } from '@/store/store';
import { shallow } from 'zustand/shallow';

import classNames from 'classnames';
import { User, Mail, Users, MessageCircle } from 'react-feather';
import { NAME_CHARACTERS } from '@/constants/constants';

interface ContactFormProps {
  dict: Dictionary['contact'];
}

export default function ContactForm({ dict }: ContactFormProps) {
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

  const contactFormSchema = z.object({
    name: z
      .string()
      .trim()
      .nonempty({ message: dict.errorMessageisRequired })
      .min(2, { message: dict.errorMessageToShort })
      .max(50, { message: dict.errorMessageToLong50 })
      .refine((value) => NAME_CHARACTERS.test(value), {
        message: dict.errorSpecialCharacters,
      }),

    email: z
      .string()
      .trim()
      .nonempty({ message: dict.errorMessageisRequired })
      .email({ message: dict.errorInvalidEmail }),
    company: z
      .string()
      .trim()
      .nonempty({ message: dict.errorMessageisRequired })
      .min(2, { message: dict.errorMessageToShort })
      .max(50, { message: dict.errorMessageToLong50 }),
    message: z
      .string()
      .trim()
      .nonempty({ message: dict.errorMessageisRequired })
      .min(2, { message: dict.errorMessageToShort })
      .max(500, { message: dict.errorMessageToLong500 }),
  });

  const form = useForm<z.infer<typeof contactFormSchema>>({
    mode: 'onTouched',
    resolver: zodResolver(contactFormSchema),
    defaultValues: { name: '', email: '', company: '', message: '' },
  });

  async function sendToTelegram(formData: z.infer<typeof contactFormSchema>) {
    setIsPending(true);
    setIsFlipped(true);

    const response = await fetch('api/contact', {
      method: 'POST',
      body: JSON.stringify(formData),
    });

    if (response.ok) {
      form.reset();
      setIsSuccess(true);
    } else {
      setIsSuccess(false);
    }

    setIsPending(false);
  }

  const isAllFieldsValid = form.formState.isValid;
  const isFormDirty = form.formState.isDirty;

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
            disabled={isFormDirty && isAllFieldsValid}
            variant="link"
            type="reset"
            onClick={() => form.reset()}
          >
            {dict.clear}
          </Button>

          <Button
            disabled={isFormDirty && !isAllFieldsValid}
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
