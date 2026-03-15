const mongoose = require("mongoose");

const FieldSchema = new mongoose.Schema({
  fieldName: String,
  crop: String,
  acres: Number,
  health: Number,
  moisture: Number,
  ndvi: Number,
  status: String
});

module.exports = mongoose.model("Field", FieldSchema);