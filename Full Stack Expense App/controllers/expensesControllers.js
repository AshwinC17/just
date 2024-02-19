const Expense = require('../models/expense');

exports.addExpense = async (req, res) => {
  const { amount, description, category } = req.body;
  try {
    const newExpense = await Expense.create({ amount, description, category });
    res.redirect('/success.html');
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getExpenses = async (req, res) => {
  try {
    const expenses = await Expense.findAll();
    res.status(200).json({ expenses });
  } catch (error) {
    res.status(500).json({ message: 'Failed to fetch expenses', error: error.message });
  }
};

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