const express = require('express');
const bodyParser = require('body-parser');
const sequelize = require('./util/database');
const path = require('path');
const expensesRoutes = require('./routes/expensesRoutes');

const app = express();
const port = 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('views'));

sequelize.sync()
  .then(() => {
    console.log('Database synced');
  })
  .catch(err => {
    console.error('Error syncing database:', err);
  });

app.use(expensesRoutes);

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
