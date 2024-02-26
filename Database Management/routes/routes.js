const express = require('express');
const router = express.Router();
const path = require('path');
const { createTableController, getAllTablesController } = require('../controller/controller.js');

router.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../view', 'index.html'));
});

router.get('/create-table', (req, res) => {
    res.sendFile(path.join(__dirname, '../view', 'index.html'));
});

router.post('/create-table', createTableController);
router.get('/tables', getAllTablesController);

module.exports = router;
