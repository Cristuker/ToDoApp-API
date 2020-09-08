import express from 'express';
import { UserController } from './controllers';

const routes = express();

routes.use(express.json());

routes.post('/users', UserController.store);

export default routes;
