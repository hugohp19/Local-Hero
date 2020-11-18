const mongoose = require('mongoose');
validator = require('validator');

const userSchema = new mongoose.Schema({
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
  contactInfo: {
    email: {
      type: String,
      required: true,
      unique: true,
      trim: true,
      lowercase: true,
      validate(value) {
        if (!validator.isEmail(value)) {
          throw new Error('Email is invalid');
        }
      }
    },
    phoneNumber: [
      {
        number: {
          type: String,
          trim: true
        }
      }
    ],
    socialMedia: [
      {
        socialMediaName: {
          type: String,
          trim: true
        },
        username: {
          type: String,
          trim: true
        }
      }
    ],
    address: {
      street: {
        type: String,
        trim: true
      },
      city: {
        type: String,
        trim: true
      },
      state: {
        type: String,
        trim: true
      },
      zipCode: {
        type: String,
        trim: true
      }
    }
  }
});
