//Inspirational Quotes	

const API = "https://api.goprogram.ai/inspiration";

async function fetchData(URL_API) {

  const response = await fetch(URL_API);
  const data = await response.json();
  
  const quoteP = document.getElementById('quote');
  const authorP = document.getElementById('author');

  quoteP.innerHTML = ` "${data.quote}" `;
  authorP.innerHTML = data.author;

  //adding twitter share button
  const quoteSection = document.querySelector('#quotes');
  const tweet = document.createElement('div');
  tweet.setAttribute('class', 'tweet-box');
  
  tweet.innerHTML = `<i></i><a class="btn" href="https://twitter.com/intent/tweet?hashtags=MyDailyQuote%2C&original_referer=https%3A%2F%2Fpublish.twitter.com%2F&ref_src=twsrc%5Etfw%7Ctwcamp%5Ebuttonembed%7Ctwterm%5Ehashtag%7Ctwgr%5EMyDailyQuote&text='${data.quote}' ${data.author}.&via=jarascript" class="twitter-hashtag-button" data-text="${data.quote}" data-show-count="false">Tweet #MyDailyQuote</a><script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>`;
  
  quoteSection.appendChild(tweet);

}

fetchData(API);