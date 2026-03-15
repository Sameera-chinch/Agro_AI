const express = require("express");
const router = express.Router();
const Field = require("../models/Field");

router.get("/", async (req, res) => {
  try {
    const fields = await Field.find();
    res.json(fields);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;