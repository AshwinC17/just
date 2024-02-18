const Sequelize = require('sequelize');

const sequelize = new Sequelize('expense-table', 'root', 'password', {
    dialect: 'mysql',
    host: 'localhost',
    logging: console.log
});

module.exports = sequelize;