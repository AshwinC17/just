const sequelize = require('../util/database');
const Appointment = require('../models/appointment');
// Controller to create a new appointment
exports.createAppointment = async (req, res) => {
  try {
    const { name, email, phone } = req.body;
    const appointment = await Appointment.create({ name, email, phone });
    res.status(201).json({ message: 'Appointment created successfully', appointment });
  } catch (error) {
    res.status(500).json({ message: 'Appointment creation failed', error: error.message });
  }
};


// Controller to fetch all appointments
exports.getAppointments = async (req, res) => {
  try {
    const appointments = await Appointment.findAll();
    res.status(200).json({ appointments });
  } catch (error) {
    res.status(500).json({ message: 'Failed to fetch appointments', error: error.message });
  }
};

