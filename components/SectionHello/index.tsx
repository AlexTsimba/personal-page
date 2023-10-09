import Dictionary from '@/types/Dictionary';

import Container from '../Container';
import { Button } from '../shadcn/button';
import Face from './Face';

interface HelloProps {
  dict: Dictionary['hello'];
}

export default function Hello({ dict }: HelloProps) {
  return (
    <Container className="pt-20">
      <div className="flex w-full flex-col items-center justify-around rounded-xl pt-6 md:flex-row md:pl-20">
        <div
    
          className="flex w-fit flex-col md:self-center"
        >
          <div className="flex flex-col">
            <div className="flex flex-col items-start justify-between">
              <p className="text-xl font-medium">{dict.greeting} </p>
              <h1 className="text-3xl font-semibold text-accent">
                {dict.name}
              </h1>
            </div>
            <div className="flex flex-col flex-nowrap gap-1 text-xl font-medium">
              <p>{dict.position}</p>
              <p> {dict.location} </p>
            </div>

            <div className="mt-6 flex gap-6 text-xl font-medium">
              <Button variant="secondary" size="lg" className="w-fit px-8">
                {dict.cvButtonTitle}
              </Button>
            </div>
          </div>
        </div>
          <Face />
      </div>
    </Container>
  );
}
