const express = require('express');
const expensesController = require('../controllers/expensesController');

const router = express.Router();

// Define routes
router.get('/', expensesController.getAllExpenses);
router.post('/', expensesController.addExpense);
router.delete('/:id', expensesController.deleteExpense);
router.put('/:id', expensesController.updateExpense);

module.exports = router;
