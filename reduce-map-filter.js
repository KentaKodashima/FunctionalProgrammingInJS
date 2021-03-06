let arr = [1, 2, 3, 4, 5]

// About reduce function: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce
let total = arr.reduce(function (accumulator, elem) {
  return accumulator + elem
}, 0)

let newArray = arr.map(function (val, index, array) {
  console.log(val)
  console.log(index)
  console.log(array)
  return val ** 2
})

let filterArray = arr.filter(function (val) {
  return val < 3
})
