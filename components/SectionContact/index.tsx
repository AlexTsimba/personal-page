import Dictionary from '@/types/Dictionary';
import Container from '@/components/Container';
import ContactForm from './ContactForm';
import Flipper from './Flipper';

import SubmitNotification from './SubmitNotification';
import Details from './Details';
import PageTitle from '../PageTitle';

interface ContactProps {
  dict: Pick<Dictionary, 'contact' | 'contactDetails' | 'contactFormFeedback'>;
}

export default function Contact({ dict }: ContactProps) {
  return (
    <Container className="mt-10 flex h-fit flex-col items-center justify-between">
      <PageTitle title={dict.contact.pageTitle} />

      <div className="relative my-0 flex w-full  flex-col items-center justify-between gap-20 rounded-xl py-[5vh] md:my-[5vh] md:px-12 lg:flex-row lg:gap-10">
        <div className="absolute inset-0 z-[-1] hidden rounded-xl bg-routine-foreground shadow-xl md:block md:w-full lg:w-[90%]" />
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
