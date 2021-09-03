function curry(fn, arity = fn.length) {
  // Invoke nextCurried() right away
  return (function nextCurried(prevArgs) {
    return function curried(nextArg) {
      console.log(prevArgs)
      console.log(nextArg)
      var args = [...prevArgs, nextArg]
      // See if all args are returned
      if (args.length >= arity) {
        // Finally return a function with all the returned args
        return fn(...args)
      } else {
        return nextCurried(args)
      }
    }
  })([])
}

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

const doubleNum = function (num) {
  return num + num
}

const totalIt = function (n1, n2, n3, n4) {
  return n1 + n2 + n3 + n4
}

const doArray = function (num1, num2) {
  return [num1, num2]
}

const curriedTotalIt = curry(totalIt)
const curriedDoArray = curry(doArray)

const newFunction = pipe(
  doubleNum,
  curriedTotalIt(3)(2)(1),
  curriedDoArray(50)
)

// CHecking out it works
let fn1 = curriedTotalIt(5) // totalIt() requires 4 args, the first one is filled as 5
let fn2 = fn1(6) // prevArg = [5], nextArg = 6
let fn3 = fn2(7) // prevArg = [5,6], nextArg = 7
let fn4 = fn3(8) // prevArg = [5,6,7], nextArg = 8
console.log(fn4) // 26

