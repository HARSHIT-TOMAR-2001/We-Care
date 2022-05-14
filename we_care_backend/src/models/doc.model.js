const mongoose = require("mongoose");

const docSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  phone: { type: Number, required: true, unique: true },
  degree: { type: String },
  certificate: { type: String },
  gender: { type: String },
  specialization: { type: String },
  city: { type: String },
  address:{type:String},
  slots:[{
      start_time:"",
      end_time:"",
      max_limit:"",
      curr_limit:"by default zero"
  },{}]
});

const Doctor = mongoose.model("User", docSchema);

module.exports = Doctor;
