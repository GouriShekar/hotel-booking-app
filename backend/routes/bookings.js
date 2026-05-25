const express = require("express");

const router = express.Router();

const Booking = require("../models/Booking");

// GET BOOKINGS
router.get("/", async (req, res) => {

  try {

    const bookings = await Booking.find();

    res.json(bookings);

  } catch (error) {

    res.status(500).json(error);

  }
});

// CREATE BOOKING
router.post("/", async (req, res) => {

  try {

    const newBooking = new Booking(req.body);

    await newBooking.save();

    res.status(201).json({
      message: "Booking Saved",
    });

  } catch (error) {

    res.status(500).json(error);

  }
});
// DELETE BOOKING
router.delete("/:id", async (req, res) => {

  try {

    await Booking.findByIdAndDelete(req.params.id);

    res.json({
      message: "Booking Deleted",
    });

  } catch (error) {

    res.status(500).json(error);

  }
});

module.exports = router;