const scores = [50, 6, 100, 0, 10, 75, 8, 60, 90, 80, 0, 30, 110]

//Any scores that are below 10 needs to be multiplied by 10 and the new value included.
const arr1 = scores.map((el) => {
  if (el < 10) return el * 10
  return el

  // return el < 10 ? el * 10 : el
})
console.log(arr1, 'arr1')
console.log('==========')

//Remove any scores that are over 100.
const arr2 = arr1.filter((el) => {
  return el <= 100
})
console.log(arr1, 'arr1')
console.log('==========')

//Remove any scores that are 0 or below.
const arr3 = arr2.filter((el) => {
  return el > 0
})
console.log(arr1, 'arr1')
console.log('==========')

//Sum the scores.
const arr4 = arr3.reduce((prevSum, el) => {
  return prevSum + el
},0)
console.log(arr1, 'arr1')
console.log('==========')

//Provide a count for the number of scores still remaining.
const arr5 = scores.reduce((prevCount) => {
  return prevCount + 1
},0)
console.log(arr1, 'arr1')
console.log('==========')