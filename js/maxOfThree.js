
var arr = []
for (var i = 0; i < 3; i++) {
  arr[i]=prompt('Enter number!');
}



function maxOfThree (num1, num2, num3) {
  var max = 0
  if ((num1 >= num2) && (num1 >= num3)) {
    max = num1
  }
      else if((num2 >= num3) && (num2 >= num1)) {
        max = num2
      }
        else {
          max = num3
        }
  return max
}

maxOfThree.apply(this, arr)
