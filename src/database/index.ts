import { createConnection } from 'typeorm';
import path from 'path';


console.log(path.join(__dirname, '..', 'entities', '*{.ts,.js}'))

createConnection({
  type: "sqlite",
  synchronize: false,
  logging: false,
  database: "src/databse/db.sql",
  entities: [
     "src/entities/*.ts"
  ],
  migrations: [
     "src/database/migrations/*.ts"
  ],
  cli: {
     entitiesDir: "src/entities",
     migrationsDir: "src/database/migrations"
  }
});

