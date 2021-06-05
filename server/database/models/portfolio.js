const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const portfolioSchema = new Schema({
  title: {type: String, required: true, maxLength: 128},
  company: {type: String, required: true, maxLength: 128},
  companyWebsite: {type: String, required: true},
  location: {type: String, required: true},
  jobTitle: {type: String, required: true},
  description: {type: String, required: true},
  startDate: {type: Date, required: true},
  endDate: Date,
  createdAt: {type: Date, default: Date.now},
  user: {type: Schema.Types.ObjectId, ref: 'User'}
})

module.exports = mongoose.model('Portfolio', portfolioSchema);