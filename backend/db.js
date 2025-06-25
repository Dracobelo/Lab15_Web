// db.js
require('dotenv').config();
const { Sequelize } = require('sequelize');

// Crea una instancia de Sequelize usando los datos de tu .env
const sequelize = new Sequelize(
  process.env.DB_NAME,     // nombre de la base de datos
  process.env.DB_USER,     // usuario
  process.env.DB_PASSWORD, // contraseña
  {
    host: process.env.DB_HOST,
    dialect: 'mysql',
  }
);

module.exports = sequelize;
