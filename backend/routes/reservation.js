const express = require('express');
const router = express.Router();
const Reservation = require('../models/Reservation');

router.post('/new', async (req, res) => {
  try {
    const reservation = new Reservation(req.body);
    await reservation.save();
    res.status(201).json({ message: 'Reservation saved' });
  } catch (err) {
    res.status(500).json({ error: 'Reservation failed' });
  }
});

module.exports = router;
