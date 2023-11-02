import { getLocalizedContactFormSchema } from '@/lib/getContactFormSchema';

type ContactFormSchema = Awaited<ReturnType<typeof getLocalizedContactFormSchema>>;

export default ContactFormSchema;
