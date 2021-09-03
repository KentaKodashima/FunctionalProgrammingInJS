const curryGreeting = function (greeting) {
  return function (name) {
    console.log(greeting + ' ' + name)
  }
}

// Pass 'welcome' as the first parameter for the outer func
const welcomeGreet = curryGreeting('Welcome')

// Pass any name as the first parameter for the inner func
welcomeGreet('Steve')
welcomeGreet('Mary')

// ====================
// Currying examples
// ====================
const pipe = (...fns) => (x) => fns.reduce((v, f) => f(v), x)
function curry(fn,arity = fn.length) {
  return (function nextCurried(prevArgs) {
      return function curried(nextArg) {
        var args = [ ...prevArgs, nextArg ]

        if (args.length >= arity) {
          return fn( ...args )
        }
        else {
          return nextCurried( args )
        }
      }
  })([])
}

const fFunc = function(a, b, c) {
  return a + b + c
}

const gFunc = function (d, e) {
  return d + e
}

const hFunc = function (f, g, h) {
  return f + g + h
}

const curriedF = curry(fFunc)
const curriedG = curry(gFunc)
const curriedH = curry(hFunc)

// The last parameter would be start as the parameter that we pass to call te composed func,
//    then the value from the previous func fills in to the next func's last parameter
const newFunc = pipe(
  curriedF(1)(2), // (a)(b)
  curriedG(3), // (d)
  curriedH(4)(5) // (f)(g)
)
newFunc(3)

const newFunc2 = pipe(
  curry(fFunc)(1)(2), // (a)(b)
  curry(fFunc)(3), // (d)
  curry(fFunc)(4)(5) // (f)(g)
)
newFunc2(3)

const doubleNum = function(num) {
  return num * 2
}

const totalIt = function(n1, n2, n3, n4) {
  return n1 + n2 + n3 +n4
}

const doArray = function(num1, num2) {
  return [num1, num2]
}

const newFunc3 = pipe(
  doubleNum,
  curry(totalIt)(1)(2)(3),
  curry(doArray(4))
)
newFunc3(5)