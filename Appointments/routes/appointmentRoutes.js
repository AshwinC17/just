const express = require('express');
const router = express.Router();
const path = require('path');
const appointmentController = require('../controllers/appointmentController');

// Define a route for booking an appointment
router.get('/book-appointment', (req, res) => {
  res.sendFile(path.join(__dirname, '../public', 'book-appointment.html'));
});

// Define a route for submitting the form
router.post('/book-appointment', appointmentController.createAppointment);

// Define a route for the success page
router.get('/success', (req, res) => {
  res.sendFile(path.join(__dirname, '../public', 'success.html'));
});

// Define a route for viewing booked appointments
router.get('/booked-appointments', appointmentController.getAppointments);

module.exports = router;
