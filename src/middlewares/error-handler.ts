import { Request, Response, NextFunction } from "express";
import { CustomError } from "../errors";
import { logger } from "../helpers/winston";

export const errorHandler = (
  error: CustomError,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  logger.error(error);
  res.json({
    status: "Error",
    statusCode: error.statusCode,
    message: error.message,
  });
};
