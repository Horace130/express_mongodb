const express = require("express");
//create a router for movies
const router = express.Router();

// import functions from controller
const {
  getTvshows,
  getTvshow,
  addNewTvshow,
  updateTvshow,
  deleteTvshow,
} = require("../controllers/tvshow");

/* 
  create the routes (CRUD)
  GET /movies - get all the movies
  GET /movies/:id - get one movie by id
  POST /movies - add new movie
  PUT /movies/:id - update movie
  DELETE /movies/:id - delete movie
*/

// get all the movies. Pointing to /movies
router.get("/", async (req, res) => {
  try {
    const genre = req.query.genre;
    const rating = req.query.rating;
    const director = req.query.director;
    // use the getMovies from the controller to laod the movies data
    const tvshows = await getTvshows(genre, rating, director);
    res.status(200).send(tvshows);
  } catch (error) {
    res.status(400).send({
      error: error._message,
    });
  }
});

// get one movie by id
router.get("/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const tvshow = await getTvshow(id);
    res.status(200).send(tvshow);
  } catch (error) {
    res.status(400).send({
      error: error._message,
    });
  }
});

// add movie
// POST http://localhost:5555/movies
router.post("/", async (req, res) => {
  try {
    // retrieve the data from req.body
    const title = req.body.title;
     const creator = req.body.creator;
     const premiere_year = req.body.premiere_year;
     const end_year = req.body.end_year;
     const seasons = req.body.seasons;
     const genre = req.body.genre;
     const rating = req.body.rating;

    // check for error
    if (!title || !creator || !premiere_year || !end_year || !seasons || !genre || !rating) {
      return res.status(400).send({
        error: "Required data is missing",
      });
    }

    // pass in all the data to addNewMovie function
    const newTvshow = await addNewTvshow(
      title,
      creator,
      premiere_year,
      end_year,
      seasons,
      genre,
      rating
    );
    res.status(200).send(newTvshow);
  } catch (error) {
    // if there is an error, return the error code
    res.status(400).send({
      error: error._message,
    });
  }
});

// update movie
// PUT http://localhost:5555/movies/9kdm40ikd93k300dkd3o
router.put("/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const title = req.body.title;
    const creator = req.body.creator;
    const premiere_year = req.body.premiere_year;
    const end_year = req.body.end_year;
    const seasons = req.body.seasons; 
    const genre = req.body.genre;
    const rating = req.body.rating;
    // pass in the data into the updateMovie function
    const updatedTvshow = await updateTvshow(
      id,
      title,
      creator,
      premiere_year,
      end_year,
      seasons,
      genre,
      rating
    );
    res.status(200).send(updatedTvshow);
  } catch (error) {
    res.status(400).send({
      error: error._message,
    });
  }
});

// delete movie
// DELETE http://localhost:5555/movies/9kdm40ikd93k300dkd3o
router.delete("/:id", async (req, res) => {
  try {
    const id = req.params.id;
    // trigger the deleteMovie function
    await deleteTvshow(id);
    res.status(200).send({
      message: `Tvshow with the provided id #${id} has been deleted`,
    });
  } catch (error) {
    res.status(400).send({
      error: error._message,
    });
  }
});


module.exports = router;
