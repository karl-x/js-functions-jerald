p
// // sumArray(arr)

// // Define a function sumArray and a function multiplyArray that sums and multiplies (respectively) all the numbers in an array of numbers. For example, sumArray([1,2,3,4]) should return 10, and multiplyArray([1,2,3,4]) should return 24.

var arr = [1, 2, 3, 4]

function sumArray (digitsSum) {
  var def = 0

  for (var i = 0; i < digitsSum.length; i++) {
    def = def + arr[i]
  }
  return def
}

console.log(sumArray(arr))

// =====================================================================================================

function multiplyArray (digitsMul) {
  var def = 1

  for(var i = 0; i < digitsMul.length; i++) {
    def = def * arr[i]
  }
  return def
}
console.log(multiplyArray(arr))
