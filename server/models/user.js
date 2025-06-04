const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  role: { type: String, enum: ['client', 'freelancer', 'admin'], default: 'client' },
  skills: [String],
  portfolio: String,
  profilePicture: String,
  
  otp: { 
    type: String,
    required: false 
  },
  otpExpires: {
    type: Date,
    required: false
  },
  isVerified: {
    type: Boolean,
    default: false
  },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('User', userSchema);