const mongoose = require('mongoose');
moment = require('moment');

const userSchema = new mongoose.Schema(
  {
    firstName: {
      type: String,
      required: true,
      trim: true
    },
    lastName: {
      type: String,
      required: true,
      trim: true
    },
    email: {
      type: String,
      required: true,
      unique: true,
      trim: true
    },
    password: {
      type: String,
      required: true
    },
    admin: {
      type: Boolean,
      required: true,
      defualt: false
    },
    address: {
      city: {
        type: String,
        trim: true
      },
      zipcode: {
        type: Number,
        require: true,
        trim: true
      }
    },
    favRep: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'representative'
    }
  },
  {
    timestamps: true
  }
);

userSchema.methods.toJSON = function () {
  const task = this;
  const taskObject = task.toObject();
  if (taskObject.dueDate) {
    taskObject.dueDate = moment(taskObject.dueDate).format('YYYY-MM-DD');
  }
  return taskObject;
};
