/* CHALLENGE
Given a string of text, return true or false indicating whether or not the text is a palindrome.
e.g palindromeChecker('racecar') // will return true
*/


/* P.R.E.P 
    //P - 
        function has a param that holds a string. string can include uppercase.
    //R -
        return needs to be true or false. I need to compare the param string lowercased and trimmed with the new reverse string
    //E
        example of a palindrome is 'racecar'
    //P
        first I need declare a new variable with the param (text) and lowercase
        then split.('') the string to have every letter in an array
        now that the new variable is an array i can use the method .reverse()
        once the array is reverse i can use the method .join('') to make it a string again

*/

function palindromeChecker(text) {
    //example: text.lowercase() 'raCeCAr' -> 'racecar'
    let lowerText = text.toLowerCase()
    //example: lowerText.lowercase().split('') 'racecar' -> ['r','a','c','e','c','a','r']
    //exmaple: lowerText.lowercase().split('').reverse() ['r','a','c','e','c','a','r'] -> ['r','a','c','e','c','a','r']
    //exmaple: lowerText.lowercase().split('').reverse().join('') ['r','a','c','e','c','a','r'] ->  'racecar'
    let newText = lowerText.split('').reverse().join('')

    //function is going to return true or false
    return newText === lowerText
    
}

module.exports = palindromeChecker