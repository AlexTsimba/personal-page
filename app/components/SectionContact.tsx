import Dictionary from '@/types/Dictionary';
import Container from './Container';

interface ContactProps {
  dict: Dictionary['contact'];
}

export default function Contact({ dict }: ContactProps) {
  return (
    <Container className="pt-10">
      <div className=" flex h-[80vh] w-full flex-col items-center justify-between rounded-xl bg-accent1-foreground pl-12 pt-6 shadow-xl md:flex-row md:pl-20 md:pt-0">
        {dict.pageTitle}
      </div>
    </Container>
  );
}