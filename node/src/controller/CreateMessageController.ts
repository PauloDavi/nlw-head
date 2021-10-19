import { Request, Response } from "express";
import { CreateMessageService } from "../service/CreateMessageService";

class CreateMessageController {
  async handle(req: Request, res: Response) {
    const { user_id } = req;
    const { message } = req.body;

    const service = new CreateMessageService();

    const result = await service.execute({ text: message, user_id });

    return res.json(result);
  }
}

export { CreateMessageController }
