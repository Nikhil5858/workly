const express = require('express');
const router = express.Router();
const { startRegistration , verifyOTPAndRegister , resendOTP } = require('../controller/userController');
const loginController = require('../controller/loginController')

router.post('/register/start', startRegistration);
router.post('/register/verify', verifyOTPAndRegister);
router.post('/register/resend-otp', resendOTP);
router.post('/login',loginController.loginUser)

module.exports = router;