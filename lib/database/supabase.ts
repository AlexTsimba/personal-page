import { createClient } from '@supabase/supabase-js';
import { DatabaseSchema } from '@/types/DatabaseSchema';

const db = createClient<DatabaseSchema>(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
);

export default db;