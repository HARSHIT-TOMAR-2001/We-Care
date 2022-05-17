const {
    register,
 loginemail
  } = require("../controller/patient.controller");
  
  const patientauthRouter = require("express").Router();
  
  patientauthRouter.post("/signup", register);
  patientauthRouter.post("/loginemail", loginemail);
  // authRouter.post("/sendotp", sendotp);
  // authRouter.post("/verifyotp", verifyotp);
  module.exports = patientauthRouter;