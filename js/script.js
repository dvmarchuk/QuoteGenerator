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
    quote: '\"Two things are infinite: the universe and human stupidity; and I\'m not sure about the universe.\"',
    source: 'Albert Einstein',
    citation: 'goodreads',
    year: ''
  },

  {
    quote: '\"If you tell the truth, you don\'t have to remember anything.\"',
    source: 'Mark Twain',
    citation: 'goodreads',
    year: '1935'
  },
  
  {
    quote: '\"A day without sunshine is like, you know, night.\"',
    source: 'Steve Martin',
    citation: 'goodreads',
    year: '2013'
  },
  
  {
    quote: '\"Never put off till tomorrow what may be done day after tomorrow just as well.\"',
    source: 'Mark Twain',
    citation: 'goodreads',
    year: '1870'
  },
  
  {
    quote: '\"Never memorize something that you can look up.\"',
    source: 'Albert Einstein',
    citation: 'goodreads',
    year: ''
  }
];



/***
 * `getRandomQuote` function
***/



function getRandomQuote(){
  let randomNum = Math.floor(Math.random()*quotes.length); //finds a random number according to the number of quotes
  return quotes[randomNum];
}




/***
 * `printQuote` function
***/
function printQuote(){
  let getRandomQ = getRandomQuote();

  let format = `<p class='quote'>${getRandomQ.quote}</p>`;
  format += `<p class='source'>${getRandomQ.source}</p>`;

  //Checks if the quote has a citation
  if("citation" in getRandomQ){
    format += "<span class='citation'> "+  getRandomQ.citation + "</span>";
  }

  //Checks if the quote has a year
  if("year" in getRandomQ){
    format += "<span class='year'> "+  getRandomQ.year + "</span>";
  }

  //Pushes everything to the page to be displayed
  document.querySelector('.quote-box').innerHTML = format;

}



/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);