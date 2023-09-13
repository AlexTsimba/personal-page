'use client';

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';

import { Button } from '@/components/ui/button';
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
import { TG_URI_API, chatId } from '@/constants/constants';

const contactFormSchema = z.object({
  name: z.string().min(2, { message: 'sho ti golova' }).max(50),
  email: z.string().email(),
  company: z.string().max(50).optional(),
  message: z.string().min(2).max(500),
});

export default function ContactForm() {
  const form = useForm<z.infer<typeof contactFormSchema>>({
    mode: 'onBlur',
    resolver: zodResolver(contactFormSchema),
    defaultValues: { name: '', email: '', company: '', message: '' },
  });

  async function sendToTelegram(values: z.infer<typeof contactFormSchema>) {
    const { name, company, message } = values;
    const text = `new feedback: \n \n *sender name*: ${name} \n *from*: ${company} \n *message*: ${message}`;

    const response = await fetch(TG_URI_API, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ chat_id: chatId, parse_mode: 'MarkdownV2', text }),
    });

    if (response.ok) {
      form.reset();
    } else {
      console.log(response.status);
    }
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(sendToTelegram)}
        className="w-full space-y-8"
      >
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input placeholder="Your name" {...field} />
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
                <Input placeholder="Your e-mail" {...field} />
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
                <Input placeholder="Company" {...field} />
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
                  placeholder="Write your message here..."
                  className="resize-none"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button type="submit">Submit</Button>
      </form>
    </Form>
  );
}
