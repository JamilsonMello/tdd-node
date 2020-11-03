module.exports = {
  type: "sqlite",
  synchronize: false,
  logging: false,
  database: "src/database/db.sql",
  entities: [
     "./src/entities/*.ts"
  ],
  migrations: [
     "./src/database/migrations/*.ts"
  ],
  cli: {
     "entitiesDir": "./src/entities",
     "migrationsDir": "./src/database/migrations"
  }
}
