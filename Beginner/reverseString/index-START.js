/* CHALLENGE
Given a string of text, write an algorithm that returns the text received in a reversed format. 
E.g reverseString('algorithms') // should return 'smhtirogla'
*/

//p --> string of text
//r --> reversed string
//e -->  hello => olleh
//p --> 


function reverseString(text) {
    return text.split('').reverse().join('')
}



module.exports = reverseString