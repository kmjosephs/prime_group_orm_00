/**
 * Connection pool for our Postgres DB via knex and bookshelf.
 *
 * @author antoinette@primeacademy.io
 */
var connectionString = process.env.PG_CONNECTION_STRING || 'postgres://localhost:5432/rando';
// The knex module is a function that takes a configuration object
var knex = require('knex')({
  client: 'pg',
  connection: connectionString,
  searchPath: 'knex,public'
});

var Bookshelf = require('bookshelf')(knex);

module.exports = Bookshelf;