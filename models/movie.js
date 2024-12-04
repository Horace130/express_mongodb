// schema for movies collection
const { Schema, model } = require("mongoose");

// setup the schema
const movieSchema = new Schema({
  title: String,
  director: String,
  release_year: Number,
  genre: String,
  rating: Number,
  
});

// convert the schema to a model
const Movie = model("Movie", movieSchema);

module.exports = Movie; // equal to "export default Movie" in React
