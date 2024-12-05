// load the models
const Tvshow = require("../models/tvshow");

// CRUD functions
// get all movies
const getTvshows = async (genre, rating, premiere_year) => {
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
  return tvshows;
};

// get one movie
const getTvshow = async (id) => {
  const tvshow = await Tvshow.findById(id);
  return tvshow;
};

// add new movie
const addNewTvshow = async (
  title,
  creator,
  premiere_year,
  end_year,
  seasons,
  genre,
  rating
) => {
  // create new movie
  const newTvshow = new Tvshow({
    title,
    creator,
    premiere_year,
    end_year,
    seasons,
    genre,
    rating,
  });
  // save the new movie into mongodb
  await newTvshow.save();
  return newTvshow;
};

// update movie
const updateTvshow = async (
  id,
  title,
  creator,
  premiere_year,
  end_year,
  seasons,
  genre,
  rating
) => {
  const updatedTvshow = await Tvshow.findByIdAndUpdate(
    id,
    {
      title,
      creator,
      premiere_year,
      end_year,
      seasons,
      genre,
      rating,
    },
    {
      new: true, // return back the updated data
    }
  );
  return updatedTvshow;
};

// delete movie
const deleteTvshow = async (id) => {
  return await Tvshow.findByIdAndDelete(id);
};

// export all the functions
module.exports = {
  getTvshows,
  getTvshow,
  addNewTvshow,
  updateTvshow,
  deleteTvshow,
};
