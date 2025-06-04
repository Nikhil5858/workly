const express = require('express');
require('dotenv').config(); 
const cors = require('cors');
const mongoose = require('mongoose');
const userRouter = require('./routes/userRoutes');

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Database Connection
const connectDB = async () => {
  try {
    await mongoose.connect("mongodb://localhost:27017/workly");
    console.log("MongoDB Connected Successfully");
  } catch (error) {
    console.error("Database Connection Error:", error);
    process.exit(1);
  }
};

// Routes
app.use('/api/user', userRouter);

// Start Server
const startServer = async () => {
  await connectDB();
  app.listen(5000, () => {
    console.log('Server running on port 5000');
  });
};

startServer();