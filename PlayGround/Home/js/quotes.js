const quotes = [
  {
    quote: "True Knowledge exists in knowing that you know nothing.",
    author: "Socrates"
  },
  {
    quote: "Remember that there is nothing stable in the human life. Therefore do not be excited to the success or be depressed with the obstacl.",
    author: "Socrates"
  },
  {
    quote: "The secret of happiness is renunciation.",
    author: "Andrew Carnegie"
  },
  {
    quote: "Life is like riding a bicycle. To keep your balance you must keep moving.",
    author: "Albert Einstein"
  },
  {
    quote: "Never underestimate your own ignorance.",
    author: "Albert Einstein"
  },
  {
    quote: "You never know what life is like, until you have lived it.",
    author: "Marilyn Monroe"
  },
  {
    quote: "Nearly all men can stand adversity, But if you want to test a man's character, give him power.",
    author: "Abraham Lincoln"
  },
  {
    quote: "The weak can never forgive. Forgiveness is the attribute of the strong.",
    author: "Mahatma Gandhi"
  },
  {
    quote: "Live as if you were to die tomorrow. Learn as if you were to live forever.",
    author: "Mahatma Gandhi"
  },
  {
    quote: "Develop success from failures. Discouragement and failure are two of the surest stepping stones to success.",
    author: "Dale Carnegie"
  },

];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;