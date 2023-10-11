import supabase from '@/lib/supabase/supabase';
import Project from '@/types/Project';
import { PostgrestSingleResponse } from '@supabase/supabase-js';
import { NextResponse } from 'next/server';

export async function GET() {
  const response: PostgrestSingleResponse<Project[]> = await supabase
    .from('projects')
    .select();

  return NextResponse.json(response.data);
}
