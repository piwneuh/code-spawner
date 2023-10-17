## Installation

Everything you need regarding NestJS: https://docs.nestjs.com/first-steps

```bash
$ npm install
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Testing - sadly by hand

### API

GET http://localhost:3000/compose with body:

```js
{
  "mongo": true,
  "postgre": true,
  "mssql": true
}
```

Raw returning string should be valid docker compose file.
Below example is when all three databases are selected:

```yaml
version: '3.8'
services:
  mongodb:
    image: mongo:latest
    container_name: mongo
    ports:
      - '27017:27017'
    environment:
      MONGO_INITDB_ROOT_USERNAME: root
      MONGO_INITDB_ROOT_PASSWORD: example

  postgresql:
    image: postgres:latest
    container_name: postgres
    ports:
      - '5432:5432'
    environment:
      POSTGRES_USER: postgres
      POSTGRES_PASSWORD: example
      POSTGRES_DB: mydb

  mssql-server:
    image: mcr.microsoft.com/mssql/server:latest
    container_name: mssql-server
    ports:
      - '1433:1433'
    environment:
      SA_PASSWORD: YourPassword123
      ACCEPT_EULA: Y
```

### Run docker compose

1. Install docker and docker-compose
2. Create docker-compose.yml file with contents returned from the API
3. Run `docker-compose up` in the same directory as docker-compose.yml file
