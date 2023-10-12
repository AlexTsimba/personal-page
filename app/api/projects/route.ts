import { NextResponse } from 'next/server';
import supabase from '@/lib/supabase/supabase';
import { PostgrestSingleResponse } from '@supabase/supabase-js';

import Project from '@/types/Project';

export const revalidate = 3600;

export async function GET() {
  const response: PostgrestSingleResponse<Project[]> = await supabase
    .from('projects')
    .select();

  const { data } = response;

  return NextResponse.json(data);
}
