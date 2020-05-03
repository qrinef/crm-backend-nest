const production = {
  entities: ["dist/**/*.entity.js"],
  migrations: ["dist/database/migrations/**/*.js"],
  seeds: ["dist/database/seeds/**/*.js"],
  factories: ["dist/database/factories/**/*.js"]
}

const base = {
  type: process.env.DB_DIALECT,
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
  // logging: true,
  entities: ["src/**/*.entity.ts"],
  migrations: ["src/database/migrations/**/*.ts"],
  seeds: ["src/database/seeds/**/*.ts"],
  factories: ["src/database/factories/**/*.ts"],
  cli: {
    migrationsDir: ["src/database/migrations"],
  }
}

module.exports = process.env.NODE_ENV !== 'production' ? base : { ...base, ...production }
