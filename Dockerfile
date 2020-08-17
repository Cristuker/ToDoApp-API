FROM node:14

LABEL maintainer 'Cristian'
WORKDIR /todo_api

COPY package*.json ./

RUN yarn

COPY . .

CMD ["yarn","start"]

