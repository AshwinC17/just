const express = require('express');
const router = express.Router();
const path = require('path');
const Appointment = require('../models/appointment');
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
// Define a route for viewing booked appointments
router.get('/api/appointments', async (req, res) => {
  try {
    const appointments = await Appointment.findAll();
    res.status(200).json({ appointments });
  } catch (error) {
    res.status(500).json({ message: 'Failed to fetch appointments', error: error.message });
  }
});

router.delete('/api/appointments/:id', async (req, res) => {
  const id = req.params.id;
  try {
    await Appointment.destroy({ where: { id } });
    res.sendStatus(204); // No content, successful delete
  } catch (error) {
    res.status(500).json({ message: 'Failed to delete appointment', error: error.message });
  }
});


module.exports = router;
