import { getAllProjects } from '@/lib/supabase/supabase';
import Dictionary from '@/types/Dictionary';

import Container from '../Container';
import ProjectsList from './ProjectsList';
import PageTitle from '../PageTitle';
import QuoteHeading from './QuoteHeading';
import ExternalLInk from '../ExternalLInk';

interface ProjectsProps {
  dict: Dictionary['projects'];
}

export default async function Projects({ dict }: ProjectsProps) {
  const projects = await getAllProjects();

  return (
    <Container className="flex flex-col items-center justify-center">
      <PageTitle title={dict.pageTitle} />
      <div className="flex w-full flex-col items-center justify-center gap-16 rounded-xl px-clamp">
        <QuoteHeading title={dict.quoteTitle} author={dict.quoteAuthor} />

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
