/*
    Write a program that prints the numbers from 1 to n. But for 
    multiples of three print “Fizz” instead of the number and for 
    the multiples of five print “Buzz”. For numbers which are 
    multiples of both three and five print “FizzBuzz”.
*/

// PREP
// params are n, any number from 1 to n
// returning fizz if the number is divisible by 3
// returning buzz if the number is divisible by 5
// returning fizzbuzz if the nubmer is divisible for 15
// example: 30 would return fizzbuzz

function fizzBuzz(n) {
    //looping through numbers 1 to n
    for (let i = 1; i <= n; i++) {
        // Is a multiple of 3 and 5?
        // needs to go first because if you put it last it would
        // never read fizzbuzz
        if (i % 3 === 0 && i % 5 === 0) { 
            console.log('fizzbuzz') 
            print('FizzBuzz')
        } else if (i % 3 === 0) {
            // Is a multiple of 3?
            console.log('fizz')
            print('Fizz')
        } else if (i % 5 === 0) {
            // Is a multiple of 5?
            console.log('buzz')
            print('Buzz')
        } else {
            // Is neither of the above?
            // going to return the same number
            console.log(i)
            print(i)
        }
    }
}

module.exports = fizzBuzz