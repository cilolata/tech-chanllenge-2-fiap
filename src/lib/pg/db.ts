import dotenv from "dotenv";
import path from "path";
import { Pool, PoolClient } from "pg";

dotenv.config({
  path: path.resolve(__dirname, "..", ".env"),
});

// Validação das variáveis de ambiente
const requiredEnvVars = [
  "DATABASE_HOST",
  "DATABASE_PORT",
  "DATABASE_USER",
  "DATABASE_PASSWORD",
  "DATABASE_NAME",
];

for (const envVar of requiredEnvVars) {
  if (!process.env[envVar]) {
    throw new Error(`❌ Variável de ambiente ${envVar} não definida`);
  }
}

class DataBase {
  private pool: Pool;
  private client: PoolClient | undefined;

  constructor() {
    this.pool = new Pool({
      host: process.env.DATABASE_HOST,
      port: Number(process.env.DATABASE_PORT),
      user: process.env.DATABASE_USER,
      password: process.env.DATABASE_PASSWORD,
      database: process.env.DATABASE_NAME,
    });
    this.connection();
  }

  private async connection() {
    try {
      if (!this.client) {
        this.client = await this.pool.connect();
      }
      return this.client;
    } catch (error) {
      console.error("Error connecting to the database:", error);
      throw error;
    }
  }

  get clientInstance() {
    return this.client;
  }
}

export const database = new DataBase();
