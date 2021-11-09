/* CHALLENGE
Given a sentence containing two or more words, 
return the equivalent of the sentence when capitalised. E.g
  capSentence('the tales of scotch!') // would return 'The Tales Of Scotch!' 
*/

// PREP 
// the params we are passing is a string of text containing two or more words 
// we are retuning the string with capitalization of each first letter in the word 
// example: 'hi nisha how are you' would be 'Hi Nisha How Are You'

function capSentence(text) {
  // we are creating a variable whos value is using the to lowercase method
  // in order to start with all lowercase words in the string
  // we are changing all of the text to be lowercase using the split method
  let allWords = text.toLowerCase().split(" ");
  // creating a varialbe that is an empty array, for now
  let capWords = [];
  // this is a loop through allWords variable that is going to add the new
  // words into the capWords array
  // then the results of those pushed text will be capitalized through the
  // toUpperCase method
  // then we are removing the first letter of the lowercase text and replacing it
  // with the uppercase letter, thus capitalizing the entire word 
  allWords.forEach((results) => {
    capWords.push(results[0].toUpperCase() + results.slice(1));
  });
  // joining all the letters in the individual words back together
  return capWords.join(" ");
}

module.exports = capSentence;
