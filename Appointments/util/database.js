const Sequelize = require('sequelize');

const sequelize = new Sequelize('booking-appointment', 'root', 'password', {
  dialect: 'mysql',
  host: 'localhost',
  logging: console.log // Enable logging
});



module.exports = sequelize;
