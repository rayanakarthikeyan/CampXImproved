const express = require("express");
const router = express.Router();
const Schedule = require("../models/Schedule");

// Get all schedules
router.get("/", async (req, res) => {
  try {
    const schedules = await Schedule.find();
    res.json(schedules);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Add a new schedule
router.post("/", async (req, res) => {
  const schedule = new Schedule({
    class: req.body.class,
    time: req.body.time,
  });

  try {
    const newSchedule = await schedule.save();
    res.status(201).json(newSchedule);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

module.exports = router;
