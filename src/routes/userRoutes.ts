const requireLogin = require("../middlewares/requireLogin");

import { Application, Request, Response } from "express";

export const authRoutes = (app: Application) => {
  //with passing "google" passport knows that it will use GoogleStrategy
  app.get("/users", (req, res) => {
    res.send(users);
  });

  app.get("/admins", requireLogin, (req, res) => {
    res.send(admins);
  });
};
