const mysql = require('mysql');
const db = mysql.createConnection({
    host: 'localhost',
    user: 'your_username',
    password: 'your_password',
    database: 'your_database'
});

db.connect((err) => {
    if (err) {
        console.error('Error connecting to MySQL database:', err);
        throw err;
    }
    console.log('Connected to MySQL database');
});

// Controller for registering a new user
exports.registerUser = (req, res) => {
    const { name, email, phone } = req.body;
    const INSERT_USER_QUERY = `INSERT INTO Users (name, email, phone) VALUES (?, ?, ?)`;

    db.query(INSERT_USER_QUERY, [name, email, phone], (error, results) => {
        if (error) {
            console.error('Error inserting user:', error);
            return res.status(500).send('Error registering user');
        }
        return res.status(200).send('User registered successfully');
    });
};

// Controller for retrieving all users
exports.getAllUsers = (req, res) => {
    const GET_USERS_QUERY = `SELECT * FROM Users`;

    db.query(GET_USERS_QUERY, (error, results) => {
        if (error) {
            console.error('Error getting users:', error);
            return res.status(500).send('Error retrieving users');
        }
        return res.status(200).json(results);
    });
};
