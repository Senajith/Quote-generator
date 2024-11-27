const url = "https://quotes-api-self.vercel.app/quote";


const quoteElement = document.querySelector(".quote");
const newQuoteButton = document.querySelector(".newquote");
const authorElement = document.querySelector(".author");

async function getQuote(url){
    const response = await fetch(url);
    const data = await response.json();  
    quoteElement.innerHTML = data.quote;
    authorElement.innerHTML = data.author;
}

newQuoteButton.addEventListener("click", () => getQuote(url));

getQuote(url);
