import { EntityRepository, Repository } from 'typeorm';

import User from '../entities/User';

@EntityRepository(User)
class UserRepository extends Repository<User> {
  public async store(data: Omit<User, 'id'| 'created_at' | 'updated_at'>): Promise<User> {
    const user = this.create(data)

    await this.save(user);

    return user;
  }
}

export default UserRepository;
