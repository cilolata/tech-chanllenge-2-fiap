import dotenv from "dotenv";
import { createClient } from "@supabase/supabase-js";

// Validação das variáveis de ambiente
const requiredEnvVars = ["SUPABASE_URL", "SUPABASE_KEY"];

for (const envVar of requiredEnvVars) {
  if (!process.env[envVar]) {
    throw new Error(`❌ Variável de ambiente ${envVar} não definida`);
  }
}

const supabaseUrl = process.env.SUPABASE_URL as string;
const supabaseKey = process.env.SUPABASE_KEY as string;
export const database = createClient(supabaseUrl, supabaseKey);
