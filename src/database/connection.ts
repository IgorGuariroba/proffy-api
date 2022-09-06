import knex from 'knex';
require('dotenv/config');

const db = knex({
  client: 'mysql',
  connection: {
    host : process.env.HOST_DATABASE, 
    port : 3306,
    user : process.env.USER_DATABASE,
    password : process.env.PASSWORD_DATABASE,
    database : process.env.DATABASE_DATABASE
  }
});


export default db;