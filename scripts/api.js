// const API_PERSONAL_KEY = "5b10ef8b";
// const movieTitle = titleInputNode.value;
// const movieID = movie.imdbID;

// function getMoviesFromAPI(movieTitle) {
//   fetch(`${BASE_API_URL}/?apikey=${API_PERSONAL_KEY}&s=${movieTitle}`)
//     .then((response) => response.json())
//     .then((data) => {
//       searchResults = data.Search;
//     })
//     .catch((error) => {
//       console.log(error);
//       const errorHTML = `
//           <li class="error__message">An error occurred. Please try again later.</li>
//           `;
//       movieListNode.insertAdjacentHTML("beforeend", errorHTML);
//     });
// }

function getMovieInfo(movieID) {
  return fetch(`${BASE_API_URL}?i=${movieID}&apikey=${API_PERSONAL_KEY}`).then(
    (data) => data.json().Search
  );
}
