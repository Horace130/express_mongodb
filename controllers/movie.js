// load the models
const Movie = require("../models/movie");

// CRUD functions
// get all movies
const getMovies = async (genre, rating, director) => {
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
  if (director) {
    filter.director = director;
  }

  // apply filter in .find()
  const movies = await Movie.find(filter);
  return movies;
};

// get one movie
const getMovie = async (id) => {
  const movie = await Movie.findById(id);
  return movie;
};

// add new movie
const addNewMovie = async (title, director, release_year, genre, rating) => {
  // create new movie
  const newMovie = new Movie({
    title: title,
    director: director, // long method
    release_year, // short hand
    genre,
    rating,
  });
  // save the new movie into mongodb
  await newMovie.save();
  return newMovie;
};

// update movie
const updateMovie = async (
  id,
  title,
  director,
  release_year,
  genre,
  rating
) => {
  const updatedMovie = await Movie.findByIdAndUpdate(
    id,
    {
      title,
      director,
      release_year,
      genre,
      rating,
    },
    {
      new: true, // return back the updated data
    }
  );
  return updatedMovie;
};

// delete movie
const deleteMovie = async (id) => {
  return await Movie.findByIdAndDelete(id);
};

// export all the functions
module.exports = {
  getMovies,
  getMovie,
  addNewMovie,
  updateMovie,
  deleteMovie,
};
