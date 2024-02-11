const express = require('express');
const router = express.Router();
const contactController = require('../controllers/contact');
const successController = require('../controllers/success');

router.get('/', contactController.submitContactForm);
router.post('/submit', successController.showSuccessPage);

module.exports = router;
