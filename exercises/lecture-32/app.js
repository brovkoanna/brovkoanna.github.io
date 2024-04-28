const url = "https://jsonplaceholder.typicode.com/posts";

const template = (item) => `
<h3>${item.title}</h3>
<div>${item.body}</div>
<p>Author: <strong><span class="author" data-id="${item.userId}"></span></strong></p>
`;

const dataFetch = async (url) => {
  try {
    const response = await fetch(url);
    const responseJson = await response.json();
    return responseJson;
  } catch (error) {
    console.error(error.message);
  }
};

//console.log(dataFetch("GET", url));

dataFetch(url)
  .then((response) => {
    let result = "";
    response.forEach((item) => {
      result += template(item);
    });
    document.getElementById("blog").innerHTML = result;
  })

  .then(() => {
    const users = document.querySelectorAll(".author");
    users.forEach((user) => {
      dataFetch(
        `https://jsonplaceholder.typicode.com/users/${user.dataset.id}`
      ).then((response) => {
        user.textContent = response.name;
      });
    });
  });
