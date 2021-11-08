/* CHALLENGE
Given a sentence containing two or more words, 
return the equivalent of the sentence when capitalised. E.g
  capSentence('the tales of scotch!') // would return 'The Tales Of Scotch!' 
*/


function capSentence(text) {
  // Code here
  let allWords = text.toLowerCase().split(" ");
  let capWords = [];
  allWords.forEach((results) => {
    capWords.push(results[0].toUpperCase() + results.slice(1));
  });
  return capWords.join(" ");
}

module.exports = capSentence;