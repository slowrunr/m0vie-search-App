const BASE_API_URL = "http://www.omdbapi.com";
const API_PERSONAL_KEY = "5b10ef8b";
NO_POSTER_IMAGE = "icons/no-poster-icon.png";

const movieCardNode = document.querySelector("#movieCard");

const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const movieId = urlParams.get("id");

//
getMovieInfoFromApiAndRender(movieId);

function getMovieInfoFromApiAndRender() {
  fetch(`${BASE_API_URL}?apikey=${API_PERSONAL_KEY}&i=${movieId}`)
    .then((response) => response.json())
    .then((movieInfo) => {
      const {
        Title,
        Year,
        Rated,
        Released,
        Runtime,
        Genre,
        Director,
        Actors,
        Plot,
        Awards,
        Poster,
      } = movieInfo;
      const backupImage = NO_POSTER_IMAGE;
      movieCardNode.innerHTML = `
        <h2>${Title}</h2>
        <div class="movie__poster-wrapper big">
        <img class="movie-poster" src="${Poster}" alt="${Title}" onerror="this.src='${backupImage}'">
        </div>
        <div class="movie-info">
            <p class="descriptor">Year: <span class="movie-year">${Year}</span></p>
            <p class="descriptor"> Rating: <span class="movie-year">${Rated}</span></p>
            <p class="descriptor"> Release Date: <span class="movie-year">${Released}</span></p>
            <p class="descriptor"> Runtime: <span class="movie-year">${Runtime}</span></p>
            <p class="descriptor"> Genre: <span class="movie-year">${Genre}</span></p>
            <p class="descriptor"> Director: <span class="movie-year">${Director}</span></p>
            <p class="descriptor"> Actors: <span class="movie-year">${Actors}</span></p>
            <p class="descriptor"> Awards: <span class="movie-year">${Awards}</span></p>
        </div>  
        <p class="descriptor"> Plot: <span class="movie-year">${Plot}</span></p>
     `;

      console.log(movieInfo);
    });
}
