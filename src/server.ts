import express from 'express';
import { Sequelize } from 'sequelize';
import routes from './routes';
import configDB from '../config/config';

const app = express();
const port = 3000;

app.use(routes);
app.listen(port);

const sequelize = new Sequelize(configDB);

try {
  sequelize.authenticate();
  console.log('Conexão com o banco de dados feita com sucesso!');
} catch (error) {
  console.log('Erro ao conectar ao banco de dados');
  console.log(error);
}

console.log(`Servidor rodando na porta ${port}`);
