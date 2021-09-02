// Procedure
function checkWords() {
  // trims
  // splits into array
  // checks the length
}

// Function
function trim() {}
function split() {}
function length() {}

// Arrow functions
var add = function(num1,num2) {
  return num1 + num2
}
// An arrow function returns automatically
var arrowAdd = (num1,num2) => num1 + num2
// No parentheses needed for a single arg
var arrowMultiply = num => num * num
// Parentheses needed to have no args
var func = () => 100

// Composing functions
// Original
let str = 'Innovation distinguishes between a leader and a follower.'
let prepareString = function () {
  let str1 = str.trim()
  let str2 = str1.replace(/[?.,!]/g, '')
  let str3 = str2.toUpperCase()
  let arr = str3.split(' ')

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 'A' || arr[i] === 'AN' || arr[i] === 'THE') {
      arr.splice(i, 1)
    }
  }
  return arr
}

// Composed version
str = 'Innovation distinguishes between a leader and a follower.'
const trim = (str) => str.replace(/^\s*|\s*$/g, '')
const noPunct = (str) => str.replace(/[?.,!]/g, '')
const capitalize = (str) => str.toUpperCase()
const breakout = (str) => str.split(' ')
const noArticles = (str) => str !== 'A' && str !== 'AN' && str !== 'THE'
const filterArticles = (arr) => arr.filter(noArticles)

// Not readable
// console.log(filterArticles(breakout(capitalize(noPunct(trim(str))))))

// A function to combine all the functions
// Right to left
const compose = function(...fns) {
  return function(x) {
    return fns.reduceRight(function(v, f) {
      return f(v)
    }, x) // Set x as the initial value
  }
}
// Arrow function versions
// const compose = (...fns) => (x) => fns.reduceRight((v, f) => f(v))
// const prepareString = compose(
//   filterArticles, 
//   breakout, 
//   capitalize, 
//   noPunct, 
//   trim
// )
// console.log(prepareString(str))
/**
 * [filterArticles, breakout, capitalize, noPunct, trim]
 * x = str
 * Step 1: trim(x)
 * Step 2: noPunct(trim(x))
 * Step 3: capitalize(noPunct(trim(x)))
 * Step 4: breakout(capitalize(noPunct(trim(x))))
 * Step 5: filterArticles(breakout(capitalize(noPunct(trim(x)))))
*/

// Left to right
const pipe = function (...fns) {
  return function (x) {
    return fns.reduce(function (v, f) {
      return f(v)
    }, x)
  }
}
// Arrow function versions
// const pipe = (...fns) => (x) => fns.reduce((v, f) => f(v))
const prepareString = pipe(
  trim,
  noPunct,
  capitalize,
  breakout,
  filterArticles
)

console.log(prepareString(str))