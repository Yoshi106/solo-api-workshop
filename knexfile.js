// dotenv helps me load environment variables.
// https://www.npmjs.com/package/dotenv
// I added .env file locally with the below values:
// .env is added to .gitignore so you can't see it.
// (replace including angle brackets)
//
/*
DB_USER=<my psql username here>
DB_NAME=<database name>
*/

require("dotenv").config();

module.exports = {
  development: {
    client: "postgres",
    connection: {
      host: "127.0.0.1",
      user: process.env.DB_USER,
      database: process.env.DB_NAME,
    },
  },

  staging: {
    client: "postgresql",
    connection: {
      database: "my_db",
      user: "username",
      password: "password",
    },
    pool: {
      min: 2,
      max: 10,
    },
    migrations: {
      tableName: "knex_migrations",
    },
  },

  production: {
    client: "postgresql",
    connection: {
      database: "my_db",
      user: "username",
      password: "password",
    },
    pool: {
      min: 2,
      max: 10,
    },
    migrations: {
      tableName: "knex_migrations",
    },
  },
};
