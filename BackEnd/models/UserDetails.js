const mongoose = require('mongoose')
const UserDetails = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  id: {
    type: String,
    required: true,
  },
  experience: {
    type: String,
    required: true,
  },
  dateOfBirth: {
    type: Date,
    required: true,
  },
  graduation: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  phone_number: {
    type: Number,
    required: true,
    length: 10,
  },
})
module.exports = mongoose.model('UserDetails', UserDetails, 'UserDetails')
