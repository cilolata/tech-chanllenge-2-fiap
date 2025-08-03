import "reflect-metadata";
import "dotenv/config";
import "./lib/typeorm/typeorm"

import express from "express";
import { router } from "./routes/routes";
import { handleError } from "./middlewares/errorHandlers";

const app = express();

app.use(express.json());

app.use(router);
app.use(handleError)

export default app
