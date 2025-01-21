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