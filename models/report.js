const mongoose = require('mongoose');

const reportSchema = mongoose.Schema({
  address: { type: String, required: true },
  placeName: { type: String, required: true },
  description: { type: String, required: true },
  abuseType: { type: String, required: true },
  dateOfEvent: { type: Date, required: true },
  timeOfEvent: { type: String, required: true },
  image: { type: String, required: false },
  lat: { type: Number, required: true },
  long: { type: Number, required: true },
  zipcode: { type: String, required: true },
  city: { type: String, required: true },
  state: { type: String, required: true },
  country: { type: String, required: true }
});

module.exports = mongoose.model('Report', reportSchema);
