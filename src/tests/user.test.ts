import request from 'supertest';
import app from '../routes';

const body = {
  name: 'Cristian',
  email: 'cristian@email.com',
  password: '1234',
  passwordConfirmation: '1234',
};

describe('User controller test suite', () => {
  test('Ensure return 401 when some field are empty', async done => {
    delete body.passwordConfirmation;
    const response = await request(app).post('/users').send(body).expect(401);
    expect(response.status).toBe(401);
    expect(response.text).toBe('Invalid request, please check the body');
    done();
  });
});
