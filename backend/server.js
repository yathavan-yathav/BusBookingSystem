const express = require('express');
const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const cors = require('cors');

const app = express();
app.use(express.json());
app.use(cors());

mongoose.connect('mongodb://localhost:27017/bus-booking', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const UserSchema = new mongoose.Schema({
  email: String,
  password: String,
});

const BookingSchema = new mongoose.Schema({
  userId: String,
  busId: String,
  passengerDetails: Object,
});

const User = mongoose.model('User', UserSchema);
const Booking = mongoose.model('Booking', BookingSchema);

// Register
app.post('/register', async (req, res) => {
    const { email, password } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = new User({ email, password: hashedPassword });
    await user.save();
    res.json({ message: 'User registered successfully!' });
  });
  
  // Login
  app.post('/login', async (req, res) => {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (user && (await bcrypt.compare(password, user.password))) {
      const token = jwt.sign({ id: user._id }, 'secret');
      res.json({ token });
    } else {
      res.status(400).json({ message: 'Invalid credentials' });
    }
  });
  
  // Get Bookings
  app.get('/bookings', async (req, res) => {
    const bookings = await Booking.find();
    res.json(bookings);
  });
  
  // Create Booking
  app.post('/booking', async (req, res) => {
    const { userId, busId, passengerDetails } = req.body;
    const booking = new Booking({ userId, busId, passengerDetails });
    await booking.save();
    res.json({ message: 'Booking created successfully!' });
  });
  
  app.listen(5000, () => {
    console.log('Server running on http://localhost:5000');
  });
  