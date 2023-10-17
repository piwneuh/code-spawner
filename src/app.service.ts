import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  composeString: string = `version: '3.8'
services:
`;

  mongo: string = `  mongodb:
    image: mongo:latest
    container_name: mongo
    ports:
      - '27017:27017'
    environment:
      MONGO_INITDB_ROOT_USERNAME: root
      MONGO_INITDB_ROOT_PASSWORD: example
\n`;

  postgre: string = `  postgresql:
    image: postgres:latest
    container_name: postgres
    ports:
      - '5432:5432'
    environment:
      POSTGRES_USER: postgres
      POSTGRES_PASSWORD: example
      POSTGRES_DB: mydb
\n`;

  mssql: string = `  mssql-server:
    image: mcr.microsoft.com/mssql/server:latest
    container_name: mssql-server
    ports:
      - '1433:1433'
    environment:
      SA_PASSWORD: YourPassword123
      ACCEPT_EULA: Y
\n`;

  generateCompose(listOfRequests: any) {
    // Reset string everytime it's called
    this.composeString = `version: '3.8'
services:
`;

    if (listOfRequests.mongo) {
      this.composeString += this.mongo;
    }

    if (listOfRequests.postgre) {
      this.composeString += this.postgre;
    }

    if (listOfRequests.mssql) {
      this.composeString += this.mssql;
    }

    console.log(this.composeString);
    return this.composeString;
  }
}
