import { createConnection } from 'typeorm';

try {
  createConnection();
} catch (error) {
  // eslint-disable-next-line no-console
  console.log('Error on create connection whit DB');
  throw error;
}
