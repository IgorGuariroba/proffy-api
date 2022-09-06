import path from 'path';
import { Knex } from "knex";


module.exports = {
  client: 'mysql',
  connection: {
   directory: path.resolve(__dirname,'src','database','connections.ts')
  },
  migrations: {
    directory: path.resolve(__dirname, 'src', 'database', 'migrations')
  },
}as Knex.Config;