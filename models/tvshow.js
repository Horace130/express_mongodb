// schema for movies collection
const { Schema, model } = require("mongoose");

// setup the schema
const tvshowSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  creator: {
    type: String,
    required: true,
  },
  premiere_year: {
    type: Number,
    required: true,
  },
  end_year: {
    type: String,
    required: true,
  },
  seasons: {
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
const Tvshow = model("Tvshow", tvshowSchema);

module.exports = Tvshow; // equal to "export default Movie" in React
