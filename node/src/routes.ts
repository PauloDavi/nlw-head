import { Router } from 'express';
import { AuthenticationUserController } from './controller/AuthenticationUserController';
import { CreateMessageController } from './controller/CreateMessageController';
import { GetLastTreeLastMessagesController } from './controller/GetLastTreeLastMessagesController';
import { ProfileUserController } from './controller/ProfileUserController';
import { ensureAuthenticated } from './middleware/ensureAuthenticated';

const router = Router();

router.post("/authenticate", new AuthenticationUserController().handle);

router.get("/messages/lats3", new GetLastTreeLastMessagesController().handle);
router.post("/messages", ensureAuthenticated, new CreateMessageController().handle);

router.get("/profile", ensureAuthenticated, new ProfileUserController().handle);

export { router }
