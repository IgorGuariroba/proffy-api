import path from 'path';

module.exports = {
  client: 'mysql',
  connection: {
   directory: path.resolve(__dirname,'src','database','connections.ts')
  },
  migrations: {
    directory: path.resolve(__dirname, 'src', 'database', 'migrations')
  },
};