const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const authRoutes = require('./routes/auth');

// Load environment variables from .env file
dotenv.config();

// Debug ke liye print karo ke MONGO_URI properly load hua ya nahi
console.log('MONGO_URI:', process.env.MONGO_URI);

const app = express();
app.use(express.json());

// Auth routes
app.use('/api/auth', authRoutes);

const PORT = process.env.PORT || 5000;

// MongoDB se connect karo
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => {
  console.log('MongoDB connected');
  app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
})
.catch((err) => console.error('MongoDB connection error:', err));
