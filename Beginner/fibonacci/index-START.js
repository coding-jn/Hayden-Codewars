/*
Write a function to return the nth element in Fibonacci sequence,
where the sequence is:
    [1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, …]
*/


function fibonacci(n) {
    let fibSeq = [1, 1]
  
    //The last digits of the Fibonacci numbers repeat every 60 numbers
    for(i=1; i<n; i++){
      let nextNumber = fibSeq[fibSeq.length-1] + fibSeq[fibSeq.length-2]
      fibSeq.push(nextNumber)
    }
    
    //turn the number into a string to get the last digit
    return fibSeq[fibSeq.length-1]
}

module.exports = fibonacci