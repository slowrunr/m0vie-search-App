const API_URL = "https://www.omdbapi.com/?s=batman&apikey=5b10ef8b";
const API_PERSONAL_KEY = "5b10ef8b";
const BODY_FIXED = "body-fixed";
const POSITIVE_RESPONSE = "True";
const ERROR_MESSAGE_TEXT = "No such movie found 🤔";
const STATUS_OUT_OF_DATA_CLASSNAME = "border-red";

const titleInputNode = document.getElementById("titleInput");
const searchBtnNode = document.getElementById("searchBtn");
const movieListNode = document.getElementById("movieList");

let movieList = [];

function getMovieFromOMDB() {
  const movieTitle = titleInputNode.value;
  fetch(`http://www.omdbapi.com/?apikey=${API_PERSONAL_KEY}&s=${movieTitle}`)
    .then((response) => response.json())
    .then((res) => {
      if (res.ok) {
        return res;
      }
      const movieSearchResult = res.Search;
      console.log(movieSearchResult);
      movieListNode.innerText = `${movieSearchResult}`;
      //renderMovieList();
    });

  clearInput();
}

function renderMovieList() {
  movieListNode.innerHTML = "";

  if (response === POSITIVE_RESPONSE) {
    results.Search.forEach((movie) => {
      const renderedMovie = document.createElement("li");
      renderedMovie.setAttribute("id", movie.omdbID);
      renderedMovie.classList.add("movie-wrapper");

      // renderedMovie.innerHTML = `
      //   <div class="movies__img-container">
      //     <img class="movies__img" src="${movie.Poster}" alt="${movie.Title}">
      //   </div>
      //     <div class="movies__content-container">
      //     <h2 class="movies__title">Name: <span>${movie.Title}</span></h2>
      //     <p class="movies__year">Year: <span>${movie.Year}</span></p>
      //     <p class="movies__type">Type: <span>${movie.Type}</span></p>
      //   </div>
      // `;

      movieListNode.insertAdjacentHTML("beforeend", renderedMovie);
    });
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
