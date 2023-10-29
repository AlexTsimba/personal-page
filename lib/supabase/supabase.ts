import { PostgrestSingleResponse, createClient } from '@supabase/supabase-js';

import Project from '@/types/Project';
import { Locale } from '@/types/PageVariants';

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
);

export async function getAllProjects(locale: Locale) {
  let { data, error }: PostgrestSingleResponse<Project[]> = await supabase
    .from('projects')
    .select('title, images, toolsBages, description, links, features')
    .eq('locale', locale);

  if (error) {
    throw new Error(error.message);
  }

  return data;
}
