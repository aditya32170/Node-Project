const express = require("express");
const router = express.Router();
const authController = require("../controller/auth");
const {login} = require("../controller/auth");
const {loginValidator} = require("../validators/auth");
<<<<<<< HEAD
const { createUserValidator } = require("../validators/user");
const validateInput = require("../validators/validateInput");

router.post("/register", createUserValidator, validateInput, authController.register);
=======
const validateInput = require("../validators/validateInput");

>>>>>>> b946b757fec57116b51994e33f23f0f5789af10d
router.post("/login", loginValidator, validateInput, authController.login);

module.exports = router;