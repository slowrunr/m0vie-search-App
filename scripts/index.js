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
    });

  // movieSearchResult.movieListNode.forEach((movie) => {
  //   const movie = document.createElement("div");
  //   movieListNode.appendChild(movie);
  // });

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

searchBtnNode.addEventListener("click", getMovieFromOMDB);
titleInputNode.addEventListener("keypress", triggerBtnEnter);
