'use client';

import * as z from 'zod';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

import { Form } from '../shadcn/form';
import { Button } from '../shadcn/button';
import InputField from './InputField';
import TextareaField from './TextareaField';
import { User, Mail, Users, MessageCircle } from 'react-feather';

import Dictionary from '@/types/Dictionary';
import { useContactFormStore } from '@/store/store';
import { shallow } from 'zustand/shallow';
import classNames from 'classnames';

interface ContactFormProps {
  dict: Dictionary['contact'];
}

export default function ContactForm({ dict }: ContactFormProps) {
  const { isPending, setIsPending, setIsFlipped, setIsSuccess, isFlipped } =
    useContactFormStore(
      (state) => ({
        isFlipped: state.isFlipped,
        isPending: state.isPending,
        setIsPending: state.setIsPending,
        setIsFlipped: state.setIsFlipped,
        setIsSuccess: state.setIsSuccess,
      }),
      shallow
    );

  const contactFormSchema = z.object({
    name: z
      .string()
      .min(2, { message: dict.errorMessageToShort })
      .max(50)
      .nonempty(),
    email: z.string().email({ message: dict.errorInvalidEmail }),
    company: z.string().min(2, { message: dict.errorMessageToShort }).max(50),
    message: z.string().min(2, { message: dict.errorMessageToShort }).max(500),
  });

  const form = useForm<z.infer<typeof contactFormSchema>>({
    mode: 'onBlur',
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

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(sendToTelegram)}
        className={classNames(
          'flex h-full w-full flex-col gap-10  rounded-2xl bg-white px-6 md:px-10 py-14 shadow-md dark:bg-[#282828]',
          { 'pointer-events-none': isFlipped }
        )}
      >
        <InputField
          tabIndex={isFlipped ? -1 : 0}
          name="name"
          control={form.control}
          placeholder={dict.fieldName}
          PlaceholderIcon={User}
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

        <Button
          disabled={isPending || isFlipped}
          variant="secondary"
          type="submit"
          className="w-5/12 self-end transition-none"
        >
          {dict.submit}
        </Button>
      </form>
    </Form>
  );
}
