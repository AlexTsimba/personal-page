import Dictionary from '@/types/Dictionary';
import Image from 'next/image';
import memoji from '../../lotties/sticker.webp';
import Container from './Container';
import { Button } from './shadcn/button';

interface HelloProps {
  dict: Dictionary['hello'];
}

export default function Hello({ dict }: HelloProps) {
  console.log(dict);
  return (
    <Container className="flex h-screen flex-col items-start justify-start transition-all duration-300 ">
      <div className=" mt-28 flex w-full flex-col items-center justify-between rounded-2xl bg-foreground/10 px-4 lg:flex-row lg:px-10">
        <div className="flex flex-shrink flex-col pt-20">
          <div className="flex flex-col gap-4 ">
            <h1 className="flex flex-col items-start justify-between">
              <span className="text-xl">Hey! I&apos;m </span>
              <span className="text-6xl font-semibold text-yellow-400">
                Alex Tsimba
              </span>
            </h1>
            <p className="text-lg">
              A passionate web-developer,
              <br /> located in Kyiv, Ukraine
            </p>

            <div className="mt-10 flex gap-6 text-lg font-semibold">
              <Button
                variant="callToAction"
                className=" w-fit p-6 font-semibold"
              >
               Resume
              </Button>
              <Button
                variant="callToAction"
                className="w-fit p-6 font-semibold"
              >
                Say Hi!
              </Button>
            </div>
          </div>
        </div>
        <Image
          src={memoji}
          width={400}
          height={400}
          alt="guy"
          className="mb-0 self-center pt-20 lg:self-end poin"
        />
      </div>
      <div className="my-6 h-full w-full flex-grow rounded-xl bg-foreground/10 ">
        <Container className="flex h-full flex-col items-center justify-center gap-10">
          <h1 className="w-40 self-start text-2xl font-semibold"> About me</h1>
          <p className="text-left">
            I am a passionate and self-taught Full-Stack web-developer residing
            in Kyiv, Ukraine. I have dedicated myself to the exciting world of
            web development and have embarked on a journey of constant learning
            and growth. From a young age, I was fascinated by technology and its
            ability to shape the world around us. This curiosity led me to
            explore programming and web development, where I quickly discovered
            my knack for creating dynamic and user-friendly applications. As a
            web-developer, I possess a diverse skillset that allows me to handle
            both the frontend and backend aspects of web development.
          </p>
        </Container>
      </div>
    </Container>
  );
}
