const Router = require("express").Router();
// const authRouter = require("../routers/auth.router");
const docauthRouter = require("./doc.router");
const patientauthRouter = require("./patient.router");
Router.get("/", (req, res) => {
  res.send("Welcome to Seekmy-chat app");
});
Router.use("/auth/doctor", docauthRouter);
Router.use("/auth/patient", patientauthRouter);
// Router.use("/chatroom",chatRouter);
module.exports = Router;
