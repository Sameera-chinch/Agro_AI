const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();

app.use(cors({
  origin: "http://localhost:5001",
  credentials: true
}));

app.use(express.json());

// Connect to local MongoDB
mongoose.connect(process.env.MONGODB_URI)
  .then(() => console.log('✅ MongoDB connected at localhost:27017/logindb'))
  .catch(err => console.error('❌ Connection failed:', err));

// Routes
app.use('/api/auth', require('./routes/auth'));
app.use("/api/fields", require("./routes/fields"));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on http://localhost:${PORT}`));