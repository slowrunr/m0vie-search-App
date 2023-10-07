const BASE_API_URL = "https://www.omdbapi.com";
const API_PERSONAL_KEY = "5b10ef8b";
const BODY_FIXED = "body-fixed";
const NO_POSTER_IMAGE = "icons/no-poster-icon.png";
const POSITIVE_RESPONSE = "True";
const ERROR_MESSAGE_TEXT = "No such movie found 🤔";
const STATUS_OUT_OF_DATA_CLASSNAME = "border-red";

const titleInputNode = document.getElementById("titleInput");
const searchBtnNode = document.getElementById("searchBtn");
const movieListNode = document.getElementById("movieList");

let movieList = [];

function searchMovieInOMDB() {
  getMoviesFromApiAndRender();
  clearInput();
}

function getMoviesFromApiAndRender() {
  const movieTitle = titleInputNode.value;
  fetch(`${BASE_API_URL}?apikey=${API_PERSONAL_KEY}&s=${movieTitle}`)
    .then((response) => response.json())
    .then((data) => {
      searchResults = data.Search;
      movieListNode.innerHTML = "";
      if (data.Response === POSITIVE_RESPONSE) {
        data.Search.forEach((movie) => {
          const { imdbID, Title, Year, Type, Poster } = movie;

          const backupImage = NO_POSTER_IMAGE;

          const movieCardMini = `
              <li id="movieCardMini" class="movie__card-mini" onclick="location.href='/movie.html?id=${imdbID}'">
                <div class="movie__poster-wrapper">
                  <img class="movie-poster" src="${Poster}" alt="${Title}" onerror="this.src='${backupImage}'">
                </div>
                <div class="movie-info">
                  <h2 class="movie-title">${Title}</h2>
                  <p class="movie-year">${Year}</p>
                  <p class="movie-type">${Type}</p>
                </div>
              </li>
            `;

          movieListNode.insertAdjacentHTML("beforeend", movieCardMini);
        });
        console.log(data);
      } else {
        const wrongTitleHTML = `
        <li class="error__message">Movie not found. Check if the title is correct and try again.</li>
        `;
        movieListNode.insertAdjacentHTML("beforeend", wrongTitleHTML);
      }
    })
    .catch((error) => {
      console.log(error);
      const errorHTML = `
        <li class="error__message">An error occurred. Please try again later.</li>
        `;
      movieListNode.insertAdjacentHTML("beforeend", errorHTML);
      sessionStorage.setItem("searchResults", JSON.stringify(searchResults));
    });
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

searchBtnNode.addEventListener("click", searchMovieInOMDB);
titleInputNode.addEventListener("keypress", triggerBtnEnter);
