import { useState } from 'react';

const projects = [
  {
    title: 'Todo App',
    coverImage: {
      src: 'todo',
      backgroundColor: '#000000',
      alt: 'a computer screen with app interface',
      blurHash: 'L9J%a_af4Ts:ibozkWR54Toz?^RP',
    },
    heroImage: {
      src: 'todos',
      blurHash: {
        light: 'LCG*7~ay00niMdt7ozMx00oz?^RP',
        dark: 'L9J%a_af4Ts:ibozkWR54Toz?^RP',
      },
      alt: 'a computer, tablet, and phone all displaying an app on the screen',
    },
  },
  {
    title: 'Personal Page',
    coverImage: {
      src: 'page',
      backgroundColor: '#8C8C8C',
      alt: 'a computer screen with app interface',
      blurHash: 'L9J%a_af4Ts:ibozkWR54Toz?^RP',
    },
    heroImage: {
      src: 'page',
      blurHash: {
        light: 'L7Lg^bj]00xtoea~M{V?00t7_NNG',
        dark: 'LRHeqPj[~qofj[WBxuxu-;ayIUj[',
      },
      alt: 'a computer, tablet, and phone all displaying an app on the screen',
    },
  },
  {
    title: 'Bose Landing Page',
    coverImage: {
      src: 'bose',
      backgroundColor: '#EFE8D3',
      alt: 'a computer screen with app interface',
      blurHash: 'L9J%a_af4Ts:ibozkWR54Toz?^RP',
    },
    heroImage: {
      src: 'bose',
      blurHash: {
        light: 'TAJt-[-:00-qt7IV00NG_MbWRjxb',
        dark: 'TEFFgY-:00ofxuM{00Rk~qxuRjf8',
      },
      alt: 'a computer, tablet, and phone all displaying an app on the screen',
    },
  },
  {
    title: 'Under Construction',
    coverImage: {
      src: 'placeholder',
      backgroundColor: '#706D63',
      alt: 'a computer screen with app interface',
      blurHash: 'L9J%a_af4Ts:ibozkWR54Toz?^RP',
    },
    heroImage: {
      src: 'personal',
      blurHash: {
        light: 'L7Lg^bj]00xtoea~M{V?00t7_NNG',
        dark: 'LRHeqPj[~qofj[WBxuxu-;ayIUj[',
      },
      alt: 'a computer, tablet, and phone all displaying an app on the screen',
    },
  },
];

import Container from '../Container';
import PageTitle from '../PageTitle';
import Dictionary from '@/types/Dictionary';
import Gallery from './Gallery';
import { Accordion } from '@/components/shadcn/accordion';
import ProjectDetails from './ProjectDetails';
import Link from 'next/link';
import Lenis from '@studio-freight/lenis';
import { useLenis } from '@studio-freight/react-lenis';

interface ProjectsProps {
  dict: Dictionary['projects'];
}

export default function Projects({ dict }: ProjectsProps) {
  const [illustration, setIllustration] = useState({ active: false, index: 0 });
  const [isActive, setIsActive] = useState<boolean>(false); // to-do: use currentSection from uiStore (after scrolltrigger fix)
  const scroller: Lenis = useLenis();

  return (
    <Container
      className="flex flex-col items-center justify-center"
      onMouseLeave={() => setIsActive(false)}
    >
      <PageTitle title={dict.pageTitle} />
      <div
        className="flex w-full flex-col items-center justify-center gap-16 rounded-xl px-clamp"
        onMouseEnter={() => setIsActive(true)}
      >
        <blockquote className="flex flex-col items-start gap-2 self-start border-l-2 border-foreground/50 px-6 font-medium">
          <p
            className={`text-clamp-xl font-bold text-accent before:content-['"'] after:content-['"']`}
          >
            {dict.titleQuote}
          </p>
          <cite className="font-semibold text-foreground/70 before:content-['—_']">
            {dict.quoteAuthor}
          </cite>
        </blockquote>

        <Accordion type="single" collapsible className="w-full">
          {projects.map((project, index) => {
            return (
              <ProjectDetails
                key={project.title}
                index={index}
                project={project}
                onHover={setIllustration}
                scroller={scroller}
              />
            );
          })}
          {isActive && <Gallery status={illustration} projects={projects} />}
        </Accordion>

        <div className="self-end">
          <span>{dict.invitation}</span>
          <Link
            target="_blank"
            href="https://github.com/"
            className='left-0 top-0 z-[-1]  text-lg font-medium  text-accent after:absolute after:text-accent after:content-["_↗"] hover:underline hover:after:text-foreground'
          >
            {dict.ghProfile}
          </Link>
        </div>
      </div>
    </Container>
  );
}
