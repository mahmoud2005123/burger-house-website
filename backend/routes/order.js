const express = require('express');
const router = express.Router();
const Order = require('../models/Order');
const authMiddleware = require('../middleware/authMiddleware');

router.post('/new', authMiddleware, async (req, res) => {
  try {
    const { items, total } = req.body;
    const userEmail = req.user.email;

    const order = new Order({ userEmail, items, total });
    await order.save();

    res.status(201).json({ message: 'Order placed successfully' });
  } catch (err) {
    res.status(500).json({ error: 'Order failed' });
  }
});

module.exports = router;
