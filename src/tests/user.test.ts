import request from 'supertest';
import app from '../routes';

describe('User controller test suite', () => {
  test('Ensure return 401 when some field are empty', async done => {
    const body = {
      name: 'Cristian',
      email: 'cristian@email.com',
      password: '1234',
    };
    const response = await request(app).post('/users').send(body).expect(401);
    expect(response.status).toBe(401);
    expect(response.text).toBe('Invalid request, please check the body');
    done();
  });

  test('Ensure return 409 when password and passwordConfirmation is different', async (done) => {
    const body = {
      name: 'Cristian',
      email: 'cristian@email.com',
      password: '1234',
      passwordConfirmation: '12314',
    };

    const response = await request(app).post('/users').send(body);

    expect(response.status).toBe(409);
    expect(response.text).toBe('The password and passwordConfirmation should be equal');
    done();
  });
});
