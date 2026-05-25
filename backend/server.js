const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const bookingsRoute = require("./routes/bookings");

const app = express();

app.use(cors());
app.use(express.json());

mongoose.connect(
  "mongodb+srv://gouritshekar:Gouri@cluster0.kiwsyfm.mongodb.net/?appName=Cluster0"
)
.then(() => {
  console.log("MongoDB Connected");
})
.catch((err) => {
  console.log(err);
});

app.use("/api/bookings", bookingsRoute);

app.listen(5000, () => {
  console.log("Server running on port 5000");
});