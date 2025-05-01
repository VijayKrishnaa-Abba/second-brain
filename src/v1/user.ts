import { Router } from "express";
import { userModel } from "./db/schemas/user";

const userRouter = Router();

userRouter.post("/signup", (req, res) => {
  const { email, password, username } = req.body;

  const details = userModel.create(req.body);
  console.log(`${email}, ${password}, ${username}: ${details}`);

  res.send(`${email}, ${password}, ${username}: ${details}`);
});

userRouter.post("/signin", (req, res) => {
  res.send("signin");
});

export default userRouter;
