import passport from "passport";
import { Application, Request, Response } from "express";

export const authRoutes = (app: Application) => {
  // app.get(
  //   "/auth/google",
  //   passport.authenticate("google", {
  //     scope: ["profile", "email"],
  //   })
  // );

  // app.get(
  //   "/auth/google/callback",
  //   passport.authenticate("google"),
  //   (req: Request, res: Response) => {
  //     res.redirect("/");
  //   }
  // );

  app.get(
    "/auth/google",
    passport.authenticate("google", {
      scope: ["profile", "email"],
    })
  );

  app.get(
    "/auth/google/callback",
    passport.authenticate("google"),
    (req, res) => {
      res.redirect("/");
    }
  );

  // passport sees the code here and it knows that it has to use the code to get user
  // app.get("/auth/google/callback", passport.authenticate("google"));
  app.get("/auth/current_user", (req: Request, res: Response) => {
    res.send(req.user);
  });
  app.get("/auth/logout", (req: Request, res: Response) => {
    req.logout();
    res.json({ user: req.user });
  });
};
