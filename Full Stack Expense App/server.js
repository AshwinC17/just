const express = require('express');
const bodyParser = require('body-parser');
const sequelize = require('./util/database');
const expensesRoutes = require('./routes/expensesRoutes');

const app = express();
const port = 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

sequelize.sync()
  .then(() => {
    console.log('Database synced');
  })
  .catch(err => {
    console.error('Error syncing database:', err);
  });

app.use('/expenses', expensesRoutes);

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
