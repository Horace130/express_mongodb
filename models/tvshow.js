// schema for movies collection
const { Schema, model } = require("mongoose");

// setup the schema
const tvshowSchema = new Schema({
  title: String,
  creator: String,
  premiere_year: Number,
  end_year: String,
  seasons: Number,
  genre: String,
  rating: Number,
});

// convert the schema to a model
const Tvshow = model("Tvshow", tvshowSchema);

module.exports = Tvshow; // equal to "export default Movie" in React
