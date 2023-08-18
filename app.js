const express = require("express");
const mongoose = require("mongoose");
const app = express();
require("dotenv").config();

PORT = process.env.PORT || 5000;

//-------------------------------------------route middleware---------------------------

app.use(express.json());
const userRoute = require("./routes/user.routes");
const courseRoute = require("./routes/course.routes");

app.use("/user", userRoute);
app.use("/course", courseRoute);

// -----------------------------------connect to the database----------------------

mongoose
  .connect(`${process.env.MongoUrl}`)
  .then(() => {
    console.log("database is connected");
  })
  .catch((err) => {
    console.log(err.message);
  });

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}....`);
});
