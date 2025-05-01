import { Router } from "express";
import { userModel } from "./db/schemas/user";
import "dotenv/config";
import { ResponseStatus } from "./a";
import { error } from "console";

console.log(process.env);

const userRouter = Router();

userRouter.post("/signup", async (req, res) => {
  const { email, password, username } = req.body;
  try {
    const data = await userModel.create(req.body);
    res.send(`${email}, ${password}, ${username}: \n ${data}`);
  } catch (error) {
    res.status(ResponseStatus.Forbidden).send(error);
  }
});

userRouter.post("/signin", async (req, res) => {
  try {
    const data = await userModel.findOne(req.body);
    console.log(data);
    if (data === null) {
      throw new Error("user not exist");
    }
    res.status(ResponseStatus.Success).send(`redirecting to home page ${data}`);
  } catch (error) {
    res.status(ResponseStatus.Forbidden).send(error);
  }
});

export default userRouter;
