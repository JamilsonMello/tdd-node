import { Request, Response } from 'express';
import { getCustomRepository } from 'typeorm'

import UserRepository from '../Repository/UserRepository'

class UserController {
  public async store(request: Request, response: Response): Promise<Response> {
    const userRepository = getCustomRepository(UserRepository);
    const { name, email, password } = request.body;

    const userExist = await userRepository.findOne({ email })

    if (userExist) {
      return response.status(401).json({ error: 'User already exists.' });
    }

    const user = await userRepository.store({ name, email, password });

    return response.status(200).json(user);
  }
}

export default new UserController();
