document.addEventListener('DOMContentLoaded', function () {
  loadExpensesFromLocalStorage();

  window.addEventListener('beforeunload', function () {
    saveExpensesToLocalStorage();
  });
});

document.getElementById('expenseForm').addEventListener('submit', function (e) {
  e.preventDefault();

  var expenseAmount = document.getElementById('expenseAmount').value;
  var expenseDescription = document.getElementById('expenseDescription').value;
  var expenseCategory = document.getElementById('expenseCategory').value;

  if (expenseAmount.trim() === '' || isNaN(expenseAmount) || expenseAmount <= 0 ||
      expenseDescription.trim() === '' || expenseCategory === '') {
    alert('Please enter valid values for expense.');
    return;
  }

  addExpenseToTable(expenseAmount, expenseDescription, expenseCategory);
  document.getElementById('expenseForm').reset();
});

document.getElementById('clearAll').addEventListener('click', function () {
  if (confirm('Are you sure you want to clear all expenses?')) {
    clearAllExpenses();
  }
});

function loadExpensesFromLocalStorage() {
  var expenses = JSON.parse(localStorage.getItem('expenses')) || [];
  clearExpenseTable();

  for (var i = 0; i < expenses.length; i++) {
    addExpenseToTable(expenses[i].amount, expenses[i].description, expenses[i].category);
  }
}

function addExpenseToTable(amount, description, category) {
  var tableBody = document.getElementById('expenseList');
  var newRow = tableBody.insertRow(tableBody.rows.length);
  var cell1 = newRow.insertCell(0);
  var cell2 = newRow.insertCell(1);
  var cell3 = newRow.insertCell(2);
  var cell4 = newRow.insertCell(3);

  cell1.innerHTML = '₹' + parseFloat(amount).toFixed(2);
  cell2.innerHTML = description;
  cell3.innerHTML = category;

  var deleteButton = document.createElement('button');
  deleteButton.className = 'btn btn-danger btn-sm mr-1';
  deleteButton.innerHTML = 'Delete';
  deleteButton.addEventListener('click', function () {
    deleteExpenseFromTable(newRow.rowIndex);
  });

  var editButton = document.createElement('button');
  editButton.className = 'btn btn-primary btn-sm';
  editButton.innerHTML = 'Edit';
  editButton.addEventListener('click', function () {
    editExpenseInTable(newRow.rowIndex);
  });

  cell4.appendChild(deleteButton);
  cell4.appendChild(editButton);
}

function deleteExpenseFromTable(rowIndex) {
  var tableBody = document.getElementById('expenseList');
  tableBody.deleteRow(rowIndex - 1);
  deleteExpenseFromLocalStorage(rowIndex);
}

function editExpenseInTable(rowIndex) {
  var tableBody = document.getElementById('expenseList');
  var row = tableBody.rows[rowIndex - 1];
  var amount = row.cells[0].innerText.replace('₹', '');
  var description = row.cells[1].innerText;
  var category = row.cells[2].innerText;

  var newAmount = prompt('Edit Expense Amount:', amount);
  var newDescription = prompt('Edit Expense Description:', description);
  var newCategory = prompt('Edit Expense Category:', category);

  if (newAmount !== null && newDescription !== null && newCategory !== null) {
    row.cells[0].innerHTML = '₹' + parseFloat(newAmount).toFixed(2);
    row.cells[1].innerHTML = newDescription;
    row.cells[2].innerHTML = newCategory;
    updateExpenseInLocalStorage(rowIndex, newAmount, newDescription, newCategory);
  }
}

function clearExpenseTable() {
  var tableBody = document.getElementById('expenseList');
  while (tableBody.firstChild) {
    tableBody.removeChild(tableBody.firstChild);
  }
}

function saveExpensesToLocalStorage() {
  var tableBody = document.getElementById('expenseList');
  var expenses = [];

  for (var i = 0; i < tableBody.rows.length; i++) {
    var row = tableBody.rows[i];
    var amount = row.cells[0].innerText.replace('₹', '');
    var description = row.cells[1].innerText;
    var category = row.cells[2].innerText;

    expenses.push({ amount: amount, description: description, category: category });
  }

  localStorage.setItem('expenses', JSON.stringify(expenses));
}

function deleteExpenseFromLocalStorage(rowIndex) {
  var expenses = JSON.parse(localStorage.getItem('expenses')) || [];
  expenses.splice(rowIndex - 1, 1);
  localStorage.setItem('expenses', JSON.stringify(expenses));
}

function updateExpenseInLocalStorage(rowIndex, newAmount, newDescription, newCategory) {
  var expenses = JSON.parse(localStorage.getItem('expenses')) || [];
  expenses[rowIndex - 1] = { amount: newAmount, description: newDescription, category: newCategory };
  localStorage.setItem('expenses', JSON.stringify(expenses));
}

function clearAllExpenses() {
  var tableBody = document.getElementById('expenseList');
  while (tableBody.firstChild) {
    tableBody.removeChild(tableBody.firstChild);
  }

  localStorage.removeItem('expenses');
}
