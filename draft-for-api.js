//draft for request response using fetch+methods+body+headers
fetch("https://jsonplaceholder.typicode.com/todos", {
  method: "POST",
  body: JSON.stringify({
    title: "new item",
    checked: false,
  }),
  headers: {
    "Content-Type": "application/json",
  },
})
  .then((response) => response.json())
  .then((json) => console.log(json));

//urlsearch
const params = new URLSearchParams(location.search);
const id = params.get("id");
console.log(id);

fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
  .then((response) => response.json())
  .then((json) => console.log(json));
