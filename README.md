# ToDoApp-API

run db

```bash
# To build a container whit postgres
$ docker run --name todo_db -e POSTGRES_PASSWORD=todo123 -p 5432:5432 -d postgres

# To run postgres
$ docker container start todo_db

# To run api
$ yarn start
```
