# ToDoApp-API

### Requisitos

-   Yarn
-   Node
-   Docker

```bash
# To build a container whit postgres
$ docker run --name todo_db -e POSTGRES_PASSWORD=todo123 -p 5432:5432 -d postgres

# To install dependencies
$ yarn

# To run api
$ yarn start
```

CREATE DATABASE "database_todo"
