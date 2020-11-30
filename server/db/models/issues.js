const mongoose = require('mongoose');
validator = require('validator');

const issuesSchema = new mongoose.Schema(
  {
    category: {
      type: String,
      trim: true,
      required: true
    },
    issuePhoto: {
      type: String,
      trim: true,
      required: true
    },
    description: {
      type: String,
      trim: true,
      required: true
    }
  },
  {
    timestamps: true
  }
);

const Issues = mongoose.model('Issues', issuesSchema);

module.exports = Issues;
