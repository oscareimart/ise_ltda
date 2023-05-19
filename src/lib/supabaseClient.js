import { createClient } from "@supabase/supabase-js"
import { env_values } from "@/settings/env"

export const supabase = createClient(env_values.API_URL, env_values.ANON_KEY)
