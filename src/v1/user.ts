import { Router } from "express";

const userRouter = Router();

userRouter.post("/signup", (req, res) => {
  res.send("signup");
});

userRouter.post("/signin", (req, res) => {
  res.send("signin");
});

export default userRouter;
