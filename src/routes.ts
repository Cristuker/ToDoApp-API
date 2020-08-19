import { Router } from 'express';
import { UserController } from './controllers';

const routes = Router();

routes.post('/user', UserController.store);

export default routes;
