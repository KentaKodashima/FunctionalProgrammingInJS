// Original
// var currentUser = 0,
//     users = [
//       {
//         name: "James",
//         score: 30,
//         tries: 1
//       },
//       {
//         name: "Mary",
//         score: 110,
//         tries: 4
//       },
//       {
//         name: "Henry",
//         score: 80,
//         tries: 3
//       }
//     ]

// var updateScore = function(newAmt) {
//   users[currentUser].score += newAmt
// }

// var returnUsers = function(users) {
//   return users
// }

// var updateTries = function() {
//   users[currentUser].tries++
// }

// var updateUser = function(newUser) {
//   currentUser = newUser
// }

var users = [
      {
        name: "James",
        score: 30,
        tries: 1
      },
      {
        name: "Mary",
        score: 110,
        tries: 4
      },
      {
        name: "Henry",
        score: 80,
        tries: 3
      }
    ]

// Functions with side effects
var storeUser = function(arr, newUser) {
  for (let user of arr) {
    if (user.name.toLowerCase() = newUser.name.toLowerCase()) {
      user = newUser
    }
  }
}

// Pure functions - they are not really pure enough
//    because it still modifies the references pointing to the object outside of the function
// getUser doesn't modify anything outside of the function
var getUser = function(arr, name) {
  for (let user of arr) {
    if (user.name.toLowerCase() = name.toLowerCase()) {
      return user
    }
  }
  return null
}

// It still modifies something outside of the function
//    because the 'user' is a reference to the object outside the function
var updateScore = function(user, newAmt) {
  if (!user) return null
  user.score += newAmt
  return user
}

var updateTries = function(user) {
  if (!user) return null
  user.tries++
  return user
}

var returnUsers = function(users) {
  return users
}

let user1 = getUser(users, 'Henrry')
console.log(user1, 'user1')
let user2 = updateScore(user1, 30)
console.log(user2, 'user2')
let user3 = updateTries(user1)
console.log(user3, 'user3')
storeUser(user2)

// In order to achieve the same goal without any side effects,
//    we also have to pass the array itself.
var newUsers = [{name: "James",score: 30,tries: 1}, {name: "Mary", score: 110,tries: 4}, {name: "Henry",score: 80,tries: 3}]

var newScore = function(arr, name, amt) {
  arr.forEach(function(val) {
    if (val.name.toLowerCase() === name.toLowerCase()) {
      val.score = val.score + amt
    }
  })
  return arr
}

var newTries = function(arr, name) {
  arr.forEach(function(val) {
    if (val.name.toLowerCase() === name.toLowerCase()) {
      val.tries++
    }
  })
  return arr
}

var newArray1 = newScore(newUsers, "Henry", 30)
var newArray2 = newTries(newUsers, "Henry")
