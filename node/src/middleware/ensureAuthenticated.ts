import { NextFunction, Request, Response } from "express";
import { verify } from "jsonwebtoken";
import { AppError } from "../erros/AppError";

export function ensureAuthenticated(req: Request, res: Response, next: NextFunction) {
  const authToken = req.headers.authorization;

  if(!authToken) {
    throw new AppError("Token invalid", 401);
  }

  const [, token] = authToken.split(" ");

  try {
    const { sub } = verify(token, process.env.JWT_SECRET);

    req.user_id = sub as string;

    return next();
  } catch(err) {
    return res.status(401).json({ error: "Token expired" });
  }
}
