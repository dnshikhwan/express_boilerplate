import { NextFunction, Request, Response } from "express";
import { logger } from "../helpers/log.helper";

export const requestLogger = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { method, url } = req;
  const start = Date.now();

  res.on("finish", () => {
    const { statusCode } = res;
    const durationMs = Date.now() - start;

    if (statusCode && statusCode < 400) {
      logger.info(`${method} [${statusCode}] : ${url} (${durationMs}ms)`);
    }

    if (statusCode && statusCode >= 400 && statusCode <= 499) {
      logger.error(`${method} [${statusCode}] : ${url} (${durationMs}ms)`);
    }
  });
  next();
};
