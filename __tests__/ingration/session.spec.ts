import request from 'supertest';
import { getCustomRepository } from 'typeorm';

import connection from '@/database'
import App from '@/app';
import UserRepository from '@/Repository/UserRepository';

describe('Authentication', () => {
  beforeAll(async () => {
    await connection.create();
  });

  beforeEach(async () => {
    await connection.clear();
  });

  afterAll(async () => {
    await connection.close();
  });

  it('Should be able authenticate with valid credentials', async () => {
    const userRepository = getCustomRepository(UserRepository);

    await userRepository.store({
      name: 'user',
      email: 'user@example.com',
      password: 'password',
    });

    const response = await request(App).post('/sessions').send({
      email: 'user@example.com',
      password: 'password',
    });

    expect(response.status).toBe(200);
  });

  it('Should not be able create a session to non-existing user', async () => {
    const response = await request(App).post('/sessions').send({
      email: 'user@example.com',
      password: 'password',
    });

    expect(response.status).toBe(401);
  });
});
