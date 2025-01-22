const BookingSchema = new mongoose.Schema({
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    busId: { type: mongoose.Schema.Types.ObjectId, ref: 'Bus' },
    passengerDetails: [{
      name: String,
      age: Number,
      contact: String
    }]
  });
  module.exports = mongoose.model('Booking', BookingSchema);

  const mongoose = require('mongoose');

const BookingSchema = new mongoose.Schema({
    userId: { 
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'User',
        required: true  // Ensures a user must be linked to the booking
    },
    busId: { 
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'Bus',
        required: true  // Ensures a bus must be linked to the booking
    },
    passengerDetails: [{
        name: { type: String, required: true, trim: true },
        age: { type: Number, required: true, min: 1 },
        contact: { type: String, required: true, trim: true }
    }],
    bookingDate: { 
        type: Date, 
        default: Date.now  // Automatically set booking date
    },
    status: {
        type: String,
        enum: ['pending', 'confirmed', 'cancelled'],
        default: 'pending'
    },
    totalPrice: {
        type: Number,
        required: true
    }
});

module.exports = mongoose.model('Booking', BookingSchema);
