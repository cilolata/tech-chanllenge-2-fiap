import { Posts } from "@/entities/post.entity";
import { Users } from "@/entities/user.entity";
import dotenv from "dotenv";
import path from "path";
import { DataSource } from "typeorm";
import { User1753563965669 } from "./migrations/1753563965669-User";
import { Posts1753563996921 } from "./migrations/1753563996921-Posts";

dotenv.config({
  path: path.resolve(__dirname, "..", ".env"),
});

export const appDataSource = new DataSource({
  type: "postgres",
  host: process.env.DATABASE_HOST,
  port: Number(process.env.DATABASE_PORT),
  username: process.env.DATABASE_USER,
  password: process.env.DATABASE_PASSWORD,
  database: process.env.DATABASE_NAME,
  entities: [Users, Posts],
  logging: process.env.NODE_ENV === "development",
  extra: {
    options: "-c timezone=UTC",
  },
  migrations: [
    User1753563965669,
    Posts1753563996921
],
});

appDataSource
  .initialize()
  .then(() => {
    console.log("Database with typeorm connected");
  })
  .catch((err) => console.error(`Database with typeorm erro: ${err}`));
