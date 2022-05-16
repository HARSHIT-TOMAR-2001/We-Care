require("dotenv").config();
const mongoose = require("mongoose");

// const mongoUri = process.env.mongoURI;
// mongoose.connect("mongodb://localhost:27017/userDB")
const connectDB = () => {
  // mongoose
  //   .connect(mongoUri, { useNewUrlParser: true, useUnifiedTopology: true })
  //   .then((res) => {
  //     console.log("MongoDB Connected");
  //   });
  mongoose.connect("mongodb://localhost:27017/wecareDB").then((res) => {
        console.log("MongoDB Connected");
      });
};
module.exports = connectDB;
