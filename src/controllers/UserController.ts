import * as Yup from 'yup';
import { Request, Response } from 'express';

class UserController {
  async store(request: Request, response: Response) {
    const schema = Yup.object({
      name: Yup.string().required().min(2),
      email: Yup.string().required().email(),
      password: Yup.string().required().min(3),
      passwordConfirmation: Yup.string().required().min(3),
    });

    if (!(await schema.isValid(request.body))) {
      return response.status(401).send('Invalid request, please check the body');
    }

    const {
      password, passwordConfirmation,
    } = request.body;

    if (password !== passwordConfirmation) {
      return response.status(409).send('The password and passwordConfirmation should be equal');
    }

    return response.status(200).json('Created');
  }
}

export default new UserController();
