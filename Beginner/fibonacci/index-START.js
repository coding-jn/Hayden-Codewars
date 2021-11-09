/*
Write a function to return the nth element in Fibonacci sequence,
where the sequence is:
    [1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, …]
*/

/*
PREP
params are an integer called n
returning an integer, more specifically the nth element in fib sequence
note: In mathematics, the Fibonacci numbers, form a sequence, 
called the Fibonacci sequence, 
such that each number is the sum of the two preceding ones, 
starting from 0 and 1. 
example:fib(1)=0 
fib(2)=1
fib(3)=fib(2)+fib(1)=3
fib(4)=fib(3)+fib(2)=4
….
fib(num)=fib(num-1)+fib(num-2)
*/


function fibonacci(num) {
  // Code goes here
  var num1=0;  //fib(1) one before previous
  var num2=1;  //fib(2) previous fib
  var sum; //initialize current fib
  var i=0; //for loop to nth fib
  for (i = 0; i < num; i++) 
  {
      sum=num1+num2; //current fib = previous + current fib
      // Next fibonacci number = previous + one before previous
      num1=num2;  //one before previous === previous fib
      num2=sum; //previous fib === current fib
  }
  return num2;  //return current fib at the end of the loop
}

module.exports = fibonacci