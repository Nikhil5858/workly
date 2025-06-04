const express = require('express');
const router = express.Router();
const { startRegistration , verifyOTPAndRegister , resendOTP } = require('../controller/userController');

router.post('/register/start', startRegistration);
router.post('/register/verify', verifyOTPAndRegister);
router.post('/register/resend-otp', resendOTP);

module.exports = router;