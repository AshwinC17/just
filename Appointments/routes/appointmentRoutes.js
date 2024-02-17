const express = require('express');
const router = express.Router();
const path = require('path');
const Appointment = require('../models/appointment');
const appointmentController = require('../controllers/appointmentController');

router.get('/book-appointment', (req, res) => {
  res.sendFile(path.join(__dirname, '../public', 'book-appointment.html'));
});

router.post('/book-appointment', appointmentController.createAppointment);

router.get('/success', (req, res) => {
  res.sendFile(path.join(__dirname, '../public', 'success.html'));
});

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
    res.sendStatus(204);
  } catch (error) {
    res.status(500).json({ message: 'Failed to delete appointment', error: error.message });
  }
});

module.exports = router;
