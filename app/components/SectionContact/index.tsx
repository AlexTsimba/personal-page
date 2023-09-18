import Dictionary from '@/types/Dictionary';
import Container from '@/app/components/Container';
import ContactForm from './ContactForm';

import FlipCard from './FlipCard';
import FormBack from './FormBack';

interface ContactProps {
  dict: Dictionary['contact'];
}

export default function Contact({ dict }: ContactProps) {
  return (
    <Container className="mt-10 flex h-fit items-center justify-between md:flex-row">
      <div className="my-20 flex h-fit w-full flex-col items-center justify-center md:w-2/3 lg:w-1/2">
        <FlipCard
          FrontElement={<ContactForm dict={dict} />}
          BackElement={<FormBack />}
        />
      </div>
    </Container>
  );
}
