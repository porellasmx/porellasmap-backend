const mongoose = require('mongoose');

const reportSchema = mongoose.Schema({
  address: { type: String, required: false },
  placeName: { type: String, required: true },
  description: { type: String, required: true },
  abuseType: { type: String, required: true },
  dateOfEvent: { type: Date, required: true },
  image: { type: String, required: false },
  lat: { type: Number, required: true },
  long: { type: Number, required: true }
});

module.exports = mongoose.model('Report', reportSchema);
