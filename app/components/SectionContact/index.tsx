import Dictionary from '@/types/Dictionary';
import Container from '@/app/components/Container';
import ContactForm from './ContactForm';
import Flipper from './Flipper';

import SubmitNotification from './SubmitNotification';
import Details from './Details';
import { ChevronRight } from 'react-feather';

interface ContactProps {
  dict: Pick<Dictionary, 'contact' | 'contactDetails' | 'contactFormFeedback'>;
}

export default function Contact({ dict }: ContactProps) {
  return (
    <Container className="mt-10 flex h-fit flex-col items-center justify-between">
      <h2 className="flex items-center gap-2 self-start py-0 text-4xl  font-bold text-foreground md:py-10">
        <ChevronRight className="text-accent" size={36} strokeWidth="3px" />
        <span>{dict.contact.pageTitle}</span>
      </h2>

      <div className="relative my-0 flex w-full  flex-col items-center justify-between gap-20 rounded-xl py-[5vh] md:my-[5vh] md:px-12 lg:flex-row lg:gap-10">
        <div className="absolute inset-0 z-[-1] hidden rounded-xl bg-routine-foreground shadow-xl md:block md:w-full lg:w-[85%]" />
        <div className="mx-auto w-full">
          <Details dict={dict.contactDetails} />
        </div>

        <div className="max-w[40rem]  mx-auto w-full min-w-[25rem]">
          <Flipper
            FrontElement={<ContactForm dict={dict.contact} />}
            BackElement={<SubmitNotification dict={dict.contactFormFeedback} />}
          />
        </div>
      </div>
    </Container>
  );
}
