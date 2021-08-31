"use strict"

// Const makes sure that it can't be re-assigned,
//    but objects still can be modified
//    because objects are passed as references in JS
const arr = [3,4,2,5,1,6]
// Object.freeze(arr) // Make the object immcutable, it can't even be sorted.

const sortArray = function(arr1) {
  return arr1.sort()
}

const newNums = sortArray(arr)

console.log(newNums) // sorted without Object.freeze
console.log(arr) // sorted without Object.freeze