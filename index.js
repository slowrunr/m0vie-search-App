const API_URL = "https://www.omdbapi.com/?s=batman&apikey=5b10ef8b";
const API_PERSONAL_KEY = "5b10ef8b";
const BODY_FIXED = "body-fixed";
const ERROR_MESSAGE_TEXT = "No such movie found 🤔";
const STATUS_OUT_OF_DATA_CLASSNAME = "border-red";

const titleInputNode = document.getElementById("titleInput");
const searchBtnNode = document.getElementById("searchBtn");
const movieSearchResultsNode = document.getElementById("movieSearchResults");

let movieList = [];

function getMovieFromOMDB() {
  const movieTitle = titleInputNode.value;
  fetch(`http://www.omdbapi.com/?apikey=${API_PERSONAL_KEY}&s=${movieTitle}`)
    .then((response) => response.json())
    .then((searchResults) => {
      console.log(searchResults);
      movieList = searchResults.Search;
    });
  //need to be fixed!!!!!
  if (response === "True") {
    searchResults.Search.forEach((movie) => {
      const moviePoster = movie.Poster;
      const movieTitle = movie.Title;
      const movieYear = movie.Year;
      const movieType = movie.Type;
      //const fallbackImage = "resourses/undefined-movie.png";

      const movieHTML = `
        <li class="js-movie movie">
          <div class="col">
            <img class="movie-img" src="${moviePoster}" alt="${movieTitle}" onerror="this.src='${fallbackImage}'">
          </div>
          <div class="col">
            <h2 class="movie-title">${movieTitle}</h2>
            <p class="movie-year">${movieYear}</p>
            <p class="movie-type">${movieType}</p>
          </div>
        </li>
      `;

      movieSearchResultsNode.insertAdjacentHTML("beforeend", movieHTML);
    });

    clearInput();
  }
}

function clearInput() {
  titleInputNode.value = "";
  titleInputNode.focus();
}

function triggerBtnEnter(e) {
  if (e.key === "Enter") {
    e.preventDefault();
    document.getElementById("searchBtn").click();
  }
}

searchBtnNode.addEventListener("click", getMovieFromOMDB);
titleInputNode.addEventListener("keypress", triggerBtnEnter);
