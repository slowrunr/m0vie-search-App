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
const barNode = document.getElementById("bar");

let movieList = [];

function showProgressBar() {
  let scrollPos =
    (window.scrollY / (document.body.scrollHeight - window.innerHeight)) * 100;
  barNode.style.width = `${scrollPos}%`;
  requestAnimationFrame(showProgressBar);
}
showProgressBar();

function searchMovieInOMDB() {
  localStorage.removeItem("searchResults");
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

              <li id="movieCardMini" class="movie__card-mini" onclick="location.href='../movie.html'">

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
        localStorage.setItem("searchResults", JSON.stringify(searchResults));
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

// ---- //
window.addEventListener("load", function () {
  const savedResults = this.localStorage.getItem("searchResults");

  if (savedResults) {
    searchResults = JSON.parse(savedResults);
    movieListNode.innerHTML = "";

    searchResults.forEach((movie) => {
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

    movieListNode.addEventListener("click", function (event) {
      const clickedElement = event.target.closest(".js-movie");
      if (clickedElement) {
        const movieTitle =
          clickedElement.querySelector(".movie-title").textContent;
        const movieYear =
          clickedElement.querySelector(".movie-year").textContent;
        const movieType =
          clickedElement.querySelector(".movie-type").textContent;

        const params = new URLSearchParams();
        params.set("title", movieTitle);
        params.set("year", movieYear);
        params.set("type", movieType);

        sessionStorage.setItem("searchResults", JSON.stringify(searchResults));
        window.location.href = `movie.html?${params.toString()}`;
      }
    });
  }
});
