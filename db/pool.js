const { Pool } = require("pg");

module.exports = new Pool({
  host: process.env.PG_HOST,
  user: process.env.PG_USERNAME,
  password: process.env.PG_PASSWORD,
  database: process.env.PG_DATABASE,
  port: process.env.PG_PORT,
});
