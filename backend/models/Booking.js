const BookingSchema = new mongoose.Schema({
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    busId: { type: String, required: true },
    passengerDetails: [{
      name: String,
      age: Number,
      contact: String,
      seat: String,
    }],
    bookingDate: { type: Date, default: Date.now },
  });
  module.exports = mongoose.model('Booking', BookingSchema);