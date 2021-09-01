const users = [
  { name: 'James', score: 30, tries: 1 },
  { name: 'Mary', score: 110, tries: 4 },
  { name: 'Henry', score: 80, tries: 3 },
]

//Modifies Data
// Exercise 1: Modify the function to use map() so it doesn't mutate the origial
var storeUser = function (arr, user) {
  const newUsers = arr.map((obj) => {
    return obj.name.toLowerCase() === user.name.toLowerCase() ?
           user :
           obj
  })
  return newUsers
}

//Pure Functions
const cloneObj = function (obj) {
  return JSON.parse(JSON.stringify(obj))
}

// Exercise 2: Modify the function to use reduce() so it doesn't mutate the origial
var getUser = function (arr, name) {
  const user = arr.reduce((prev, obj) => {
    return obj.name.toLowerCase() === user.name.toLowerCase() ?
           obj :
           prev
  }, null)
  return user
}

// Not truely pure because it modifies the user
var updateScore = function (user, newAmt) {
  if (user) {
    user.score += newAmt
    return user
  }
}

// Not truely pure because it modifies the user
var updateTries = function (user) {
  if (user) {
    user.tries++
    return user
  }
}

const usr = getUser(users, 'Henry')
const usr1 = updateScore(cloneObj(usr), 30)
const usr2 = updateTries(cloneObj(usr1))
storeUser(users, usr2)
