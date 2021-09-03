// Examples that first class functions are treated as values just like any other types.
// Example 1
var num = 28
var func = function() {
  console.log('hello')
}
func()

// Example 2
var arr = [28, function() {console.log('hi from an array')}, 'hey']
arr[1]()

// Example 3
var obj = {
  num: 20,
  func: function() { console.log('hi from an obj') }
}
obj.func()

// Example 4
console.log(28 + function() { return 10 }())

// Example 5
var addwo = function(num, fn) {
  console.log(num + fn())
}
addwo(28, function() { return 28 })

// Example 6
var returnNumber = function() { return 28 }
var returnFunc = function() {
  return function() { console.log('hi') }
}
var newFunc = returnFunc()
newFunc()