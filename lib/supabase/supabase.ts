import Project from '@/types/Project';
import { PostgrestSingleResponse, createClient } from '@supabase/supabase-js';

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
);

export async function getProjects() {
  const { data }: PostgrestSingleResponse<Project[]> = await supabase
    .from('projects')
    .select();

  return data;
}

export default supabase;
