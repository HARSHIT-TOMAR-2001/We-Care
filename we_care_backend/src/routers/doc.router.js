const {
    register,
 loginemail,
 create_slot
  } = require("../controller/doc.controller");
  
  const docauthRouter = require("express").Router();
  
  docauthRouter.post("/signup", register);
  docauthRouter.post("/loginemail", loginemail)
  docauthRouter.post('/createslot',create_slot)
  // authRouter.post("/sendotp", sendotp);
  // authRouter.post("/verifyotp", verifyotp);
  module.exports = docauthRouter;