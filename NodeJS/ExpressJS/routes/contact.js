const express = require('express');
const path = require('path');

const router = express.Router();

router.get('/', (req, res, next) => {
    res.sendFile(path.join(__dirname, '..', 'views', 'contact.html')); // Use path module to construct file path
});

router.post('/submit', (req, res, next) => {
    res.redirect('/success');
});

router.get('/success', (req, res, next) => {
    res.sendFile(path.join(__dirname, '..', 'views', 'success.html'));
});

module.exports = router;
