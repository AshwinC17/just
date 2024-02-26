const { createTable, getAllTables } = require('./model/model.js');

const createTableController = (req, res) => {
    const { tableName, fields } = req.body;
    createTable(tableName, fields);
    res.json({ success: true });
};

const getAllTablesController = (req, res) => {
    const allTables = getAllTables();
    res.json({ tables: allTables });
};

module.exports = { createTableController, getAllTablesController };
