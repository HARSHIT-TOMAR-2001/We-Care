const {
    register,
 loginemail
  } = require("../controller/doc.controller");
  
  const docauthRouter = require("express").Router();
  
  docauthRouter.post("/signup", register);
  docauthRouter.post("/loginemail", loginemail);
  // authRouter.post("/sendotp", sendotp);
  // authRouter.post("/verifyotp", verifyotp);
  module.exports = docauthRouter;