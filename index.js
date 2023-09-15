function getActionFromApi() {
  fetch("http://www.boredapi.com/api/activity")
    .then((response) => response.json())
    .then((res) => {
      if (res.ok) {
        return res;
      }
      const actionFromApi = res.activity;
      //   console.log(actionFromApi);
      actionOutputNode.innerText = `${actionFromApi}`;
    });
}
