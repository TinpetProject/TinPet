const express = require("express");
const router = express.Router();
const authController = require("../controllers/auth-controller");
const checkAuth = require("../middleware/check-auth");

router.post("/sign-up", authController.signUp);

router.post("/sign-in", authController.signIn);

router.post("/reset-password", authController.getResetPasswordLink);

router.post("/reset-password/:resetPwToken", authController.resetPassword);

router.post("/renew-token", authController.renewToken);

// router.use(checkAuth);

//change password
// router.put("");

module.exports = router;
