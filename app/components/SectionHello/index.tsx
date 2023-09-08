import Dictionary from '@/types/Dictionary';
import { motion } from 'framer-motion';

import Container from '../Container';
import { Button } from '../shadcn/button';
import Face from './Face';
import { motionControls } from '@/lib/motionControls';

interface HelloProps {
  dict: Dictionary['hello'];
}

export default function Hello({ dict }: HelloProps) {
  return (
    <Container className="pt-20">
      <div className="flex w-full flex-col items-center justify-around rounded-xl  pt-6 md:flex-row md:py-20 md:pl-20">
        <motion.div
          {...motionControls.hello.greeting}
          className="flex w-fit flex-col md:self-center"
        >
          <div className="flex flex-col">
            <h1 className="flex flex-col items-start justify-between">
              <span className="text-xl font-medium">{dict.greeting} </span>
              <span className="text-3xl font-semibold text-accent2-foreground">
                {dict.name}
              </span>
            </h1>
            <p className="flex flex-col flex-nowrap gap-1 text-xl font-medium">
              <span>{dict.position}</span>
              <span> {dict.location} </span>
            </p>

            <div className="mt-6 flex gap-6 text-xl font-medium">
              <Button variant="callToAction" className=" w-fit  p-4">
                {dict.cvButtonTitle}
              </Button>
              <Button variant="callToAction" className="w-fit  p-4">
                {dict.contactButtonTitle}
              </Button>
            </div>
          </div>
        </motion.div>
        <motion.div {...motionControls.hello.image}>
          <Face />
        </motion.div>
      </div>
    </Container>
  );
}
