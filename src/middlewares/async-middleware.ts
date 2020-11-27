import { Request, Response, NextFunction } from "express";

export const asyncMiddleware = (handler: Function) => {
  return async (req: Request, res: Response, next: NextFunction) => {
    try {
      await handler(req, res);
    } catch (e) {
      next(e);
    }
  };
};
