import { Request, Response } from "express";
import { AuthenticationUserService } from "../service/AuthenticationUserService";

class AuthenticationUserController {
  async handle(req: Request, res: Response) {
    const { code } = req.body;

    const service = new AuthenticationUserService();

    const result = await service.execute(code);

    return res.json(result);
  }
}

export { AuthenticationUserController }
