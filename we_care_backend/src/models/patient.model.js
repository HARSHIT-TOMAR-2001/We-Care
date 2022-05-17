const mongoose = require("mongoose");

const patientSchema = new mongoose.Schema({
  firstname: { type: String, required: true },
  lastname: { type: String,  },
  contact: { type: Number, required: true, },
  age:{type: Number, required: true},
  gender:{type: String, required: true},
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true , unique:true},
});

const Patient = mongoose.model("Patient", patientSchema);

module.exports = Patient;
