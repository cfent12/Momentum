const quotes = [
    {
        quote: "It ain’t over till it’s over.",
        author: "Yogi Berra",
    },
    {
        quote: "Always make a tatal effort, even when the odds are against you.",
        author: "Arnold Daniel Palmer",
    },
]

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerHTML = todaysQuote.quote;
author.innerHTML = ` - ${todaysQuote.author}`;