/* CHALLENGE
Given a string of text, return true or false indicating whether or not the text is a palindrome.
e.g palindromeChecker('racecar') // will return true
*/




function palindromeChecker(text) {

    let firstHalf = Math.floor(text.length / 2)
    let stringOne = text.substring(0, firstHalf)
    let stringTwo = text.substring(firstHalf, text.length)

    if (text.length % 2 !== 0) {
        stringTwo = text.substring(firstHalf + 1, text.length)
    }

    for (let i = 0; i < firstHalf; i++) {
        let firstLetter = stringOne.charAt(i)
        let lastLetter = stringTwo.charAt((stringTwo.length - 1) - i)
        if (firstLetter !== lastLetter) {
            return false
        }
    }
    return true
}