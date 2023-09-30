const BASE_URL = "http://www.omdbapi.com";
const API_PERSONAL_KEY = "5b10ef8b";

const movieCardNode = document.querySelector("#movieCardWrapper");

const movieId = "tt93336300";

getMovieInfo(movieId).then((result) => {
  const movie = result;
  console.log(movie);
  //   render(movie);
});

// function render(movie) {
//   const {
//     Title,
//     Year,
//     Rated,
//     Released,
//     Runtime,
//     Genre,
//     Director,
//     Actors,
//     Plot,
//     Awards,
//     Poster,
//   } = movie;
//   movieCardNode.innerHTML = "";
// }

function getMovieInfo(moviId) {
  return fetch(`${BASE_URL}/?apikey=${API_PERSONAL_KEY}&i=${imdbID}`).then(
    (data) => data.json().Search
  );
}
//
//
//   movieCardNode.innerHTML = "";
//   if (data.Response === POSITIVE_RESPONSE) {
//     data.Search.forEach((movie) => {
//       const { imdbID, Title, Year, Type, Poster } = movie;

//       const backupImage = NO_POSTER_IMAGE;

//       const movieCardMini = `
//           <li id="movieCardMini" class="movie__card-mini" onclick="location.href='/movie.html?id=${imdbID}'">
//             <div class="movie-poster__wrapper">
//               <img class="movie-poster" src="${Poster}" alt="${Title}" onerror="this.src='${backupImage}'">
//             </div>
//             <div class="movie-info">
//               <h2 class="movie-title">${Title}</h2>
//               <p class="movie-year">${Year}</p>
//               <p class="movie-type">${Type}</p>
//             </div>
//           </li>
//         `;

//       movieCardNode.insertAdjacentHTML("beforeend", movieCardMini);
//     });
//     console.log(data);
//   } else {
//     const wrongTitleHTML = `
//     <li class="error__message">Movie not found. Check if the title is correct and try again.</li>
//     `;
//     movieListNode.insertAdjacentHTML("beforeend", wrongTitleHTML);
//   }
// })
// .catch((error) => {
//   console.log(error);
//   const errorHTML = `
//     <li class="error__message">An error occurred. Please try again later.</li>
//     `;
//   movieListNode.insertAdjacentHTML("beforeend", errorHTML);
// });
// }

// fetch(
//   `https://www.omdbapi.com/?apikey=${apiKey}&t=${encodeURIComponent(
//     movieTitle
//   )}&y=${encodeURIComponent(movieYear)}&type=${encodeURIComponent(movieType)}`
// )
//   .then((response) => response.json())
//   .then((data) => {
//     const moviePoster = data.Poster;
//     const movieTitle = data.Title;
//     const movieYear = data.Year;
//     const movieRating = data.Rated;
//     const movieReleaseDate = data.Released;
//     const movieRunningTime = data.Runtime;
//     const movieGenre = data.Genre;
//     const movieDirector = data.Director;
//     const movieScreenplayer = data.Writer;
//     const movieStarring = data.Actors;
//     const moviePlot = data.Plot;

//     const fallbackImage = "resourses/undefined-movie.png";

//     const movieCardHTML = `
//       <div class="movie-card">
//         <div class="col">
//           <img class="movie-card-img" src="${moviePoster}" alt="${movieTitle}" onerror="this.src='${fallbackImage}'">
//         </div>
//         <div class="col">
//           <h2 class="movie-title">${movieTitle}</h2>
//           <div class="movie-desc__wrapper">
//             <p class="movie-desc">Year: <span>${movieYear}</span></p>
//             <p class="movie-desc">Rating: <span>${movieRating}</span></p>
//             <p class="movie-desc">Release date: <span>${movieReleaseDate}</span></p>
//             <p class="movie-desc">Running time: <span>${movieRunningTime}</span></p>
//             ${
//               movieGenre
//                 ? `<p class="movie-desc">Genre: <span>${movieGenre}</span></p>`
//                 : ""
//             }
//             ${
//               movieDirector
//                 ? `<p class="movie-desc">Directed by: <span>${movieDirector}</span></p>`
//                 : ""
//             }
//             ${
//               movieScreenplayer
//                 ? `<p class="movie-desc">Screenplayed by: <span>${movieScreenplayer}</span></p>`
//                 : ""
//             }
//             ${
//               movieStarring
//                 ? `<p class="movie-desc">Starring: <span>${movieStarring}</span></p>`
//                 : ""
//             }
//           </div>
//         </div>
//       </div>
//       <p class="movie-plot">${moviePlot}</p>
//     `;

//     movieCardNode.innerHTML = movieCardHTML;
//   })
//   .catch((error) => {
//     console.error(error);
//     const errorHTML = `<p class="error">An error occurred. Please try again later.</p>`;
//     movieCardNode.innerHTML = errorHTML;
//   });
