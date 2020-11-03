import { EntityRepository, Repository, getCustomRepository } from 'typeorm';

import User from '../entities/User';

@EntityRepository(User)
class UserRepository extends Repository<User> {
  public async store(data: Omit<User, 'id'| 'created_at' | 'updated_at'>): Promise<void> {
    console.log(data)

    console.log(await this.find());

    console.log('hello1')



    return;
  }
}

export default UserRepository;
