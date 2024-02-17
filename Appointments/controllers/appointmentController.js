const sequelize = require('../util/database');
const Appointment = require('../models/appointment');

exports.createAppointment = async (req, res) => {
  try {
    const { name, email, phone } = req.body;
    const appointment = await Appointment.create({ name, email, phone });
    res.redirect('/success.html');
  } catch (error) {
    res.status(500).json({ message: 'Appointment creation failed', error: error.message });
  }
};

exports.getAppointments = async (req, res) => {
  try {
    const appointments = await Appointment.findAll();
    res.status(200).render('booked-appointments', { appointments });
  } catch (error) {
    res.status(500).json({ message: 'Failed to fetch appointments', error: error.message });
  }
};
