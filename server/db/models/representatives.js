const mongoose = require('mongoose');
validator = require('validator');

const repSchema = new mongoose.Schema({
  name: {
    type: String,
    trim: true,
    required: true
  },
  party: {
    type: String,
    trim: true,
    required: true
  },
  position: {
    type: String,
    trim: true
  },
  roles: [
    {
      type: String,
      trim: true
    }
  ],
  level: {
    type: String,
    trim: true
  },
  photo: {
    type: String,
    trim: true
  },
  contactInfo: {
    phoneNumber: [
      {
        type: String,
        trim: true
      }
    ],
    channels: [
      // media: { type: String, trim: true }
    ],
    address: {}
  },
  urls: [
    {
      type: String,
      trim: true
    }
  ]
});

const Representative = mongoose.model('Representative', repSchema);

module.exports = Representative;
