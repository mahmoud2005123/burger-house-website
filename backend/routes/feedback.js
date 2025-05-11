const express = require('express');
const router = express.Router();
const Feedback = require('../models/Feedback');

router.post('/new', async (req, res) => {
  try {
    const feedback = new Feedback(req.body);
    await feedback.save();
    res.status(201).json({ message: 'Feedback saved' });
  } catch (err) {
    res.status(500).json({ error: 'Feedback failed' });
  }
});

module.exports = router;
