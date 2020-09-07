import { Router } from 'express';
import { UserController } from './controllers';

const routes = Router();

routes.post('/users', UserController.store);

export default routes;
