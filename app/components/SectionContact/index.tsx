import Dictionary from '@/types/Dictionary';
import Container from '../Container';
import ContactForm from './ContactForm';

interface ContactProps {
  dict: Dictionary['contact'];
}

export default function Contact({ dict }: ContactProps) {
  console.log(dict.pageTitle);
  return (
    <Container className="pt-10">
      <div className=" flex h-[80vh] w-full items-center justify-between pt-6 md:flex-row md:pl-20 md:pt-0">
        <ContactForm dict={dict}/>
      </div>
    </Container>
  );
}
