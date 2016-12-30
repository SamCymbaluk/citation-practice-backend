//Setup knex connection to Postgres
module.exports = require('knex')({
  client: 'pg',
  connection: {
    host : '127.0.0.1',
    user : 'postgres',
    password : 'test01',
    database : 'mla'
  }
});
