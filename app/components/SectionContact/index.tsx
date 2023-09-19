import Dictionary from '@/types/Dictionary';
import Container from '@/app/components/Container';
import ContactForm from './ContactForm';

import Flipper from './Flipper';
import SubmitNotification from './SubmitNotification';

interface ContactProps {
  dict: Dictionary['contact'];
  formDict: Dictionary['contactForm'];
}

export default function Contact({ dict, formDict }: ContactProps) {
  return (
    <Container className="mt-10 flex h-fit items-center justify-between md:flex-row">
      <div className="my-20 flex h-fit w-full flex-col items-center justify-center md:w-2/3 lg:w-1/2">
        <Flipper
          FrontElement={<ContactForm dict={dict} />}
          BackElement={<SubmitNotification dict={formDict} />}
        />
      </div>
    </Container>
  );
}
