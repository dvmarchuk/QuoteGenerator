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
  "quote 1",
  "quote 2",
  "quote 3",
  "quote 4",
  "quote 5"
];



/***
 * `getRandomQuote` function
***/

let randomNum = Math.floor(Math.random()*quotes.length);
console.log(randomNum);






/***
 * `printQuote` function
***/
//<h1>`${randomQuote}`</h1>



/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);