import request from 'supertest';
import { getCustomRepository } from 'typeorm';

import connection from '@/database';
import App from '@/app';
import UserRepository from '@/Repository/UserRepository';

describe('Register a new user', () => {
  beforeAll(async () => {
    await connection.create();
  });

  beforeEach(async () => {
    await connection.clear();
  });

  afterAll(async () => {
    await connection.close();
  });

  it('Should be able create a new user', async () => {
    const userRepository = getCustomRepository(UserRepository);

    await request(App).post('/users').send({
      name: 'user',
      email: 'user@example.com',
      password: 'password',
    });

    const user = await userRepository.findOne({ email: 'user@example.com' });

    expect(user).toHaveProperty('id');
  });

  it('Should not be able create a new user if user already exists', async () => {
    await request(App).post('/users').send({
      name: 'user',
      email: 'user@example.com',
      password: 'password',
    });

    const response = await request(App).post('/users').send({
      name: 'user',
      email: 'user@example.com',
      password: 'password',
    });

    expect(response.status).toBe(401);
  });
});
