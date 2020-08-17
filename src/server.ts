import express from 'express';

const app = express();

const port = process.env.PORT || 33333;

app.listen(port);

// eslint-disable-next-line no-console
console.info(`Servidor rodando na porta ${port}`);
