import Dictionary from '@/types/Dictionary';
import Container from '../Container';
import PageTitle from '../PageTitle';

interface SkillsProps {
  dict: Dictionary['skills'];
}

export default function skills({ dict }: SkillsProps) {
  return (
    <Container className="mt-10 flex h-fit flex-col items-center justify-between">
      <PageTitle title={dict.pageTitle} />

      <div className="relative my-0 flex w-full  flex-col items-center justify-between gap-20 rounded-xl py-[5vh] md:px-12 lg:flex-row lg:gap-10">
        <div className="absolute inset-0 z-[-1] hidden rounded-xl bg-routine-foreground shadow-xl md:block md:w-full lg:w-[85%]" />
      </div>
    </Container>
  );
}
