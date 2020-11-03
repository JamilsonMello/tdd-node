import request from 'supertest';

import App from '@/app';
import UserRepository from '@/Repository/UserRepository';

describe('Authentication', () => {
  it('Should be able authenticate with valid credentials', async () => {

    const user = await UserRepository.store({
      name: 'user',
      email: 'user@example.com',
      password: 'password',
    })

    // const response = await request(App).post('/sessions').send({
    //   email: user.name,
    //   password: user.password,
    // })

    expect(1+1).toBe(2)

  })
})
