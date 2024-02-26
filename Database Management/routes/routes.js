const express = require('express');
const router = express.Router();
const { createTableController, getAllTablesController } = require('./controller');

router.post('/create-table', createTableController);
router.get('/tables', getAllTablesController);

module.exports = router;
