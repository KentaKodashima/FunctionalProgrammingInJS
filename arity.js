const pipe = function (...fns) {
  return function (x) {
    return fns.reduce(function (v, f) {
      return f(v)
    }, x)
  }
}

const compose = function (...fns) {
  return function (x) {
    return fns.reduceRight(function (v, f) {
      return f(v)
    }, x)
  }
}

const users = [
  { name: 'James', score: 30, tries: 1 },
  { name: 'Mary', score: 110, tries: 4 },
  { name: 'Henry', score: 80, tries: 3 },
]

//Modifies Data
var storeUser = function (arr, user) {
  return arr.map(function (val) {
    if (val.name.toLowerCase() === user.name.toLowerCase()) {
      return user
    } else {
      return val
    }
  })
}

//Pure Functions
const cloneObj = function (obj) {
  return JSON.parse(JSON.stringify(obj))
}

var getUser = function (arr, name) {
  return arr.reduce(function (obj, val) {
    if (val.name.toLowerCase() === name.toLowerCase()) {
      return val
    } else {
      return obj
    }
  }, null)
}

var updateScore = function (newAmt, user) {
  if (user) {
    user.score += newAmt
    return user
  }
}

var updateTries = function (user) {
  if (user) {
    user.tries++
    return user
  }
}

const usr = getUser(users, 'Henry')
const usr1 = updateScore(cloneObj(usr), 30)
const usr2 = updateTries(cloneObj(usr1))
const newArray = storeUser(users, usr2)

/**
 * Compose functions that take arguments, in other workds, arity
 * Arity: https://en.wikipedia.org/wiki/Arity
 * 
 * Composition works with functions with only one arity.
 * We use bind() to partially bind parameters prior to compose.
 * bind(): https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/bind#partially_applied_functions
 * About bind(this): https://stackoverflow.com/questions/2236747/what-is-the-use-of-the-javascript-bind-method
*/

// Partially apply one of the parameters using bind()
// bind() returns a new function
const partGetUser = getUser.bind(null, users)
const partUpdateScore30 = updateScore.bind(null, 30)
const updateUser = pipe(
  partGetUser,
  cloneObj,
  partUpdateScore30,
  updateTries
)
const newestUser = updateUser('Henrry')