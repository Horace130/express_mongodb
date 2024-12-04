// import express
const express = require("express");
const mongoose = require("mongoose");

// create the express app
const app = express();

// connect to MongoDB
mongoose
  .connect("mongodb://localhost:27017/netflix")
  .then(() => {
    // if mongodb is successfully connected
    console.log("MongoDB is connected");
  })
  .catch((error) => {
    console.log(error);
  });

// root route
app.get("/", (req, res) => {
  res.send("Happy coding!");
});

// import all the routes
// const movieRouter = require("./routes/movie");

// app.use("/movies", movieRouter);
const tvshowRouter = require("./routes/tvshow");

app.use("/tvshows", tvshowRouter);

// start the server
app.listen(5555, () => {
  console.log("Server is running at http://localhost:5555");
});
