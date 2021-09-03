var func = function func() {
  var a = 2,
      b = 3

  var func2 = function func2() {
    console.log((a + b));
  }

  // func2 will be executed even after the parent function is closed
  setTimeout(func2, 1000)
}
func()

var app = function module() {
  var a = 3

  var printIt = function printIt(val) {
    console.log(val)
  }

  var sumIt = function printIt(b) {
    print(a + b)
  }

  var multiplyIt = function printIt(b) {
    printIt(a * b)
  }

  return {
    sumIt: sumIt,
    multiplyIt: multiplyIt
  }
}
app.sumIt(5)
app.multiplyIt(5)