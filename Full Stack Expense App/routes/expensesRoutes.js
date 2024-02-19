const express = require('express');
const expensesController = require('../controllers/expensesControllers');
const path = require('path');
const Expense = require('../models/expense');
const router = express.Router();

router.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../views', 'main.html'));
});

router.get('/add-expense', (req, res) => {
    res.sendFile(path.join(__dirname, '../views', 'add-expense.html'));
});

router.post('/add-expense', expensesController.addExpense);

router.get('/success', (req, res) => {
    res.sendFile(path.join(__dirname, '../views', 'success.html'));
});

router.get('/view-expenses', (req, res) => {
  res.sendFile(path.join(__dirname, '../views', 'view-expenses.html'));
});

router.get('/api/expenses', expensesController.getExpenses);

router.delete('/api/expenses/:id', expensesController.deleteExpense);

module.exports = router;
