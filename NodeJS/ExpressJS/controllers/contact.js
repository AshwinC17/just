const path = require('path');

exports.submitContactForm = (req, res, next) => {
    res.sendFile(path.join(__dirname, '..', 'views', 'contact.html'));
}