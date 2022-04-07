import { NextFunction, Request, Response } from "express";
import { verify } from "jsonwebtoken";

interface IPayload {
  sub: string;
}

export async function ensureAuthenticatedCustomer(
  request: Request,
  response: Response,
  next: NextFunction
) {
  const authHeader = request.headers.authorization;

  if (!authHeader) {
    return response.status(401).json({
      message: "Customer token not provided",
    });
  }

  const [, token] = authHeader.split(" ");

  try {
    const { sub } = verify(
      token,
      "cd363b111009eaef1b3ce79dbc8fb12b"
    ) as IPayload;

    request.id_customer = sub;

    return next();
  } catch (error) {
    return response.status(401).json({
      message: "Customer token is invalid or expired",
    });
  }
}
