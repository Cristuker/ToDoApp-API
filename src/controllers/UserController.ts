import { Request, Response } from 'express';
import User from '../models/UserModel';

class UserController {
  store(req: Request, res: Response) {
    User.create({ name: 'cristian', email: 'cristianemail@email.com', password: '1231231' });
    return res.status(200).send({ message: 'ok' });
  }
}

export default new UserController();
