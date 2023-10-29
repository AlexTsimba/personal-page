import Dictionary from '@/types/Dictionary';
import { getLocale } from 'next-intl/server';
import { Locale } from '@/types/PageVariants';

import Container from '../Container';
import ProjectsList from './ProjectsList';
import PageTitle from '../PageTitle';
import Quote from './Quote';
import ExternalLInk from '../ExternalLInk';
import { getAllProjects } from '@/lib/supabase/supabase';

interface ProjectsProps {
  dict: Dictionary['projects'];
}

export default async function Projects({ dict }: ProjectsProps) {
  const locale = getLocale() as Locale;
  const projects = await getAllProjects(locale);

  return (
    <Container className="flex flex-col items-center justify-center">
      <PageTitle title={dict.pageTitle} />
      <div className="flex w-full flex-col items-center justify-center gap-16 rounded-xl px-clamp">
        <Quote title={dict.quoteTitle} author={dict.quoteAuthor} />

        <ProjectsList projects={projects} />

        <div className="self-end">
          <span className="text-clamp-md after:content-['_']">
            {dict.invitation}
          </span>
          <ExternalLInk href="https://github.com/" title={dict.ghProfile} />
        </div>
      </div>
    </Container>
  );
}
