/* CHALLENGE
Given a two strings, write an algorithm to check if they are anagrams
of each other. Return true if the pass the test and false if they
don't. E.g
    isAnagram('silent', 'listen') // should return true
*/



function isAnagram(stringA, stringB) { 
    let isAnagram = true 
    for(var i=0; i<stringA.length; i++){
        if(!stringB.includes(stringA[i])){
            isAnagram = false
        }
    }
    return isAnagram
}

module.exports = isAnagram