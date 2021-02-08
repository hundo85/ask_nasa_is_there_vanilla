const _load = async () => {
  const data = await fetch(
    "https://api.nasa.gov/planetary/apod?api_key=JZLWuJDR9crbBSjYEFfoziVpdkNQq6FNywPhfzdT"
  ).then((response) => response.json());

  const rootE = document.getElementById("root");
  rootE.insertAdjacentHTML(
    "beforeend",
    `
      <h1>${data.title}</h1>
      <img src="${data.url}" />
  `
  );
  console.log(data);
};

window.addEventListener("load", _load);
