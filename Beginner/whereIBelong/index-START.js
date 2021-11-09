/*
Return the lowest index at which a value (second argument) should be
inserted into an array (first argument) once it has been sorted. The
returned value should be a number. E.g

whereIBelong([1,2,3,4], 1.5) // should return 1 because it is greater
than 1(index 0), but less than 2(index 1).
*/

/*
   Will there every be an incident where the num will end up being the first element in an array? Meaning there is no number before it ex. ([2, 3, 4], 1) => [1, 2, 3, 4] => what should it return?
*/

/* PREP
    P - 
      arr = [n1, n2, n3...]
      num = x
      lowestValue = y
    R -
      Return lowestValue
    E -
      arr = [2, 9, 7, 6]
      num = 8
      1. Sort arr first 
         arr = [2, 6, 7, 8]
         lowestValue = arr[0] = 2
      2. Iterate through array to compare numbers and reassign lowestValue
         2 (lowestValue) <= 8 (num) <= 6 => no, so lowestNumber = undefined
         6 <= 8 (num) <= 7 => no, so lowestNumber = undefined
         7 <= 8 (num) <= 8 => yes, so lowestNumber = 7
      4. return lowestNumber
    P -
      1. Sort array and define variables
      2. Iterate through each number to compare with num
         arr[i] <= num <= arr[i+1]
            if yes, lowestValue = arr[i]
      5. Return lowestValue

      Learned from testing: if an empty array then return 0, if lowestNumber = num then return the index of lowestNumber, else return lowestNumber
*/

function whereIBelong(arr, num) {
   let numbers = arr.sort()
   let lowestValue = undefined
   for(var i=0; i<numbers.length; i++){
      if(numbers[i] <= num && num <= numbers[i+1]){
         lowestValue = numbers[i]
      }
   }
   
   return numbers.length == 0 ? 0 : lowestValue == num ? numbers.indexOf(lowestValue) : lowestValue
}

module.exports = whereIBelong