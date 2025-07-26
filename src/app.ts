import "reflect-metadata";
import "dotenv/config";
import "@/lib/typeorm/typeorm"

import express from "express";
import { router } from "./routes/routes";

const app = express();

app.use(express.json());

app.use(router);

app.listen(3000, () => "server running on port 3000");
