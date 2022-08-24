//Inspirational Quotes	

const API = "https://api.goprogram.ai/inspiration";

async function fetchData(URL_API) {

  const response = await fetch(URL_API);
  const data = await response.json();
  
  const quoteP = document.getElementById('quote');
  const authorP = document.getElementById('author');

  quoteP.innerHTML = ` "${data.quote}" `;
  authorP.innerHTML = data.author;
}

fetchData(API);