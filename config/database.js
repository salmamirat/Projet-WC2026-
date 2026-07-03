require("dotenv").config();

const { Sequelize } = require("sequelize");

const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASSEWORD,
  {
    host: process.env.DB_HOST,
    dialect: "progress",
    port:process.env.DB_PORT
  }
);

module.exports = sequelize;