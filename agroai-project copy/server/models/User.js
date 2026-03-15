const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name:      { type: String, required: true },
  email:     { type: String, required: true, unique: true },
  password:  { type: String, required: true },
  language:  { type: String, default: 'en' },
  createdAt: { type: Date, default: Date.now }
});

// 'logindets' = your existing collection name in logindb
module.exports = mongoose.model('User', userSchema, 'logindets');