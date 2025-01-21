const BusSchema = new mongoose.Schema({
    "date":{type:Date},
    "startPlace":{type:String},
    "endPlace":{type:String},
    "startTime":{type:String},
    "endTime":{type:String},
    "seat":50,
    "booked":0
  });
  module.exports = mongoose.model('Booking', BookingSchema);