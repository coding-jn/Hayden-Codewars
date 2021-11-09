/* CHALLENGE
Given a two strings, write an algorithm to check if they are anagrams
of each other. Return true if the pass the test and false if they
don't. E.g
    isAnagram('silent', 'listen') // should return true
*/

//anagram: an anagram is a word or phrase formed by rearranging the letters of a different word or phrase

/* PREP
    P - 
        stringA - first word (ex. 'god')
        stringB - second word (ex. 'dog')
        isAnagram = true or false (false if conditions are NOT met to be an anagram)
    R -
        Return isAnagram at the end (true or false)
    E -
        1. isAnagram = true
        2. ('god') = ('g', 'o', 'd') 
        3. 'g' in stringB && 'o' in stringB && 'd' in stringB ? if not then isAnagram is false
        4. return isAnagram (which SHOULD be true)
    P -
        1. Create a variable that will be true or false depending on the results
        2. Iterate through each letter of stringA (using a for loop ?)
        3. Check whether that letter is also in stringB (some type of substring method ?)
        4. If the letter cannot be found in stringB then isAnagram = false, else isAnagram = true
*/

function isAnagram(stringA, stringB) { 
    //isAnagram will start off as true until we check the letters in the word
    let isAnagram = true 
    //iterate through each letter in stringA, if it's not included in stringB then it's no longer an anagram
    for(var i=0; i<stringA.length; i++){
        if(!stringB.includes(stringA[i])){
            isAnagram = false
        }
    }
    return isAnagram
}

module.exports = isAnagram