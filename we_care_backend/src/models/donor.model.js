const mongoose = require("mongoose");

const donorSchema = new mongoose.Schema({
  name: { type: String, required: true },
  contact: { type: Number, required: true,  },
  age: { type: Number, required: true  },
  gender: { type: String, required:true },
  bloodGroup:{type: String, required:true},
  city: { type: String, required:true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true, unique:true },
});

const Donor = mongoose.model("Donor", donorSchema);
module.exports = Donor;
