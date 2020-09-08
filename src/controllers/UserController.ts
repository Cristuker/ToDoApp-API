import * as Yup from 'yup';
import { Request, Response } from 'express';

class UserController {
  async store(request: Request, response: Response) {
    const schema = Yup.object({
      name: Yup.string().required().min(2),
      email: Yup.string().required().email(),
      password: Yup.string().required().min(4),
      passwordConfirmation: Yup.string().required().min(4),
    });

    if (!(await schema.isValid(request.body))) {
      return response.status(401).send('Invalid request, please check the body');
    }
    return response.status(200).json('Created');
  }
}

export default new UserController();
