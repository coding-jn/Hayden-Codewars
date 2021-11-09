/* CHALLENGE
Given a string of text, write an algorithm that returns the text received in a reversed format. 
E.g reverseString('algorithms') // should return 'smhtirogla'
*/

// PREP 
// the params we are passing through is a string of text, not nums 
// we are returning the reversal of that string 
// example is the string 'dog' should return 'god'

function reverseString(text) {
    // using the spread method to isolate all of the letters in the string
    // then reversing the order of that string
    // and then joining the word back togother
    let reverse = [...text].reverse().join('')
    return reverse
}

module.exports = reverseString
