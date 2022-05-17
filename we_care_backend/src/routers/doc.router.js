const {
    register,
 loginemail,
 create_slots
  } = require("../controller/doc.controller");
  
  const docauthRouter = require("express").Router();
  
  docauthRouter.post("/signup", register);
  docauthRouter.post("/loginemail", loginemail)
  docauthRouter.post('/slots/:id',create_slots)
  // authRouter.post("/sendotp", sendotp);
  // authRouter.post("/verifyotp", verifyotp);
  module.exports = docauthRouter;