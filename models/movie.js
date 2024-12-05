// schema for movies collection
const { Schema, model } = require("mongoose");

// setup the schema
const movieSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  director: {
    type: String,
    required: true,
  },
  release_year: {
    type: Number,
    required: true,
  },
  genre: {
    type: String,
    required: true,
  },
  rating: {
    type: Number,
    required: true,
  },
});

// convert the schema to a model
const Movie = model("Movie", movieSchema);

module.exports = Movie; // equal to "export default Movie" in React
