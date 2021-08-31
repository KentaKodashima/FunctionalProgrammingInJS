"use strict"
const arr = [3,4,2,5,1,6]
Object.freeze(arr)

const cloneObj = function(obj) {
  return JSON.parse(JSON.stringify(obj))
}

const newNums = cloneObj(arr).sort()

console.log(newNums) // sorted arr, without an error from Object.freeze
console.log(arr) // original arr

let obj = {
  fName: "Steven",
  lName: "Hancock",
  score: 85,
  completion: true,
  questions: {
    q1: {success: true, value: 1},
    q2: {success: false, value: 1}
  }
}

// Object.assign allows us to shallow copy of an object,
//    but the objects inside the object are still mutable
let obj2 = Object.assign({}, obj)
// Changing the value of an inner object affects the original object
//    even if the other part of the objects are copied properly
obj2.questions.q1.value = 5
console.log(obj) // q1.value is 5
console.log(obj2) // q1.value is 5

// Solution to this problem is using JSON.parsse and JSON.stringify
let obj3 = JSON.parse(JSON.stringify(obj))
obj3.questions.q2.value = 5
console.log(obj) // q2.value is 1
console.log(obj3) // q2.value is 5

let array = [{a: 1},{b: 2}]
let obj4 = Object.assign({}, array)
let obj5 = JSON.parse(JSON.stringify(array))
array[0].a = 5
console.log(obj4) // The value of a is changed to 5
console.log(obj5) // The value of a is still 1