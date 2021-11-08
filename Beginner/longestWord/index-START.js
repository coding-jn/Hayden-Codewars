/* CHALLENGE
Given a string of text, write an algorithm that returns the text received in a reversed format. 
E.g reverseString('algorithms') // should return 'smhtirogla'
*/



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