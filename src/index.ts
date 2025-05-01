import express, { Router } from "express";
import jwt from "jsonwebtoken";
import mongoose from "mongoose";

import userRouter from "./v1/user";
import contentRouter from "./v1/contents";

const app = express();

app.use(express.json());

app.use("/api/v1/", userRouter);
app.use("/api/v1/", contentRouter);

app.listen(3000, () => {
  console.log(`App running at ${3000}`);
});
