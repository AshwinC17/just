const path = require('path');

exports.showSuccessPage = (req, res, next) => {
    res.sendFile(path.join(__dirname, '..', 'views', 'success.html'));
}
