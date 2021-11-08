/* CHALLENGE
Given a string of text, return the number of vowels found within the text
e.g vowelsCounter('anehizxcv') // will return 3
*/

//p --> string of text
//r --> vowels withing string
//e --> hello => 2
//p -->
// need to define what vowels are
// need to convert string into an array with split
// 

function vowelsCounter(text) {
    let vowels = ['a','e','i','o','u']

    let emptyArray = []

    let stringArray = text.toLowerCase().split('')
    //[h,e,l,l,o]


    stringArray.forEach(function(letter){
        if(vowels.includes(letter)){ 
            emptyArray.push(letter)
        }
    })

    return emptyArray.length

}


module.exports = vowelsCounter;
