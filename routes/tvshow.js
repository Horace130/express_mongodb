const express = require("express");
//create a router for movies
const router = express.Router();

// load the models
const Tvshow = require("../models/tvshow");

// create the routes

// get all the movies. Pointing to /movies
router.get("/", async (req, res) => {
  const genre = req.query.genre;
  const rating = req.query.rating;
  const premiere_year = req.query.premiere_year;
  // create a container for filter
  let filter = {};
  // if genre exists, pass it to the filter container
  if (genre) {
    filter.genre = genre;
  }
  // if rating exist, pass it into the filter container
  if (rating) {
    filter.rating = { $gt: rating };
  }
  // if director exist, pass into the filter container
  if (premiere_year) {
    filter.premiere_year = { $gt: premiere_year };
  }

  // apply filter in .find()
  const tvshows = await Tvshow.find(filter);
  res.send(tvshows);
});

// get one movie by id
router.get("/:id", async (req, res) => {
  const id = req.params.id;
  const tvshow = await Tvshow.findById(id);
  res.send(tvshow);
});

module.exports = router;
