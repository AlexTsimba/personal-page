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
            <div className="flex flex-col items-start justify-between">
              <p className="text-xl font-medium">{dict.greeting} </p>
              <h1 className="text-3xl font-semibold text-accent2-foreground">
                {dict.name}
              </h1>
            </div>
            <div className="flex flex-col flex-nowrap gap-1 text-xl font-medium">
              <p>{dict.position}</p>
              <p> {dict.location} </p>
            </div>

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
