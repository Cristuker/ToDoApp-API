import { Request, Response } from 'express';

class UserController {
  store(req: Request, res: Response) {
    return res.status(200).send({ message: 'ok' });
  }
}

export default new UserController();
