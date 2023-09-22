const API_URL = "https://www.omdbapi.com/?s=batman&apikey=5b10ef8b";
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
  const movieTitle = titleInputNode.value;

  fetch(`http://www.omdbapi.com/?apikey=${API_PERSONAL_KEY}&s=${movieTitle}`)
    .then((response) => response.json())
    .then((data) => {
      searchResults = data.Search;
      movieListNode.innerHTML = "";
      if (data.Response === POSITIVE_RESPONSE) {
        data.Search.forEach((movie) => {
          const movieTitle = movie.Title;
          const movieYear = movie.Year;
          const movieType = movie.Type;
          const moviePoster = movie.Poster;

          const backupImage = NO_POSTER_IMAGE;

          const movieCardMini = `
              <li class="movie-card__mini">
                <div class="col">
                  <img class="movie-img" src="${moviePoster}" alt="${movieTitle}" onerror="this.src='${backupImage}'">
                </div>
                <div class="col">
                  <h2 class="movie-title">${movieTitle}</h2>
                  <p class="movie-year">${movieYear}</p>
                  <p class="movie-type">${movieType}</p>
                </div>
              </li>
            `;

          movieListNode.insertAdjacentHTML("beforeend", movieCardMini);
        });
        console.log(data);
      } else {
        const wrongTitleHTML = `
        <li class="error">Movie not found. Check if the title is correct and try again</li>
        `;
        movieListNode.insertAdjacentHTML("beforeend", wrongTitleHTML);
      }
    })
    .catch((error) => {
      console.log(error);
      const errorHTML = `
        <li class="error-message">An error occurred. Please try again later.</li>
        `;
      movieListNode.insertAdjacentHTML("beforeend", errorHTML);
    });

  clearInput();
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
