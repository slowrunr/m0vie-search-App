const API_URL = "https://www.omdbapi.com/?s=batman&apikey=5b10ef8b";
const API_CLUE = "5b10ef8b";
const BODY_FIXED = "body-fixed";
const ERROR_MESSAGE_TEXT = "No such movie found 🤔";
const STATUS_OUT_OF_DATA_CLASSNAME = "border-red";

// const barElNode = document.querySelector(".bar");
// const bodyNode = document.querySelector("body");
// const headerNode = document.querySelector(".header");

// const formNode = document.getElementById("form");
// const inputNode = document.getElementById("input");
// const moviesElNode = document.getElementById("movies__list");
// const movieCardNode = document.getElementById("movie__card-container");
// const closeButtonNode = document.getElementById("movie__card-close-btn");

const titleInputNode = document.getElementById("titleInput");
const searchBtnNode = document.getElementById("searchBtn");

function getMovieFromApi() {
  const params = new URLSearchParams(location.search);
  const id = params.get("id");
  console.log(id);

  fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
    .then((response) => response.json())
    .then((json) => console.log(json));
}

function searchMovieByTitle() {
  if (!titleInputNode.value) {
    titleInputNode.classList.add(STATUS_OUT_OF_DATA_CLASSNAME);
    return;
  }

  const movieTitle = titleInputNode.value.trim();

  // const watchlistItem = {
  //   id: Date.now(),
  //   text: watchlistItemTitle,
  //   itemWrapperStyle: false,
  //   checkboxStyle: false,
  //   watchlistTitleStyle: false,
  // };

  // renderWatchlistItem(watchlistItem);

  // watchlist.push(watchlistItem);

  // saveItemsToLocalStorage();

  titleInputNode.value = "";

  titleInputNode.focus();
}

function searchMovieBtnHandler() {
  getMovieFromApi();
}

searchBtnNode.addEventListener("click", searchMovieBtnHandler);
