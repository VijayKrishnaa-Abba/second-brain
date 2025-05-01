import express, { Router } from "express";
import jwt from "jsonwebtoken";
import mongoose from "mongoose";

import router from "./v1/main";

const app = express();

app.use(express.json());

app.use("/api/v1/", router);

app.listen(3000, () => {
  console.log(`App running at ${3000}`);
});
