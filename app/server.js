// This was borrowed from the Node Project - Diving Deeper on OMDB. This will serve as my API.

// initialize Express in project
const express = require('express');
const app = express();
const path = require('path');
const fs = require('fs');
const housingData = fs.readFileSync('./data/webscrapeResults.JSON', 'utf8'); //Currently only getting a single Org Unit. Might need to check the looping on the axios.all. Minimal data is at least being served.
const PORT = process.env.PORT || 8888;
app.use(express.static(__dirname + './build'))

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

// Sets up the file to be served to the results page
app.get('/data', (req, res) => {
      fs.readFile('./data/webscrapeResults.JSON', 'utf8', (e, data)=>{
        res.send(data);
      });
});
/*

// Function that searches the OMDB API for any and all results of the search
function searchOMDB(searchTerm, cb){
  // make an API request to OMDB API to 
  //  get all movies whose title matches searchTerm
  let url = "http://www.omdbapi.com/?s=" + searchTerm;
  request(url, function(error, response, body){
    if(error){
      console.log(error);
      return cb(err, null);
    }
    let result = JSON.parse(body);
      if (result !== -1) {
        return cb(null, result);
      } else {
          return res.redirect('/notfound');
      }
  });
}




// Sets up the individual movie pages based on what movieId is selected and matched against the list.
app.get('/movie/:movieId', (req, res) => {
    /* EDIT CODE HERE ----------------------------------
    render pages/movie with data of specfic movie
    -------------------------------------------------- 
    let indvMovie = {};
    for(i=0; i<movieArray.length; i++){
      if (movieArray[i].id == req.params.movieId){
        indvMovie = movieArray[i];
        break;
      }
    }
  res.render('pages/movie',{movie:indvMovie});
});

// Set up an empty global variable to hold the search by the user. Pass it into the function and use the /search path.
let searchQuery = "";
app.get('/search', (req, res) => {
  console.log(req.query.searchQuery);
  // this is the array to hold the search results
  let myResults = [];

  // Search OMDB for the results - From the code along
    searchOMDB(req.query.searchQuery, function(err, foundMovies){
    if(err){
      return console.log('There has been an error');
    }
    var movies = foundMovies.Search;
    var importedMovies = [];
    for(var i = 0; i < movies.length; i++){
      importedMovies.push({
        title: movies[i].Title,
        id: movies[i].imdbID,
        poster: movies[i].Poster,
        released: movies[i].Year,
      });
    }
    var apiData = {
      moviesProperty: importedMovies
    }
    res.render('pages/index', apiData);
  })
});

  /*
  // check if the movie exists in our data (static)
  for(let i=0; i<movieArray.length; i++){
    if(movieArray[i].title.toLowerCase().includes(req.query.searchQuery.trim().toLowerCase())){
      myResults.push(movieArray[i])
    } else { //Need to figure out how to pass the data from this search query to the /notfound path and allow the user to search again.
      return res.redirect('/notfound');
    }
  }

  // set up an object that can be handed to the search results and rendered onto the same template as the individual movie page.
  // const searchData = {
  //   movies: myResults
  // }
  // res.render('pages/index', searchData);
// });

// route for when the search is unable to find any results.
app.get('/notfound', (req, res) => {
  res.render('pages/404', {searchQuery});
});

 */
app.get('*', function (req, res) {
    res.sendFile(path.resolve((__dirname + './build/index.html')));
})

// start Express on port 8080
app.listen(PORT, () => {
	console.log('Server Started on ' + PORT);
	console.log('Press CTRL + C to stop server');
});