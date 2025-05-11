const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const authRoutes = require('./routes/auth');
const reservationRoutes = require('./routes/reservation');
const feedbackRoutes = require('./routes/feedback');
const orderRoutes = require('./routes/order');
const authMiddleware = require('./middleware/authMiddleware');

const app = express();
app.use(cors());
app.use(express.json());

//MongoDB connection
const MONGO_URI = 'mongodb://localhost:27017/authDB';

//Connect to MongoDB
mongoose.connect(MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => {
  console.log('Connected to MongoDB');

  app.listen(5000, () => {
    console.log('Server is running on http://localhost:5000');
  });
})
.catch((err) => {
  console.error('MongoDB connection error:', err);
});

// Routes
app.use('/auth', authRoutes);
app.use('/reservation', reservationRoutes);
app.use('/feedback', feedbackRoutes);
app.use('/order', orderRoutes);


app.get('/protected', authMiddleware, (req, res) => {
  res.json({
    message: 'Protected route accessed successfully!',
    user: {
      id: req.user._id,
      email: req.user.email,
      lastLogin: req.user.lastLogin
    }
  });
});
