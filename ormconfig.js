require('dotenv').config({
  path: process.env.NODE_ENV === 'test' ? '.env.test' : 'env'
})

module.exports = {
  type: "sqlite",
  synchronize: false,
  logging: false,
  database: process.env.DB_STORAGE || "src/database/db.sql",
  logging: false,
  synchroize: false,
  migrationsRun: true,
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
