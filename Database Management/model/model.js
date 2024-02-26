let tables = {};

const createTable = (tableName, fields) => {
    tables[tableName] = fields;
};

const getAllTables = () => {
    return Object.keys(tables);
};

module.exports = { createTable, getAllTables };
