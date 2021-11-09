/*
Write a function that returns the factorial of 
the provided integer(n). E.g
    factorial(5) // should return 120
*/

// PREP 
// params we are passing thru are an integer - 
// could be any whole number that is not a fraction - could be a negative num

// returning the factorial of that integer 

// note: a factorial, in mathematics, is the product of all positive integers less than 
// or equal to a given positive integer and denoted by that integer and an exclamation point.

// example would be if n = 3 then we would multiply 3 x 2 x 1 and return 6

function factorial(n){
    // if the number is negative then the result would be -1
    if(n < 0){
        return -1
    }
    // if the number is 0 then the result would be 0, because there are no numbers to multiply
    else if(n == 0){
        return 1
    }
    // if the number is not 0 and a positive number then we are going to multiply that num by the 
    // factorial method in js 
    else{
        return n * factorialize(n-1)
    }
}

module.exports = factorial