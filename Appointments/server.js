const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const sequelize = require('./util/database');
const routes = require('./routes/appointmentRoutes');

const app = express();

// Middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Serve static files from the public directory
app.use(express.static('public'));

// Use the routes defined in appointmentRoutes.js
app.use(routes);

// Sync database and start server
sequelize.sync()
  .then(() => {
    app.listen(3000, () => {
      console.log('Server is running on port 3000');
    });
  })
  .catch(err => console.log(err));
