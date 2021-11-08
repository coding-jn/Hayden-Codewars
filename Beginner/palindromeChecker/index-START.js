/* CHALLENGE
Given a string of text, return true or false indicating whether or not the text is a palindrome.
e.g palindromeChecker('racecar') // will return true
*/




function palindromeChecker(text) {
    let reverse = text.toLowerCase().split('').reverse().join('')
    return text === reverse
}



module.exports = palindromeChecker;