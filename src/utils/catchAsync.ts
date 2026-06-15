import { NextFunction, Request, Response } from "express";

export const catchAsync =
  <T extends Request>(
    handler: (req: T, res: Response, next: NextFunction) => Promise<void>,
  ) =>
  (req: T, res: Response, next: NextFunction): void => {
    handler(req, res, next).catch(next);
  };
