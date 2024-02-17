const express = require('express');
const router = express.Router();
const appointmentController = require('../controllers/appointmentController');

// Define routes
router.post('/api/appointments', appointmentController.createAppointment);
router.get('/api/appointments', appointmentController.getAppointments);

// Define a route for the root URL
router.get('/', (req, res) => {
  res.send('Welcome to the appointment booking application!');
});

module.exports = router;
