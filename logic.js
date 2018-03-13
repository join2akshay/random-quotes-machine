const url = "https://random-quote-generator.herokuapp.com/api/quotes/random";
const quoteText = document.querySelector(".qoute-text");
const authorText = document.querySelector(".quote-author");
const fancyIcon = document.querySelector(".quote-icon");
const newquoteButton = document.querySelector(".bt1");
const tweetQuote = document.querySelector("#bt");

const colors = [
  "#8080ff",
  "#ffd24d",
  "#00cc00",
  "#ffa64d",
  "#ff00ff",
  "#d27979",
  "#ff99cc",
  "#737373"
];

let randomQuote =
    " They may take our lives, but they'll never take our freedom!",
  quoteAuthor = "Braveheart";

function changeColor() {
  let randomNumber = Math.floor(Math.random() * (8 - 1 + 1)) + 1;

  return colors[randomNumber - 1];
}

function newQuote() {
  fetch(url)
    .then(resp => resp.json())
    .then(function(data) {
      randomQuote = data.quote;
      quoteAuthor = data.author;

      authorText.innerHTML = "- " + quoteAuthor;
      quoteText.innerHTML =randomQuote;
    });

  let fontColor = changeColor();
  document.body.style.backgroundColor = fontColor;
  //fancyIcon.style.color = fontColor;
  quoteText.style.color = fontColor;
  authorText.style.color = fontColor;
  
}

function tweet() {
  window.open(
    `https://twitter.com/intent/tweet?text=${randomQuote} - ${quoteAuthor}`
  );
}
newquoteButton.addEventListener("click", newQuote);
tweetQuote.addEventListener("click", tweet);
