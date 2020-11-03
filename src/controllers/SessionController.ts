import { Request, Response } from 'express';
import { getCustomRepository } from 'typeorm'

import UserRepository from '../Repository/UserRepository'

class SessionController {
  public async store(request: Request, response: Response): Promise<Response> {
    const userRepository = getCustomRepository(UserRepository);
    const { email, password } = request.body;

    const user = await userRepository.findOne({ email, password });

    if (!user) {
      return response.status(401).json({ error: 'User not found' });
    }

    return response.status(200);
  }
}

export default SessionController;
