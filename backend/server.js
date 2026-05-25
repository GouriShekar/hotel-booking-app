const express = require("express");

const mongoose = require("mongoose");

const cors = require("cors");

const bookingsRoute = require("./routes/bookings");

const app = express();

app.use(cors());

app.use(express.json());

mongoose.connect(
  "mongodb+srv://gouritshekar:Gouri@cluster0.kiwsyfm.mongodb.net/hotelBooking?retryWrites=true&w=majority"
)

.then(() => {

  console.log("MongoDB Connected");
})

.catch((err) => {

  console.log(err);
});

app.use("/api/bookings", bookingsRoute);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {

  console.log(`Server running on port ${PORT}`);
});