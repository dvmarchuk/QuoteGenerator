/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// For assistance: 
  // Check the "Project Resources" section of the project instructions
  // Reach out in your Slack community - https://treehouse-fsjs-102.slack.com/app_redirect?channel=chit-chat

/*** 
 * `quotes` array 
***/

let quotes = [
  {
    quote: 'Two things are infinite: the universe and human stupidity; and I\'m not sure about the universe.',
    source: 'Albert Einstein',
    citation: 'goodreads',
    year: 'unknown'
  },

  {
    quote: 'If you tell the truth, you don\'t have to remember anything.',
    source: 'Mark Twain',
    citation: 'goodreads',
    year: '1935'
  },
  
  {
    quote: 'A day without sunshine is like, you know, night.',
    source: 'Steve Martin',
    citation: 'goodreads',
    year: '2013'
  },
  
  {
    quote: 'Never put off till tomorrow what may be done day after tomorrow just as well.',
    source: 'Mark Twain',
    citation: 'goodreads',
    year: '1870'
  },
  
  {
    quote: 'Never memorize something that you can look up.',
    source: 'Albert Einstein',
    citation: 'goodreads',
    year: 'unknown'
  }
];



/***
 * `getRandomQuote` function
***/



function getRandomQuote(){
  let randomNum = Math.floor(Math.random()*quotes.length);
  console.log(quotes[randomNum])
  return quotes[randomNum];
}




/***
 * `printQuote` function
***/
function printQuote(){
let getRandomQ = getRandomQuote();
let format = `<p class='quotes'>${getRandomQ.quote}</p><p class='source'>${getRandomQ.source}</p>`;

// 6. set the innerHTML of the quote-box div to equal the 
  // complete HTML string

  document.querySelector('.quote-box').innerHTML = format;

}


//To get a random quote object, create a variable and set it equal to a call to the getRandomQuote() function.

// Next create another variable and set it equal to two <p></p> elements. 
// The first element should have a class equal to “quotes” and the 
// randomQuote.quote property nested between the opening and closing tags. 
// The second element should have a class equal to “source” and 
// the randomQuote.source property nested between the tags.

/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);