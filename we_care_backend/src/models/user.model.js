const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  firstName: { type: String, required: true },
  lastName: { type: String,  },
  contact: { type: Number, required: true, unique: true },

  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  phone: { type: Number, required: true, unique: true },
  otp: { type: String },
});

const User = mongoose.model("User", userSchema);

module.exports = User;