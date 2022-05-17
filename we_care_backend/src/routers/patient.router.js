const {
    register,
 loginemail,
 book_slot
  } = require("../controller/patient.controller");
  
  const patientauthRouter = require("express").Router();
  
  patientauthRouter.post("/signup", register);
  patientauthRouter.post("/loginemail", loginemail);
  patientauthRouter.post('/bookslot',book_slot)
  // authRouter.post("/sendotp", sendotp);
  // authRouter.post("/verifyotp", verifyotp);
  module.exports = patientauthRouter;