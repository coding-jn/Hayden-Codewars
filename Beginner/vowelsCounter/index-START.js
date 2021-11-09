/* CHALLENGE
Given a string of text, return the number of vowels found within the text
e.g vowelsCounter('anehizxcv') // will return 3
*/



/*
PARAMETERS
    given a string of text
    q - upper or lower case?
    q - any spaces or special chars?
RETURN
    returning the number of vowels found in text
    not a string or array of vowels
EXAMPLE
    hello => 2
    goodbye => 3
    aeiou => 5
PSUEDOCODE
    define what a vowel is
    split text into array
    compare text to vowels
        does text[i] include a vowel?
    push vowels in text to new array
    return length of new array
*/

function vowelsCounter(text) {

    // define what a vowel is
    let vowels = ['a','e','i','o','u']

    // empty array to push vowels to
    let emptyArray = []

    // split text into array
    let stringArray = text.toLowerCase().split('')

    // compare text to vowels
    stringArray.forEach(function(letter) {
        // does text[i] include a vowel?
        if(vowels.includes(letter)) { 
            // push vowels in text to new array
            emptyArray.push(letter)
        }
    })

    // return length of new array
    return emptyArray.length
}


module.exports = vowelsCounter;
