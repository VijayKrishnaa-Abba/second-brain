import { Router } from "express";

const contentRouter = Router();

contentRouter
  .route("/contnets")
  .post((req, res) => {
    res.send("Add new Content");
  })
  .get((req, res) => {
    res.send("Get all contents");
  })
  .delete((req, res) => {
    res.send("delete a content ");
  });

contentRouter.route("/contnets/share").post((req, res) => {
  res.send("Create a shareable link");
});

contentRouter.route("/contnets/:sharedLink").get((req, res) => {
  res.send(`Fetch another user's ${req.params.sharedLink}`);
});

export default contentRouter;
