import { Request, Response } from "express";
import { GetLastTreeLastMessagesService } from "../service/GetLastTreeLastMessagesService";

class GetLastTreeLastMessagesController {
  async handle(req: Request, res: Response) {
    const service = new GetLastTreeLastMessagesService();

    const result = await service.execute();

    return res.json(result);
  }
}

export { GetLastTreeLastMessagesController }
