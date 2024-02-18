const Expense = require('../models/expense');

// Controller for getting all expenses
exports.getAllExpenses = async (req, res) => {
  try {
    const expenses = await Expense.findAll();
    res.json(expenses);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Controller for adding a new expense
exports.addExpense = async (req, res) => {
  const { amount, description, category } = req.body;
  try {
    const newExpense = await Expense.create({ amount, description, category });
    res.json({ message: 'Expense added successfully.', expense: newExpense });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Controller for deleting an expense
exports.deleteExpense = async (req, res) => {
  const expenseId = req.params.id;
  try {
    const deletedExpense = await Expense.findByPk(expenseId);
    if (!deletedExpense) {
      res.status(404).json({ error: 'Expense not found.' });
      return;
    }
    await deletedExpense.destroy();
    res.json({ message: 'Expense deleted successfully.' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Controller for updating an expense
exports.updateExpense = async (req, res) => {
  const expenseId = req.params.id;
  const { amount, description, category } = req.body;
  try {
    const expenseToUpdate = await Expense.findByPk(expenseId);
    if (!expenseToUpdate) {
      res.status(404).json({ error: 'Expense not found.' });
      return;
    }
    expenseToUpdate.amount = amount;
    expenseToUpdate.description = description;
    expenseToUpdate.category = category;
    await expenseToUpdate.save();
    res.json({ message: 'Expense updated successfully.', expense: expenseToUpdate });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
