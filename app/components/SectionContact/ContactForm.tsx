'use client';

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';

import { User, Mail, Users, MessageCircle } from 'react-feather';

import {
  Form,
  FormControl,
  // FormDescription,
  FormField,
  FormItem,
  // FormLabel,
  FormMessage,
} from '../shadcn/form';
import { Input } from '../shadcn/input';
import { Textarea } from '../shadcn/textarea';
import { useState } from 'react';
import { Button } from '../shadcn/button';
import Dictionary from '@/types/Dictionary';

interface ContactFormProps {
  dict: Dictionary['contact'];
}

export default function ContactForm({ dict }: ContactFormProps) {
  const [isLoading, setIsloading] = useState<boolean>(false);

  const contactFormSchema = z.object({
    name: z.string().min(2, { message: dict.errorMessageToShort }).max(50).nonempty(),
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
    setIsloading(true);

    const response = await fetch('api/contact', {
      method: 'POST',
      body: JSON.stringify(formData),
    });

    if (response.ok) {
      form.reset();
    }
    setIsloading(false);
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(sendToTelegram)}
        className=" flex w-full flex-col gap-10  rounded-2xl bg-white px-10 py-14 shadow-xl dark:bg-black lg:w-2/5"
      >
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input PlaceholderIcon={User} placeholder={dict.fieldName} {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="company"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input
                  PlaceholderIcon={Users}
                  placeholder={dict.fieldCompany}
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input PlaceholderIcon={Mail} placeholder={dict.fieldEmail} {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Textarea
                  PlaceholderIcon={MessageCircle}
                  placeholder={dict.fieldMessage}
                  className="resize-none"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button
          disabled={isLoading}
          type="submit"
          className=" w-1/2 text-base font-medium text-background hover:bg-accent2-foreground"
        >
          {dict.submit}
        </Button>
      </form>
    </Form>
  );
}
