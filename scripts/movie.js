const BASE_API_URL = "http://www.omdbapi.com";
const API_PERSONAL_KEY = "5b10ef8b";
NO_POSTER_IMAGE = "icons/no-poster-icon.png";

const movieCardNode = document.querySelector("#movieCard");
const bacwardBtnNode = document.querySelector("#bacwardBtn");

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
        <h2 class="movie__title">${Title}</h2>
        <div class="movie__card-inner">
            <div class="poster__wrapper">
            <img class="movie-poster" src="${Poster}" alt="${Title}" onerror="this.src='${backupImage}'">
            </div>
            <div class="movie__info">
                <p class="descriptor"> Director: <span class="higlighted">${Director}</span></p>
                <p class="descriptor">Year: <span class="higlighted">${Year}</span></p>
                <p class="descriptor"> Actors: <span class="higlighted">${Actors}</span></p>
                <p class="descriptor"> Rating: <span class="higlighted">${Rated}</span></p>
                <p class="descriptor"> Awards: <span class="higlighted">${Awards}</span></p>
                <p class="descriptor"> Genre: <span class="higlighted">${Genre}</span></p>
                <p class="descriptor"> Runtime: <span class="higlighted">${Runtime}</span></p>
            </div>  
        </div>
        <p class="descriptor movie__plot">... ${Plot} </p>
        
     `;

      console.log(movieInfo);
    });
}
