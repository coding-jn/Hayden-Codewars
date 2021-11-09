/*
Given an array, remove all falsy values from the array
and return an array of only truthy values.

E.g  falsyBouncer([1, 0, null, '', 5]) // should return [1,5]
*/

// the array is passed trough the function, the array has truthy values (1,5, "hi")
// and falsy values (null,NaN)

function falsyBouncer(array) {
    // Code goes here
// i need to loop through the array and identify all the falsy values
// those values needs to be removed from the array and an new array needs to be returned
// .filter loops through array and finds true values and puts it in a new array.
    return array.filter(x => !!x)
    // the filter will check if the elements are not false
}

// i need to return a new array with just truthy values
// array = [1,4]

module.exports = falsyBouncer