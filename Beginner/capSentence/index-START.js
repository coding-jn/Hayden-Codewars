/* CHALLENGE
Given a sentence containing two or more words, 
return the equivalent of the sentence when capitalised. E.g
  capSentence('the tales of scotch!') // would return 'The Tales Of Scotch!' 
*/


function capSentence(text) {
   return text.toLowerCase().split(' ').map( e => e.split('')[0].toUpperCase() + e.substr(1)).join(' ')
}



module.exports = capSentence