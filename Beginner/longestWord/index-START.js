/* CHALLENGE
Given a string of text, write an algorithm that returns the text received in a reversed format. 
E.g reverseString('algorithms') // should return 'smhtirogla'
*/

//p --> string of text
//r --> return subbstring with longest length
//e --> how are you doing => doing
//p -->
//we need to convert the sentence into an array with split( )
//we need to declare a variable to store the current longest word
// in this solution we are using a for loop
// we iterate over each word and see if its lenght is higher that our initialized value.
// if true replace
//if false go to next word
//after iterating through all substrings return initialized value that now stores substring with longest length



function longestWord(text) {
    let sentence = text.split(' ')
    let longest = sentence[0]
    for(var i=1; i<sentence.length; i++){
        if(longest.length < sentence[i].length){
            longest = sentence[i]
        }
    }
    return longest
}


module.exports = longestWord