const Sequelize = require('sequelize');

const sequelize = new Sequelize('social-media-post', 'root', 'password', {
    dialect: 'mysql2',
    host: 'localhost',
    logging: console.log
});

module.exports = sequelize;