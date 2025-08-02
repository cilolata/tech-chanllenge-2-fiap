import 'dotenv/config'
import { DataSource } from "typeorm";
import { createClient } from "@supabase/supabase-js";


const supabaseUrl = process.env.SUPABASE_URL as string;
const supabaseKey = process.env.SUPABASE_KEY as string;
const database = createClient(supabaseUrl, supabaseKey);

export const appDataSource = new DataSource({
  type: "postgres",
  url:  process.env.SUPABASE_URL,
  port: parseInt(process.env.DB_PORT || "5432"),
  synchronize: false,
  ssl: true,
  logging: true,
  poolSize: 15,
  extra: {
    options: "-c timezone=UTC",
    ssl: {
      rejectUnauthorized: false,
    },
    connectionTimeoutMillis: 5000,
    idleTimeoutMillis: 30000,
  },
  entities : [ "dist/entities/*entity{.ts,.js}" ],
  migrations : [ "dist/lib/migrations/*{.ts,.js}" ]
});

appDataSource
  .initialize()
  .then(() => {
    console.log("Database with typeorm connected");
    return appDataSource.runMigrations();
  })
  .catch((err) => console.error(`Database with typeorm erro: ${err}`));
