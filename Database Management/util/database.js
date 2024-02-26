const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('database-management', 'root', 'password', {
    dialect: 'mysql',
    host: 'localhost',
    logging: console.log
});

module.exports = sequelize;
