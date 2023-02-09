const btnEl = document.getElementById("btn");


const apiKey = "pPIJF0dg7Bec3gN75GDRpeocPnKoU35ju1IfsXaC";

const options = {
  method: "GET",
  Headers: {
    "X-Api-Key": apiKey,
  },
};

const apiURL = "https://api.api-ninjas.com/v1/dadjokes?limit=1";

async function getJoke(){
  const response = await fetch(apiURL, options);
  const data = await response.json();

  console.log(data);
}

btnEl.addEventListener("click", getJoke);