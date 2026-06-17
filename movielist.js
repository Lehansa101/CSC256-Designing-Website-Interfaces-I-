// Array used to store movie titles
let arrMovies = [];

// Adds a movie title to the array
function addMovie()
{
    let txtMovie = document.getElementById("txtMovie");
    let movieName = txtMovie.value.trim();

    if(movieName != "")
    {
        arrMovies.push(movieName);
        txtMovie.value = "";
    }
}

// Sorts and displays the movie list
function showMovies()
{
    let divMovies = document.getElementById("divMovies");

    arrMovies.sort();

    divMovies.innerHTML = arrMovies.join("<br>");
}

// Clears the movie list and display area
function resetMovieList()
{
    arrMovies = [];

    document.getElementById("divMovies").innerHTML =
    "Movie list will appear here.";
}