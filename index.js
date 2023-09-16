// const DEFAULT_INTRO_TEXT = "🤔Стало скучно?";
// const DEFAULT_MAIN_TEXT = "Не знаешь, чем заняться?";
// const ACTIVE_INTRO_TEXT = "УРА! Теперь не скучно!";

// const introTextNode = document.getElementById("introText");
// const actionOutputNode = document.getElementById("actionOutput");
const searchBtnNode = document.getElementById("searchBtn");

function getMovieFromApi() {
  fetch("http://www.omdbapi.com/?i=tt3896198&apikey=5b10ef8b")
    .then((response) => response.json())
    .then((res) => {
      if (res.ok) {
        return res;
      }
      const resFromApi = res.activity;
      //   console.log(actionFromApi);
      console.log(resFromApi);
    });
}

function searchMovieBtnHandler() {
  getMovieFromApi();
}

searchBtnNode.addEventListener("click", searchMovieBtnHandler);
