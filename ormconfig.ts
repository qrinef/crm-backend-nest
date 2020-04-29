import { join } from "path"

const path = process.env.NODE_ENV !== 'production' ? 'src' : 'dist'

export = {
  type: process.env.DB_DIALECT,
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
  entities: [join(path, "**/*.entity{.ts,.js}")],
  migrations: [join(path, "database/migrations/**/*{.ts,.js}")],
  seeds: [join(path, "database/seeds/**/*{.ts,.js}")],
  factories: [join(path, "database/factories/**/*{.ts,.js}")]
}
