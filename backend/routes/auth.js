const express = require('express');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('../models/User');
const router = express.Router();

router.post('/register', async (req, res) => {
    try {
      const { username, password } = req.body;
      const hashedPassword = await bcrypt.hash(password, 10);
      const newUser = new User({ username, password: hashedPassword });
      await newUser.save();
      res.status(201).json({ message: 'User registered successfully' });
    } catch (error) {
      res.status(500).json({ error: 'Registration failed' });
    }
  });
  
  // User Login
  router.post('/login', async (req, res) => {
    try {
      const { username, password } = req.body;
      const user = await User.findOne({ username });
      if (!user) return res.status(400).json({ error: 'Invalid username or password' });
  
      const isValid = await bcrypt.compare(password, user.password);
      if (!isValid) return res.status(400).json({ error: 'Invalid username or password' });
  
      const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: '1d' });
      res.json({ token });
    } catch (error) {
      res.status(500).json({ error: 'Login failed' });
    }
  });
  
  module.exports = router;