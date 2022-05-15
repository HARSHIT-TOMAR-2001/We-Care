const mongoose = require("mongoose");

const docSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  contact: { type: Number, required: true, unique: true },
  degree: { type: String , required: true},
  specialization: { type: String },
  certificate: { type: Buffer, contentType: String },
  city: { type: String, required:true },
  address:{type:String, required: true},
  password: { type: String, required: true, unique: true },
  slots:[{
      start_time:Date,
      end_time:Date,
      max_limit:{type:Number},
      curr_limit: {type: Number, default: 0}
  },{}]
});

const Doctor = mongoose.model("Doctor", docSchema);

module.exports = Doctor;
