// A function with a side effect
//  The following function has a side effect that it changes the variable's value that is outside of the function's scope.
/*let cnt = 0;
let increment = function() {
    cnt++;
    return cnt;
}*/

// A functional programmiing way of implementation
//  It doesn't modify a value that is outside of the function scope.
let increment = function(num) {
  return num + 1
}

let average = function(scores) {
  var total = 0
  for (let i = 0; i < scores.length; i++) {
    total += scores[i]
  }
  return total/scores.length
}
average([90, 30, 40, 50, 60])

/*var MAINAPP = (function(nsp) {
  var currentUser = 0,
      users = [{name: "James",score: 30,tries: 1}, {name: "Mary", score: 110,tries: 4}, {name: "Henry",score: 80,tries: 3}]

  var updateScore = function(newAmt) {
      users[currentUser].score += newAmt
  }

  var returnUsers = function() {
      return users
  }

  var updateTries = function() {
      users[currentUser].tries++
  }

  var updateUser = function(newUser) {
      currentUser = newUser
  }

  nsp.updateUser = updateUser
  nsp.updateTries = updateTries
  nsp.updateScore = updateScore
  nsp.returnUsers = returnUsers
  return nsp
})(MAINAPP || {})
// Sometimes, functions are executed in an order 
setTimeout(function() {MAINAPP.updateUser(2);}, 300)
setTimeout(function() {MAINAPP.updateScore(20);}, 100)
setTimeout(function() {MAINAPP.updateTries();}, 200)*/